const express = require('express')
const { FindBuses, findById, addBus } = require('../Controllers/BusCont')
const router = express.Router()
router.get('/', FindBuses).get('/:id', findById).post('/', addBus)
module.exports = router
