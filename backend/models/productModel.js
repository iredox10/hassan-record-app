import mongoose from 'mongoose'

const product = new mongoose.Schema({
    productName:{
        type: String, 
        required: true,
        unique: true
    },
    quantity:{
        type: Number, 
        required: true,
    },
    pieces:{
        type: Number, 
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    // transactions: [{
    //         type: mongoose.Types.ObjectId,
    //         ref: 'Transaction'
    // }]
    transactions:Array

},{timestamps:true})

export const Product = mongoose.model('Product', product)