
const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    price:{
        type: Number,
        required: true
    },
    makingPrice:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    active:{
        type: Number,
        default: true,
        required: true
    },
    picture:{
      type: String,
      required: true
    },
    description:{
        type: String,
        required: true
    },
    categoryId:{
        type: mongoose.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('dishes', dishSchema);