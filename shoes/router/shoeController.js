const express = require('express')
const Router = express.Router()
const fs = require('fs')
const shoeModel = require('../models/shoeModel')
const shoeModelJoi = require('../models/shoeModelJoi')


/*
* GET http://localhost:3001/api/leeshoes
*/
Router.get("/", async (req, res) => {
    try {
res.send('it worked')
       
    } catch(err) {
        res.status(500).send(err.message)
    }
})


/*
* PUT http://localhost:3001/api/leeshoes/init
*/
Router.put("/init",async(req,res)=>{
try{
  shoeModel.collection.drop()
fs.readFile('./dal/shoe.json', 'utf8', (err, data)=>{
if (err){
  console.log(err);
  res.json('fail')
  return
}
const jsData = JSON.parse(data)
jsData.shoes.forEach(element => {
  new shoeModel(element).save()
});
res.json('init success')
})

}catch(err){
res.status(500).send(err.message)
}
})


module.exports = Router