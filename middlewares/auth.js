
const user = {
    name: 'james',
    role: 'admin' // admin
}

const isLoggedIn = (req, res, next)=>{
    console.log('hi');
    // get the bearer token
    // check if it's valid
    // fetch the user

    // if user is not logged in
    if(false){
        res.status(403).json({
            status: 'error',
            message: 'You must be logged.'
        })
        return
    }

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