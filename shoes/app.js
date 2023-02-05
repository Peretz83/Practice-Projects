let express = require("express")
let app = express()
let port = 3001
const cors = require('cors')
app.use(cors())
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}));
require('./dal/dal')
app.use(bodyParser.json())
const shoeRouter = require('./router/shoeController.js')
app.use('/api/leeshoes',shoeRouter)













app.listen(port, ()=>console.log(`PERETZ, You are listening to port http://localhost:${port}/api/leeshoes`))
