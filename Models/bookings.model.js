const mongoose = require('mongoose')

let bookingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    seatNo: {
        type: Number,
        required: true
    }
}, { timestamps: true })


let Booking=mongoose.model('Booking',bookingSchema)

module.exports=Booking
