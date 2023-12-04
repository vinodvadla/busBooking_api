const Bus = require('../Models/bus.model')

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
        if(!bus) return res.status(404).json('BUs not exists')
        return res.status(200).json(bus)
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}

module.exports={FindBuses,findById}
