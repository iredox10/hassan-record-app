import mongoose from 'mongoose'

const transaction = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    product:
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    payment:{
        type: String,
        required: true,
        toUpperCase: true
    }
  },
  { timestamps:true});

export const Transaction = mongoose.model('Transaction', transaction)