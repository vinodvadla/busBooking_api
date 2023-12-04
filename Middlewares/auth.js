const User = require('../Models/user.model')
const jwt = require('jsonwebtoken')



const auth = async (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (!authorization) return res.status(401).json('Not authorized')
        let token = authorization.split(" ")[1]
        let decode = jwt.verify(token, process.env.SECRET)
        let { _id } = decode;
        let user = await User.findOne({ _id })
        if(!user) return res.status(401).json('Not authorized')
        req.user=_id;
        next();
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}


module.exports=auth
