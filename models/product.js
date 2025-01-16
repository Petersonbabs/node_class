const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6
    },
    price: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    }
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel