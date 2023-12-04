const express = require('express')
const router = express.Router()
const { bookBus, getBookingById, deleteBooking, getAllBooking } = require('../Controllers/bookingCont')


router.post('/', bookBus)
    .get('/:id', getBookingById)
    .get('/all/:id', getAllBooking)
    .delete('/:id', deleteBooking)

module.exports = router
