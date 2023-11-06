const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BenhAn = new Schema({
    id: { type: ObjectId },
    ten_benh_nhan: { type: String },
    gioi_tinh: { type: String },
    phongKham: { type: String },
    ngay_nhap_vien: { type: String },
    ngay_xuat_vien: { type: String },
    benh_an: { type: String },
    thuoc_da_ke_don: { type: String },
    trang_thai: { type: String },
    ngay_tao_benh_an: { type: String, default: '', default: Date.now() },
});
module.exports = mongoose.models.BenhAn || mongoose.model('BenhAn' ,BenhAn);