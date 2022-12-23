const mongoose = require('mongoose');

const smoothieSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    user_email:{
        type: String,
        required:true
    }
},{timestamps: true});


const Product = mongoose.model('product', smoothieSchema);
module.exports = Product;
