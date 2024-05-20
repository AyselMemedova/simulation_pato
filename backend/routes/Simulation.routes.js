
const express = require("express")
const { SimulationController } = require("../controllers/Simulation.controller")
const router = express.Router()

router.get("/", SimulationController.getAll)
router.get("/:id", SimulationController.getById)
router.post("/", SimulationController.add)
router.delete("/:id", SimulationController.delete)
router.put("/:id", SimulationController.edit)

module.exports = router 
