

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const vaitroSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
});

module.exports = mongoose.models.vaitro || mongoose.model('vaitro', vaitroSchema);
