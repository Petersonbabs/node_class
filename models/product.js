const mongoose = require("mongoose");

// OBJECTID,  REF, POPULATE

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
    },
    email: {
        type: String,
    },  
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: [true, 'Category is required from category model']
    }
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel