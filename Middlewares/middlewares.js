const express = require('express');
const app = express();
const userRouter = require('../Routes/UserRoutes')
const BusRouter = require('../Routes/BusRotes')
const auth = require('../Middlewares/auth')
const bookingRouter = require('../Routes/bookingRoute')
const cors = require('cors')
require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth',userRouter)
app.use('/api/buses', auth, BusRouter)
app.use('/api/booking', auth, bookingRouter)

module.exports = app
