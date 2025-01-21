

const ProductsModel = require("../models/product")

//   - col.create({}), 
//  -   col.find(): return an array of all documents in the collection
//  - col.findOne({email $eq req.boy.email}) return a single document in a collection
// col.findById(req.params.productId)
// - col.findOneAndUpdate({email}, {req.body})
// - col.findOneAndDelete({email})


const addProduct = async (req, res) => {
    try {
        const product = await ProductsModel.create(req.body)
        if (!product) {
            res.status(400).json({
                status: 'error',
                message: 'Product not added..'
            })
            return
        }

        res.status(201).json({
            status: 'success',
            message: "Product added successfully",
            product
        })
    } catch (error) {
        console.log(error)
    }
}

const fetchProducts = async (req, res) => {
    try {
        const products = await ProductsModel.find().populate("category")
        if (!products) {
            res.status(404).json({
                status: 'error',
                message: 'Products not found..'
            })
            return
        }
        res.status(200).json({
            message: "Product fetched!",
            products
        })
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req, res) => {

    try {
        const updateProduct = await ProductsModel.findByIdAndUpdate(req.params.productId, req.body)
        if(!updateProduct){
            res.status(404).json({
                status: 'error',
                message: "Product not updated!"
            })
            return
        }
        res.status(200).json({
            message: "Product updated!",
            updateProduct
        })
    } catch (error) {
        console.log(error)
    }
}



const deleteProduct = async (req, res) => {
    console.log('req.params.productId');
    try {
        const GG =await ProductsModel.findByIdAndDelete(req.params.productId)
        res.status(200).json({
            message: "Product deleted!",
        })
    } catch (error) {
        console.log(error)
    }
}

const getSingleProduct = async (req, res) => {
    const { productId } = req.params
   try {
        const product = await ProductsModel.findById(productId)
       // erro hanlding
       if (!product) {
           res.status(404).json({
               status: 'error',
               message: "Product not found"
           })
           return
       }
    
       res.status(200).json({
           status: "success",
           message: '',
           product: product
       })
   } catch (error) {
    console.log(error)
   }

}

module.exports = {
    addProduct,
    fetchProducts,
    updateProduct,
    getSingleProduct,
    deleteProduct
}