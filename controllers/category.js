const CategoryCollection = require('../models/category')

// CREATE CATEGORY
const createCategory = async (req, res)=>{
    try {
        const category = await CategoryCollection.create(req.body)
        if(!category){
            res.status(404).json({
                status: 'error',
                message: 'Category not created!'
            })
            return
        }
        res.status(201).json({
            status: 'success',
            message: 'Category created successfully!',
            category
        })
    } catch (error) {
        console.log(error)
    }
}

// CREATE CATEGORY
const getCategories = async (req, res)=>{
    try {
        const categories = await CategoryCollection.find()
        if(!categories){
            res.status(404).json({
                status: 'error',
                message: 'Categories not found!'
            })
            return
        }
        res.status(201).json({
            status: 'success',
            message: 'Category created fetched!',
            categories
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createCategory,
    getCategories
}