const express = require("express")
const { addProduct, fetchProducts, updateProduct, getSingleProduct } = require("../controllers/product")
const { isLoggedIn, isAdmin } = require("../middlewares/auth")
const router = express.Router()

// parameter (params)

router.route('/').post(isLoggedIn, isAdmin, addProduct).get(fetchProducts).patch(isLoggedIn, updateProduct)

router.route("/:productId").get(getSingleProduct)



module.exports = router
