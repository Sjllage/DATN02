var express = require('express');
var router = express.Router();
const userController = require('../Users/UserController')
const adminController = require('../admin/adminController')
const doctorController = require('../doctor/DoctorControllers.js')
const jwt = require('jsonwebtoken');
//const {checkTokenCpanel} = require('../../middle/Authen');
const {validationRegister} = require('../../middle/Validation.js');

/* GET home page. */
// http://localhost:3000
router.get('/',function(req, res, next){
  //hiển thị trang chủ user
  res.render('index');
});

router.get('/admin',function(req, res, next){
  //hiển thị trang chủ admin
  res.render('indexadmin');
});

router.get('/doctor',function(req, res, next){
  //hiển thị trang chủ doctor
  res.render('indexdoctor');
});

router.get('/login',function(req, res, next){
  //hiển thị trang đăng nhập
  res.render('users/login');
});

router.get('/register',function(req, res, next){
  //hiển thị trang đăng nhập
  res.render('users/register');
});

router.get('/admin/login',function(req, res, next){
  //hiển thị trang đăng nhập
  res.render('admin/login');
});

router.get('/doctor/login',function(req, res, next){
  //hiển thị trang đăng nhập
  res.render('doctor/login');
});

// http://localhost:3000/admin/login
router.post('/admin/login', async function(req, res, next){
  const {name, password} = req.body;
  const result = await adminController.login(name, password);
  if(result){
    return res.redirect('/admin');
  }else{
    return res.redirect('/admin/login');
  }
});

// http://localhost:3000/admin/login
router.post('/doctor/login', async function(req, res, next){
  const {name, password} = req.body;
  const result = await doctorController.login(name, password);
  if(result){
    return res.redirect('/doctor');
  }else{
    return res.redirect('/doctor/login');
  }
});

// http://localhost:3000/login
router.post('/login', async function(req, res, next){
  //xử lý đăng nhập  
  //Nếu đăng nhập thành công thì chuyển qua trang chủ
  //Thất bại chuyển trang login
  const {email, password} = req.body;
  const result = await userController.login(email, password);
  if(result){
    //tao token
    //luu token vao trong session
    return res.redirect('/');
  }else{
    return res.redirect('/login');
  }
});
// http://localhost:3000/register
router.post('/register', [validationRegister], async function(req, res, next){
  //xử lý đăng ký  
  //Nếu đăng nhập thành công thì chuyển qua trang chủ
  //Thất bại chuyển trang login
  const {name, email, sdt, password} = req.body;
  const result = await userController.register(name, email, sdt, password);
  if(result){
    //tao token
    //luu token vao trong session
    return res.redirect('/');
  }else{
    return res.redirect('/register');
  }
});
// http://localhost:3000/logout
router.get('/logout', async(req, res, next) => {
  //req.session.destroy();
  res.redirect('/login');
})



module.exports = router;
