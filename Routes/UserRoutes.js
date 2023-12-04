const express = require('express')
const { RegisterUser, LoginUser } = require('../Controllers/UserCont')
const router = express.Router()


router.post('/register', RegisterUser).post('/login', LoginUser)

module.exports = router
