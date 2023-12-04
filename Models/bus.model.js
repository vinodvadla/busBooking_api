const mongoose = require('mongoose')

let busSchema = mongoose.Schema({
    busname: {
        type: String,
        required: true,
    },
    busNumber: {
        type: String,
        required: true,
        unique: true
    },
    totalSeats: {
        type: Number,
        required: true,
    },
    availablSeats: {
        type: Number,
        required: true
    }
}, { timestamps: true })


let Bus = mongoose.model('Bus', busSchema)

module.exports = Bus
