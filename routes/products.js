const express = require('express')
const router = express.Router()
const Product = require('../models/product')
//const  = require('../models/category')


router.get('/', async(req,res) => {
    try{
           const products = await Product.find()
           res.json(products)
    }catch(err){
        res.send('Error1 ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const products = await Product.findById(req.params.id)
           res.json(products)
    }catch(err){
        res.send('Error2 ' + err)
    }
})


router.post('/', async(req,res) => {
    const product = new Product({
        name: req.body.name,
        categoryName: req.body.categoryName,
        productId: req.body.productId,
        price: req.body.price,
        available: req.body.available
    })

    try{
        const a1 =  await product.save() 
        res.json(a1)
    }catch(err){
        res.send('Error3 ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const product = await Product.findById(req.params.id) 
        product.available = req.body.available
        const a1 = await product.save()
        res.json(a1)   
    }catch(err){
        res.send('Error4' + err)
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const product = await Product.findById(req.params.id) 
        const a1 = await product.delete()
        res.send("Deleted sucsessfully")   
    }catch(err){
        res.send('Error5 ' + err)
    }

})

module.exports = router