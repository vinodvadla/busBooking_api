const User = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const RegisterUser = async (req, res) => {
    try {
        let { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(404).json('Please fill all the values')
        }
        let exists = await User.findOne({ email })
        if (exists) return res.status(404).json('Email already exists')
        let hasedPass = await bcrypt.hash(password, 10)

        let user = new User({
            name, email, password: hasedPass
        })
        await user.save()
        res.status(200).json('User registered successfully')
    } catch (error) {
        res.status(500).json('internal server error')
    }
}


const LoginUser = async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(404).josn('please fill all values')
        }
        let user = await User.findOne({ email })
        if (!user) return res.status(404).json('Invalid User')
        let compared = await bcrypt.compare(password, user.password)
        if (!compared) return res.status(404).json('Incorrect password')
        let _id = user._id
        let token = await jwt.sign({ _id }, process.env.SECRET)
        res.status(200).json({ token, message: "ok" })

    } catch (error) {
        res.status(500).json('internal server error')
    }
}


module.exports = { RegisterUser, LoginUser }
