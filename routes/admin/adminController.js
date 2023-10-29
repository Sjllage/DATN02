const mailer = require('nodemailer');
const adminService = require('./adminService');

const login = async (name,password) => {
    return await adminService.login(name,password);
}


module.exports = { login};