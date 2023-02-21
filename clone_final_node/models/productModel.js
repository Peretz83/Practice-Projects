const mongoose = require('mongoose');
const validator = require('validator');


const productSchema = new mongoose.Schema({
  
product_name:{
  type:String,
  required:true,
  minlength:2,
  maxlength:30,

},
user_id:{
  type:String
},
product_description:{
  type:String,
  required:true,
  minlength:2,
  maxlength:2000,
},
product_price:{
  type:Number,
  required:true,
  },

image:{
  type:String
  },
  product_num:{
  type:Number,
  unique:[true,"Already exsists,please try again"],
  default:()=> Math.floor(1000000+Math.random()*900000)
  },
  createdAt:{
  type:Date,
  default:Date.now()
  }


});

const Product = mongoose.model("product",productSchema,"products")

module.exports = Product;