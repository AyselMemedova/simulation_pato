
const mongoose = require("mongoose")

const Simulation = mongoose.model("Simulation", new mongoose.Schema({
    title: {
        type: String,
    },
    description: { 
        type: String ,
    },
    image:{
        type: String,
    },
    price:{
        type:Number,
    },
}))

module.exports = { Simulation }
