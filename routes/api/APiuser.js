
var userModel = require('../api/APiuser.js');
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require('../Users/UserController.js');
var userModel = require('../Users/UserModel.js');
const bcrypt = require('bcryptjs');
const mailer =  require("nodemailer");
const {validationRegister} = require('../../middle/Validation.js');
// unique string 
const {v4: uuidv4} = require("uuid");
// env variable
//require("dotenv").config();
// nodemailer stuff
/*let transperter = nodemailer.createTransport({
    service: gmail,
    auth: {
        user: process.env.AUTH.EMAIL,
        pass: process.env.AUTH.PASSWORD
    }
});*/

/*transporter.verify((error, succes)=> {
    if (error) {
        console.log(error);
    }else{
        console.log("Ready for messages ")
        console.log(success);
    }
})*/

//http://localhost:3000/api/user/register
//api register user
router.post('/register', [validationRegister], async(req, res, next)=>{
  try {
      const {name, email, sdt, password} = req.body;
      const user = await userController.register(name, email, sdt, password);
      if (user) {
          return res.status(200).json({result: true, user: user});
      } else {
          return res.status(400).json({result: false, user: null});
      }
  } catch (error) {
      console.log(error);
      return res.status(500).json({result: false, user: null});
  }
});


//api login user
router.post('/login', async(req, res, next)=>{
  try {
      const {email,password} = req.body;
      const user = await userController.login(email, password);
      if (user) {
          return res.status(200).json({result: true, user: user});
      } else {
          return res.status(400).json({result: false, user: null});
      }
  } catch (error) {
      console.log(error);
      next(error); //la danh cho web
      return res.status(500).json({result: false, user: null});
  }
});

// api resetPassword
router.post("/resetPassword", async(req, res, next)=>{
    let{id, resetString, newPassword} = req.body;

    PasswordReset
    .find({id})
    .then(result => {
        if (result.length > 0) {
            const {expiresAt} = result[0];
            const hashedResetString = result[0].resetString;

            if (expiresAt < Date.now()){
                PasswordReset.deleteOne({id})
                .then(res.json({
                    status: "Failed",
                    messenger: "errorMessage"
                }))
                .catch(error => {
                    res.json({
                        status: "Failed",
                        messenger: "errorMessage"
                    })
                })
            }else {
                bcrypt
                .compare(resetString, hashedResetString)
                .then((result) => {
                    if(result){
                        const saltRounds = 10;
                        bcrypt
                        .hash(newPassword, saltRounds)
                        .then(hashedNewPassword => {
                            // update  user password

                            user
                            .updateOne({_id: id}, {password: hashedNewPassword})
                            .then(() => {
                                // update completed
                                PasswordReset
                                .deleteOne({id})
                                .then(() => {
                                    res.json({
                                        status: "Success",
                                        messenger: "Success.",
                                    })
                                })
                                .catch(error => {
                                    res.json({
                                        status: "Failed",
                                        messenger: "Failed.",
                                    })
                                })
                            })
                            .catch(error => {
                                res.json({
                                    status: "Failed",
                                    messenger: "Failed.",
                                })
                            })
                        })
                        .catch(error => {
                            res.json({
                            status: "Failed",
                            messenger: "Failed.",
                        })
                        })
                    }else{
                        res.json({
                            status: "Failed",
                            messenger: "Failed.",
                        })
                    }
                })
                .catch(error =>{
                    res.json({
                        status: "Failed",
                        messenger: "Failed.",
                    })
                })
            }

        }else {
            res.json({
                status: "Failed",
                messenger: "Failed.",
            })
        }
    })
    .catch (error =>{
        console.log(error);
        next(error); //la danh cho web
        return res.status(500).json({result: false, user: null});
    }) 
})

module.exports = router;
