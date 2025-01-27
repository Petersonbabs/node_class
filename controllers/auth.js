const UserModel = require("../models/auth")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const generateToken = require("../utils/randomString")
const sendVerificationEmail = require("../services/nodemailer/sendVerificationEmail")

const login = async (req, res) => {
   const {email, password} = req.body
   try {
    const user = await UserModel.findOne({email})
    if(!user){
        res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
        return
    }

    const passwordCorrect = await bcrypt.compare(password, user.password)
    if(!passwordCorrect){
        res.status(403).json({
            status: 'error',
            message: 'Email or password incorrect'
        })
        return
    }
    const token = jwt.sign({id: user._id, email}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRATION } )
    res.status(200).json({
        status: 'success',
        message: 'Login successful!',
        user,
        token
    })


   } catch (error) {
    console.log(error);
    
   }
}

const signup = async (req, res) => {
    const { name, email, password, age } = req.body
    try {
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        

        // GENERATE TOKEN 
        const verificationToken = generateToken(16)
        // CREATE VERIFICATION EXPIRATION
        const verificationExp =  Date.now() + 36000000
        

        const user = await UserModel.create({name, email, age, password: hashedPassword, verificationExp, verificationToken})
        if (!user) {
            res.status(400).json({
                status: 'error',
                message: 'Unable to signup'
            })
            return
        }

        sendVerificationEmail(name, email, verificationToken)

        res.status(201).json({
            status: 'success',
            message: 'Sign up successful.',
            user
        })


    } catch (error) {
        console.log(error);
    }
}

const logout = async (req, res)=>{
    // black current otken
    
}

module.exports = {
    login,
    signup
}
