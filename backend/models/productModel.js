import mongoose from 'mongoose'

const product = new mongoose.Schema({
    productName:{
        type: String, 
        required: true,
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
    date:{
        default: Date
    },
    transactions: [{
            type: mongoose.Types.ObjectId,
            ref: 'Transaction'
    }]
    // transactions:Array

},{timestamp:true})

export const Product = mongoose.model('Product', product)