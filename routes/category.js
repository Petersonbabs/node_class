const express = require("express")
const { isLoggedIn, isAdmin } = require("../middlewares/auth")
const { createCategory, getCategories } = require("../controllers/category")
const router = express.Router()


router.route('/').post(isLoggedIn, isAdmin, createCategory).get(getCategories)



module.exports = router
