var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//session, cookies
const session = require('express-session');
const mongoose = require('mongoose');
require('./routes/vaitro/VaitroModel');
require('./routes/thuoc/thuocModel');
require('./routes/doctor/DoctorModel');
require('./routes/admin/adminModel');
require('./routes/lichkham/lichkhamModel.js');

var indexRouter = require('./routes/api/index');
const usersRouter = require('./routes/api/APiuser');
const thuocRouter = require('./routes/api/thuocAPI');
const APIDoctorRouter = require('./routes/api/APIDoctor');
const APIvaitroRouter = require('./routes/api/APIvaitro');
const APIadminRouter = require('./routes/api/APIadmin');
const APIlichkhamRouter = require('./routes/api/APIlichkham.js');

const usersCpanelRouter = require('./routes/Cpanel/UserCpanel');
const thuocCpanelRouter = require('./routes/Cpanel/thuocCpanel');
const doctorCpanelRouter = require('./routes/Cpanel/doctorCpanel');
const adminCpanelRouter = require('./routes/Cpanel/adminCpanel.js');
const lichkhamCpanelRouter = require('./routes/Cpanel/lichkhamCpanel.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Khai bao thong tin cua session
app.use(session({
  secret: 'iloveyou',//bi mat
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// localhost:3000/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/thuoc', thuocRouter);
app.use('/admin', APIadminRouter);
app.use('/doctor', APIDoctorRouter);
app.use('/lichkham', APIlichkhamRouter);

app.use('/api/user', usersRouter);
app.use('/api/thuoc', thuocRouter);
app.use('/api/APIDoctor',APIDoctorRouter);
app.use('/api/APIvaitro',APIvaitroRouter);
app.use('/api/APIadmin',APIadminRouter);
app.use('/api/APIlichkham', APIlichkhamRouter);

app.use('/cpanel/user', usersCpanelRouter);
app.use('/cpanel/thuoc', thuocCpanelRouter);
app.use('/cpanel/doctor', doctorCpanelRouter);
app.use('/cpanel/admin', adminCpanelRouter);
app.use('/cpanel/lichkham', lichkhamCpanelRouter);


mongoose.connect('mongodb://127.0.0.1:27017/Healthcare?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


