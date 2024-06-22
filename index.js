const express = require("express")

const bodyParser = require('body-parser');

const mongoose = require ("mongoose")

const user = require("./Routes/userRoute.js")
const product = require("./Routes/productRoute.js")


mongoose.connect("mongodb://localhost:27017/sampleproject")

const PORT = 8000

const app = express()

app.use(express.json())
app.use(user)
app.use(product)

app.listen(PORT,() => 
    {
        console.log(`Server is running on port:${PORT}`)
    }


)