const Bus = require('../Models/bus.model')
const Seats = require('../Models/seats.model')

const addBus = async (req, res) => {
    try {
        let { busname, busnumber, totalseats, availablSeats } = req.body
        if (!busname || !busnumber || !totalseats || !availablSeats) {
            return res.status(404).json('Please fill all the values')
        }
        let bus = new Bus({
            busname, busNumber: busnumber, totalSeats: totalseats, availablSeats
        })

        let seats = []
        for (let i = 1; i <= totalseats; i++) {
            let obj = { seatNo: i, isBooked: false }
            seats.push(obj)
        }

        let busId = bus._id
        let sts = new Seats({
            busId,
            Seats: seats
        })

        await sts.save()

        await bus.save()
        res.status(200).json('Bus details added successfully')
    } catch (error) {
        res.status(500).json('Internal Server error')
    }
}


let FindBuses = async (req, res) => {
    try {
        let buses = await Bus.find({})
        res.status(200).json({ buses })
    } catch (error) {
        res.status(500).json('Internal error')
    }
}


let findById = async (req, res) => {
    try {
        let id = req.params.id
        let bus = await Bus.findOne({ _id: id })
        if (!bus) return res.status(404).json('BUs not exists')
        return res.status(200).json(bus)
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}

module.exports = { FindBuses, findById, addBus }
