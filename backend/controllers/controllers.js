import {Product} from '../models/productModel.js'
import {Transaction} from '../models/transactionModel.js'

export const home = async (req,res) =>{
    res.json('welcome home')
}

export const add_product = async (req,res,next) =>{
    try{
        const product = await Product.create(req.body)
        res.status(201).json(product)
    }catch(err){
        res.json(err)
    }
}
export const test = async (req,res,next) =>{
    next()
}
export const view_products = async (req,res) =>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
}

export const view_product = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
}

export const delete_product = async (req,res) =>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
}

export const sale = async (req,res,next) =>{
   try{
        const transaction = await Transaction.insertMany(req.body)
        let body = req.body
        const tq = transaction.map(t=>(t.quantity))
        const tName = transaction.map(t=>(t.productName))
        const product = transaction.map(t => {
            const tr = t
            let tq = t.quantity
            const tName = t.productName
            const p = Product.updateMany({productName:tName},{
                $inc:{pieces: - tq},$push:{transactions: tr}
            })
            .then(r => res.json())
            .catch(err => console.log(err))
        })
        res.json(transaction)
    }catch(err){
       next(err)
    }
}


export const transactions = async (req,res,next) =>{
    try{
        const transc = await Transaction.find()
        res.json(transc)
    }catch(err){
        res.json(err)
    }
}
export const transaction = async (req,res,next) =>{
    try{
        const transc = await Transaction.findById(req.params.id)
        res.json(transc)
    }catch(err){
        res.json(err)
    }
}

export const payment = async (req,res,next) =>{
    try {
        const payment = await Transaction.aggregate([
            {$group:{
                "_id": "$payment",
                "count": {"$sum": 1}
            }}
        ])
        res.json(payment)
    } catch (err) {
      next(err)  
    }
}



export const monthStats = async (req,res,next) =>{
    try {
        const date = new Date()
        const lastMonth = new Date(date.setMonth(date.getMonth() -1))
        const stats = await Transaction.aggregate([
            {"$match": {"createdAt":lastMonth}},
            {"$project": {"productName":1}}
        ])
        res.json({lastMonth,stats})
    } catch (err) {
        next(err)
    }

}

export const yesterdayStats = async (req,res,next) =>{
    try {
        const date = new Date()
        const yesterday = new Date(date.setDate(date.getDate() -1))
        const stats = await Transaction.aggregate([
            {"$match": {"createdAt":yesterday}},
            // {"$project": {"$productName":1}}
        ])
        res.json(stats)
    } catch (err) {
        next(err)
    }

}

export const todayStats = async (req,res,next) =>{
    try {
        const date = new Date()
        const today = new Date(date.setDate(date.getDate()))
        const stats = await Transaction.aggregate([
            {'$match':{createdAt:{'$lte': today}}},
            {"$project": {
                month: {$month: '$createdAt'},
        }},
        {"$group":{
            _id: '$month',
            amount:{$sum:1}
        }},
        {"$project": {productName:1}}
        ]) 
        res.json({stats,today})
    } catch (err) {
        next(err)
    }

}


