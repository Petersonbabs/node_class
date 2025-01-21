const express = require("express")
const { addProduct, fetchProducts, updateProduct, getSingleProduct, deleteProduct } = require("../controllers/product")
const { isLoggedIn, isAdmin } = require("../middlewares/auth")
const router = express.Router()

// parameter (params)

router.route('/').post(isLoggedIn, isAdmin, addProduct).get(fetchProducts)

router.route("/:productId").get(getSingleProduct).patch(isLoggedIn, updateProduct).delete(isLoggedIn, isAdmin, deleteProduct)



module.exports = router
