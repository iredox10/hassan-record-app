import mongoose from 'mongoose'

const transaction = new mongoose.Schema({
    productName:{
        type: String, 
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        Default: Date(),
    },
})

export const Transaction = mongoose.model('Transaction', transaction)