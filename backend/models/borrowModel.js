import mongoose from 'mongoose'
const borrowSchema = new mongoose.Schema({
    collectorName: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
},{timestamps: true})

export const Borrow = mongoose.model('borrow',borrowSchema)

