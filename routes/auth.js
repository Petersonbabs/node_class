
const express = require("express")
const { login, signup } = require("../controllers/auth")
const router = express.Router()

router.route("/login").post(login)
router.route("/signup").post(signup)


module.exports = router








// module.exports = {router, shhs, shs, shhs} // named exports
// commonJs, es6