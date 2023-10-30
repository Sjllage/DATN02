const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const adminSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    password: { type: String },
});
module.exports = mongoose.models.admin || mongoose.model('admin' , adminSchema);