const mongoose =  require("mongoose")

const ThemeSchema = mongoose.Schema({
    color: {
        required: true,
        type: String,
    }
})

const UserModel = mongoose.model("Themes", ThemeSchema)
module.exports = UserModel