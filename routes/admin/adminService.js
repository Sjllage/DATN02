const adminModel = require('./adminModel.js');
const bcrypt = require('bcryptjs');

const login = async (name, password) => {
    try {
        const user = await adminModel.findOne({name: name});
        if(user){
            const result = bcrypt.compareSync(password, user.password);
            if(result) {
                return result ? user : false;
            }
        }
    } catch (error) {
        console.log('Login error: ', error);
    }
    return false;
}


module.exports = {login};
