const Booking = require('../Models/bookings.model')
const Bus = require('../Models/bus.model')
let Seats = require('../Models/seats.model')


const bookBus = async (req, res) => {
    try {
        let { seatNo, busId } = req.body
        let id = req.user
        let booking = new Booking({
            userId: id,
            busId,
            seatNo
        })

        await booking.save()
        await Bus.findOneAndUpdate({ _id: busId }, { $inc: { availablSeats: -1 } })
        let item = { seatNo, isBooked: true }
        let seat = await Seats.findOneAndUpdate({ 'Seats.seatNo': seatNo }, { $set: { "Seats.$": item } }, { new: true })
        return res.status(200).json('Your bus booked successfully')
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}


const getBookingById = async (req, res) => {
    try {
        let id = req.params.id
        let booking = await Booking.findOne({ _id: id })
        if (!booking) return res.status(404).json('Booking not exists')
        res.status(200).json(booking)

    } catch (error) {
        res.status(500).json('Internal error')
    }
}

const deleteBooking = async (req, res) => {
    try {
        let id = req.params.id
        let booking = await Booking.findOne({ _id: id })
        if (!booking) return res.status(404).json('Booking not exists')
        await Booking.findOneAndDelete({ _id: id })
        res.status(200).json('Booking deleted successfully')
    } catch (error) {
        return res.status(500).json('Internal error')
    }
}
const getAllBooking = async (req, res) => {
    try {
        let id = req.params.id
        let booking = await Booking.find({ busId: id })
        res.status(200).json({ bookings: booking })

    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}

module.exports = { bookBus, getBookingById, deleteBooking, getAllBooking }
