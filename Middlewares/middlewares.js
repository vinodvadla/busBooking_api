const express = require('express');
const app = express();
const userRouter=require('../Routes/UserRoutes')
const BusRouter=require('../Routes/BusRotes')
const auth=require('../Middlewares/auth')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth',userRouter)
app.use('/api/buses',auth,BusRouter)
module.exports = app
