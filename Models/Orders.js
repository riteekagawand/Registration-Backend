const mongoose = require("mongoose")

const orderScheme = new mongoose.Schema({
    _id : Number,
    name : String,
    date : Date,
    product_id : Number,
    quantity : Number,
    amount : Number,
    status : String
})

const Order = mongoose.model("Order",orderScheme)

module.exports = Order