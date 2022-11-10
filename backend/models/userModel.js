import mongoose from 'mongoose'

const user = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},{timestamp:true})

const User = mongoose.model('User',user)

export default User