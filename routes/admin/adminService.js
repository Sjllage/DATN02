const adminModel = require('./adminModel.js');
const bcrypt = require('bcryptjs');

const login = async (name, password) => {
    try {
        const admin = await adminModel.findOne({name: name});
        if(admin){
            const result = await adminModel.find({password: password});
            if(result) {
                return result ? admin : false;
            }
        }
    } catch (error) {
        console.log('Login error: ', error);
    }
    return false;
}


module.exports = {login};
