const mailer = require('nodemailer');
const userService = require('./UserService');

const login = async (email,password) => {
    return await userService.login(email,password);
}
const getAllusers = async (page, size) => {
    return await userService.getAllusers_v2();
}
const register = async (name, email, sdt, password) => {
    return await userService.register(name, email, sdt, password);
}

module.exports = { login, register, getAllusers};