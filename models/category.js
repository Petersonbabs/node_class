const mongoose =  require("mongoose")

const CategorySchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: true
    },

    description: {
        type: String,
    }
})

const CategoryModel = mongoose.model("Categories", CategorySchema)
module.exports = CategoryModel