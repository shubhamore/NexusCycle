const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        let token = req.header("Authorization")

        if (!token) return res.status(401).json("you are not authenticated")

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft()
        }

        const verified = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verified
        next()
    } catch (err) {
        console.log("authmiddleware.js verifyToken error", err)
        res.status(500).json(err);
    }
}

module.exports = verifyToken;