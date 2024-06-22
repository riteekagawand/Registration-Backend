const mongoose = require("mongoose")

const prodScheme = new mongoose.Schema({
    _id : Number,
    name : String,
    price : Number,
    category : String,
    description : String,
    quantity : Number,
    warranty : Number
})

const Product = mongoose.model("Product",prodScheme)

module.exports = Product