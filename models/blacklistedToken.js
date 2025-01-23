const mongoose =  require("mongoose")

const BlacklistedTokenSchema = mongoose.Schema({
    token: {
        required: true,
        type: String,
        unique: true
    }
})

const BlacklistedTokenModel = mongoose.model("BlacklistedTokens", BlacklistedTokenSchema)
module.exports = BlacklistedTokenModel