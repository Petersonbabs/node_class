const express = require("express")
const { addProduct, fetchProducts, updateProduct, getSingleProduct } = require("../controllers/product")
const router = express.Router()

// parameter (params)

router.route('/').post(addProduct).get(fetchProducts).patch(updateProduct)

router.route("/:productId").get(getSingleProduct)



module.exports = router
