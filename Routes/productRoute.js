const express = require("express")

const User = require("../Models/Product")

const {product, addProduct, updateProduct, deleteProduct} = require("../controller/productController")

const router = express.Router()

router.get("/product",product)

router.post("/addProduct",addProduct)

router.put("/updateProduct/:id",updateProduct)

router.delete("/deleteProduct/:id",deleteProduct)

module.exports = router