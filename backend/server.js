import express from 'express'
import mongoConnection from './utils/mongoConnection.js'
import routes from './routes/routes.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// mongodb connection
mongoConnection()

// custom middlewares
app.use(routes)

app.use((req,res,err) =>{
    res.json(err)
})

app.listen(4000, () => console.log('connet to backend'))


