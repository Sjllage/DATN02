const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const doctorSchema = new Schema({
    id: { type: ObjectId }, //khóa chính
    name: { type: String },
    email: { type: String },
    sdt: { type: String },
    password: { type: String },
    mota: {type: String},
    image: {type: String},
    vaitro: {type: ObjectId, ref: 'vaitro'},// khóa ngoại
});
module.exports = mongoose.models.doctor || mongoose.model('doctor', doctorSchema);
