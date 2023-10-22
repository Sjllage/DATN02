const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const doctor = new Schema({
    id: { type: ObjectId }, //khóa chính
    idCate:{type:Number},
    name: { type: String },
    email: { type: Number },
    sdt: { type: Number },
    password: { type: String },
});
module.exports = mongoose.models.doctor || mongoose.model('doctor', doctor);
