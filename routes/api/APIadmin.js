var express = require("express");
var router = express.Router();
const adminController = require('../admin/adminController.js');

// http://localhost:3000/api/APIadmin/login
//api login user
router.post('/login', async(req, res, next)=>{
    try {
        const {name,password} = req.body;
        const user = await adminController.login(name, password);
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

module.exports = router;