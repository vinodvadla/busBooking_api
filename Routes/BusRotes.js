const express = require('express')
const { FindBuses, findById } = require('../Controllers/BusCont')
const router = express.Router()


router.get('/', FindBuses).get('/:id', findById)


module.exports = router
