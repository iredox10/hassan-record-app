import mongoose from 'mongoose'

const mongoConnection = async () => {
    try{
       const mongo = await mongoose.connect('mongodb://localhost/hassan-record-app')
       console.log('connect to mongo db')
    }catch(err){
        console.log(err)
    }
}

export default mongoConnection