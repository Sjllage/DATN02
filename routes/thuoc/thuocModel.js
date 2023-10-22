const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const thuocSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price: {type: Number},
    quantity: {type: Number},
    //Date: {type: Date},
    image: {type: String},
    //category: {type: ObjectId, ref: 'category'},// khóa ngoại
    
});

module.exports = mongoose.models.thuoc || mongoose.model('thuoc', thuocSchema);
