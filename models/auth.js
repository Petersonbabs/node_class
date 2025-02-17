const mongoose =  require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
        minLength: 6
    },
    age: {
        type: Number
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    verificationToken: {
        type: String,
    },
    verificationExp:{
        type: Number
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel