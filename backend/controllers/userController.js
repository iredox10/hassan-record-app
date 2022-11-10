import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import validator from 'validator'

const singJwt = (id,admin) =>{
    return jwt.sign({id:id,admin:admin},'secret-key')
}

export const add_user = async(req,res,next) =>{
    try {
        const user = await User.create(req.body)
        const jwt = singJwt(user._id,user.isAdmin)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const login = async(req,res,next) =>{
    try{
        const user = await User.findOne({username:req.body.username})
        if(!user){
            throw Error('no user found')
        }

        if(!req.body.password){
            throw Error('please provide your password')
        }

        if(req.body.password !== user.password){
            throw Error('password did not match')
        }
        const jwt = singJwt(user._id,user.isAdmin)
        res.json({user,jwt})
    }catch(err){
        res.json({err: err.message})
    }
}

export const delete_user = async(req,res,next) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const update_user = async(req,res,next) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}
