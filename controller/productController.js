const Product = require("../Models/Product")

const product = (req,res) => {
    res.send("Your product will be available soon!!!")  
 }

 const addProduct = async (req,res) =>{
    const product = new Product(req.body)
    await product.save()
    res.send(product)
 }
 const updateProduct = async(req,res) => {

    const params = req.params.id
    const product = await Product.findByIdAndUpdate(req.params.id,req.body)
 
    if(!product){
        res.send("No product present,update not available")
    }
    res.json({ message: "Product updated!!!",  product })
 }
 
 const deleteProduct = async(req,res) => {
    const params = req.params.id
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
        res.send("No product present,delete not available")
    }
    res.send(product).json("The delete has been successful!!!")
 }
 module.exports = {product,addProduct,updateProduct,deleteProduct}