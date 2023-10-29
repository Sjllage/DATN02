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
const getAllusers_v2 = async (page, size) => {
    let skip = (page -1) * size;
    let limit = size;
    try {
      return await userModel
      .find({}, 'name email sdt')// chi lay 2 truong name va vaitro
      //.populate('vaitro', 'name')// lấy thông tin category
      .sort({ name : 1})// sắp xếp theo tê tăng dần
      .skip(0) // bỏ qua bao nhiêu sản phẩm
      .limit(); // giới hạn số lượng sản phẩm
    } catch (error) {
      console.log('Get all Doctor error: ', error);
      throw error;
    }
  }
  
module.exports = {login, register, getAllusers_v2};
