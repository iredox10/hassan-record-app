import mongoose from 'mongoose'

const user = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    pic:{
        type: String,
        required: true
    }
},{timestamp:true})

const User = mongoose.model('User',user)

export default User