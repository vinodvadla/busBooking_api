const mongoose = require('mongoose');


const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'BusBooking'
        })
        console.log('database connected successfully')

    } catch (error) {
        console.log(error.message)
    }
}


module.exports=dbConn
