const userModel = require('./UserModel.js');
const bcrypt = require('bcryptjs');

const login = async (sdt, password, email) => {
    /**
     *     const user = users.find(u => u.sdt == sdt);
    console.log(sdt, password, user);
    if(user && user.password == password) {
        return user;
    }
    return null;
     */
    try {
        //const {sdt, password} = req.body;
        const user = await userModel.findOne({email: email, sdt: sdt});
        // if(user) return false;
        // if(user.password.toString() == password.toString()){
        //     return user;
        // }
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

const register = async (sdt, password, name, email) => {
    try {
        const user = await userModel.findOne({email: email , sdt: sdt, name: name});
        if(user) return false;
        // mã hóa password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = {email, sdt, password : hash, name};
        const u = new userModel(newUser);
        await u.save();
        return true;
    } catch (error) {
        console.log('Register error: ', error);
    }
    return false;
}

module.exports = {login, register};
