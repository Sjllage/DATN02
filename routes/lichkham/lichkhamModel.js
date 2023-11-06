const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const lichkhamSchema = new Schema({
    id: { type: ObjectId },
    ngay: { type: String, default: "" },
    tgkham: {type: String, default: ""},
    doctor: {type: ObjectId, ref: 'doctor', default: ""},// khóa ngoại
});

module.exports = mongoose.models.lichkham || mongoose.model('lichkham', lichkhamSchema);
