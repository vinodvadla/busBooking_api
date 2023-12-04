const mongoose = require('mongoose')


let seatSchema = mongoose.Schema({
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Seats: [{
        seatNo: {
            type: Number,
            required: true
        },
        isBooked: {
            type: Boolean,
            default: false
        }
    }]
}, { timestamps: true })



const Seats = mongoose.model('Seats', seatSchema)

module.exports = Seats
