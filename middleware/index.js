
const jwt = require('jsonwebtoken');
const secretKey = '1000'; 

function authenticateJWT(req, res, next) {
    const token = req.headers.authorization;
    console.log(token)
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }// Attach user information to the request object
        next();
    });
}

module.exports = {
    authenticateJWT
};