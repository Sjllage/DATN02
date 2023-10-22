const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const profileUser = new Schema({
    id: { type: ObjectId }, // khóa chính
    ho_ten: {        type: String, // kiểu dữ liệu
    },
    ten_tk: {      type: String, // kiểu dữ liệu
    },
    mat_khau: {       type: String, // kiểu dữ liệu
    },
    // email: {
    //     type: String, // kiểu dữ liệu
    // },
    sdt: {       type: Number, // kiểu dữ liệu
 },
    hoat_dong: {
        type: String, // kiểu dữ liệu
    },
});
module.exports = mongoose.models.profileUser || mongoose.model('profileUser', profileUser);

