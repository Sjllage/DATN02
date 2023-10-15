const userModel = require('./UserModel.js');
const bcrypt = require('bcryptjs');

const login = async (email, password) => {
    try {
        const user = await userModel.findOne({email: email});
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

const register = async (name, email, sdt, password) => {
    try {
        const user = await userModel.findOne({email: email});
        if(user) return false;
        // mã hóa password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = {name, email, sdt, password : hash};
        const u = new userModel(newUser);
        await u.save();
        return true;
    } catch (error) {
        console.log('Register error: ', error);
    }
    return false;
}

module.exports = {login, register};
