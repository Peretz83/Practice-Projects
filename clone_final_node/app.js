const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3005
app.use(express.json())
mongoose.set('strictQuery', true)
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})


mongoose.connect('mongodb://localhost:27017/cloneDB', {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() => {
    // eslint-disable-next-line no-console
    console.log(` connection to mongoose  succeed ! `);
})
.catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
});

const userRouter = require("./routes/userRoutes")
app.use("/api/users",userRouter)
const cardRouter = require("./routes/cardRoutes")
app.use("/api/cards",cardRouter)
const productRouter = require("./routes/productRoutes.js")
app.use("/api/products",productRouter)

const adminRouter = require("./routes/adminRoutes.js")
app.use("/api/admin",adminRouter)



app.listen(port, ()=>console.log(`Peretz you are listening to port http://localhost:${port}/api/users`))