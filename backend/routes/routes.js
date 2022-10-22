import express from 'express'
import * as controller from '../controllers/controllers.js'
const route = express.Router()

route.get('/',controller.home)

route.post('/add-product', controller.add_product)

route.get('/view-products', controller.view_products)

route.get('/view-product/:id', controller.view_product)

route.get('/test', controller.test)

route.post('/sale', controller.sale)

route.get('/transactions', controller.transactions)

route.get('/payment-method', controller.payment)

route.get('/last-month-stats', controller.monthStats)

route.get('/today-stats', controller.todayStats)
export default route