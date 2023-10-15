const mailer = require('nodemailer');
const userService = require('./UserService');

const login = async (email, password , sdt) => {
    return await userService.login(email, password, sdt);
}

const register = async (email, password, name, sdt) => {
    return await userService.register(email, password, name, sdt);
}

module.exports = { login, register};