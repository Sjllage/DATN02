

// bắt lỗi form đăng ký
const validationRegister = async (req, res, next) => {
    const { email , password, name  } = req.body;
    if (!email ||!password ||!name) {
        return res.status(400).json({result: false, message: 'Vui lòng nhập đầy đủ email, mật khẩu, họ và tên' });  
}else {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)){
        return res.status(400).json({result: false, message: 'Vui lòng nhập đầy đủ email' });
    }
    regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(password)) {
            return res.status(400).json({ result: false,
                 message: 'Mật khẩu phải có ít nhất 8 ký tự, chữ và số' });
        }
        return next();
}
}
module.exports = {validationRegister};
