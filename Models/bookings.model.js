const mongoose=require('mongoose')

let bookingSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    busId:{
        
    }
})
