const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const profileUser = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {
        type: String, // kiểu dữ liệu
    },
    email: {
        type: String, // kiểu dữ liệu
    },
    password: {
        type: String, // kiểu dữ liệu
    },
    sdt: {
        type: String, // kiểu dữ liệu
    },
    hoat_dong: {
        type: Boolean, // kiểu dữ liệu
    },
});
module.exports = mongoose.models.profileUser || mongoose.model('profileUser', profileUser);

