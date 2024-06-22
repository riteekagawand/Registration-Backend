const Order = require("../Models/Orders")

const order = (req,res) => {
    res.send("Your order will be available soon!!!")  
 }

 const addOrder = async (req,res) =>{
    const order = new Order(req.body)
    await order.save()
    res.send(order)
 }
 const updateOrder = async(req,res) => {

    const params = req.params.id
    const order = await Order.findByIdAndUpdate(req.params.id,req.body)
 
    if(!order){
        res.send("No order present,update not available")
    }
    res.json({ message: "Order updated!!!",  order })
 }
 
 const deleteOrder = async(req,res) => {
    const params = req.params.id
    const order = await Order.findByIdAndDelete(req.params.id)
    if(!order){
        res.send("No Order present,delete not available")
    }
    res.send(order).json("The delete has been successful!!!")
 }
 module.exports = {order,addOrder,updateOrder,deleteOrder}