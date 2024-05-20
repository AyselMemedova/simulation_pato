
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log("connected")
})

app.listen(8080, () => {
    console.log("server running on 8080")
})

const SimulationRouter = require("./routes/Simulation.routes");
app.use("/api/Simulation", SimulationRouter);
