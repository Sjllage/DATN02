const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    userid: { type: String },
    name: { type: String },
    sdt: { type: String },
    uniqueString: { type: String },
    //role: { type: Number, default: 1 },
});
module.exports = mongoose.models.userverification || mongoose.model('UserVerification' ,userSchema);