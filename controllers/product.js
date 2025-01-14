const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Headphones", price: 150, category: "Accessories" },
    { id: 3, name: "Coffee Maker", price: 80, category: "Appliances" },
    { id: 4, name: "Desk Chair", price: 200, category: "Furniture" },
    { id: 5, name: "Backpack", price: 50, category: "Travel" },
  ];
  
  

const addProduct = (req, res)=>{
    res.status(201).json({
        message: "Product created!"
    })
}

const fetchProducts = (req, res)=>{
    res.status(200).json({
        message: "Product fetched!",
        products
    })
}

const updateProduct = (req, res)=>{
    res.status(200).json({
        message: "Product updated!"
    })
}

const getSingleProduct = (req, res)=>{
    const {productId} = req.params
    const product = products.find(item=>item.id == productId)

    // erro hanlding
    if(!product){
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
}

module.exports = {
    addProduct,
    fetchProducts,
    updateProduct,
    getSingleProduct
}