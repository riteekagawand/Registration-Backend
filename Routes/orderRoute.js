const express = require("express")

const Order = require("../Models/Orders")

const {order,addOrder,updateOrder,deleteOrder} = require("../controller/orderController")

const router = express.Router()

router.get("/order",order)

router.post("/addOrder",addOrder)

router.put("/updateOrder/:id",updateOrder)

router.delete("/deleteOrder/:id",deleteOrder)

module.exports = router