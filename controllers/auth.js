const UserModel = require("../models/auth")

const login = (req, res) => {
    res.send("Login in...")
}

const signup = async (req, res) => {
    // const {name, email, password, age} = req.body
    try {
        const user = await UserModel.create(req.body)
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'Unable to signup'
            })
            return
        }

        res.status(201).json({
            status: 'success',
            message: 'Sign up successful.',
            user
        })

        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    login,
    signup
}
