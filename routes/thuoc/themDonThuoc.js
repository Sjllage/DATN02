const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DonThuoc = new Schema({
    id: { type: ObjectId },
    ten_don_thuoc: { type: String },
    so_luong_thuoc: { type: Number },
    chi_tiet: { type: String },
    ten_thuoc: { type: String },
    tong_tien: { type: Number }

});
module.exports = mongoose.models.DonThuoc || mongoose.model('DonThuoc' ,DonThuoc);