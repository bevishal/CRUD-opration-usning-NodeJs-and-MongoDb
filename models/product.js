const mongoose = require('mongoose')

//defining the schema


const productSchema = new mongoose.Schema({

    name: String,

    price: String,

    categoryName: String,

    productId:{
        type: String,
        reqired: true
    },
    
    available: {
        type: Boolean,
        required: true,
        default: false
    }

})
// const categorySchema = new mongoose.Schema({
//     categoyId: [productSchema.categoyId],
//     categoryName: [productSchema.name],

// })

module.exports = mongoose.model('Product',productSchema)