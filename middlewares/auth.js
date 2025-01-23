// fetch('j', {
//     headers: {
//         "content-type" : "",
//         'authorization' : " Bearer lkdnuguigdbvjksbfuigwuiuivhjfbsdklfuwyuhbjknjjkj "
//     }
// })
const BlackListedTokens = require('../models/blacklistedToken') 
const jwt = require('jsonwebtoken')
const Usercols = require('../models/auth') 


const isLoggedIn =  async(req, res, next)=>{
     let token;
     if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
     } 

     if(!token){
        res.status(403).json({
            status: 'error',
            message: "Token not provided"
        })
        return
     }

     const blacklisted = await BlackListedTokens.findOne({token})
     if(blacklisted){
        res.status(403).json({
            status: 'error',
            message: "Token has been blacklisted"
        })
        return
     }

     const decoded = jwt.decode(token, process.env.JWT_SECRET)
     console.log(decoded);
     const user = await Usercols.findById(decoded.id)
     if(!user){
        res.status(404).json({
            status: 'error',
            message: "User not found"
        })
        return
     }
     console.log(user);
     

     req.user = user
     

     
     next()
     
}



const isAdmin = (req, res, next) => {
    if(req.user.role !== "admin"){
        res.status(403).json({
            status: 'error',
            message: 'You have to be an admin to access this route'
        })
        return
    }

    next()
}


module.exports = {
    isLoggedIn,
    isAdmin
}