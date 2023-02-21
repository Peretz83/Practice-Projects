const express = require("express")
const router = express.Router()
const fs = require('fs')
const Product= require("../models/productModel")
const verify_logged_in = require("./../middleware/verify_log_in")



router.get("/",verify_logged_in, async(req,res)=>{
try{
const allProducts = await Product.find()
res.status(200).json({
  status:"success",
  results:allProducts.length,
  data:allProducts
})
}catch(err){
res.status(404).json({
  status:"Failed",
  message:err.message
})
}
})

router.post("/",verify_logged_in, async(req,res)=>{

})




module.exports = router;