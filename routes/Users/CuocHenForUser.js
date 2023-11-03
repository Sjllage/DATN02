const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CuocHenForUser = new Schema({
    id: { type: ObjectId },
    idKhoa: { type: String },
    ngay: { type: String },
    TimeStart: { type: String },
    TimeEnd: { type: String },
});
module.exports = mongoose.models.CuocHenForUser || mongoose.model('CuocHenForUser' ,CuocHenForUser);