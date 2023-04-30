const express=require("express")
const { postOrders } = require("../controller/orderController")
const orderRoute=express.Router()

orderRoute.post("/",postOrders)


module.exports={
    orderRoute
}