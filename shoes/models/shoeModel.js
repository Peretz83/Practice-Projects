const mongoose = require("mongoose");


const ShoeSchema = mongoose.Schema({
    prod_id: Number,
    category: String,
    brand: String,
    title: String,
    size: Number,
    color: String,
    orthpedix: Boolean,
    image:String
})

const ShoeModel = mongoose.model("ShoeModel", ShoeSchema, "shoe");

module.exports = ShoeModel;

