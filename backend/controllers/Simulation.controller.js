
const { Simulation } = require("../models/Simulation.model")

const SimulationController = {
    getAll: async (req, res) => {
        try {
            const items = await Simulation.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Simulation.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newBlog = new Simulation({ ...req.body })
            await newBlog.save()
            const items = await Simulation.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Simulation.findByIdAndDelete(id)
            const items = await Simulation.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Simulation.findByIdAndUpdate(id, { ...req.body })
            const items = await Simulation.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { SimulationController }
