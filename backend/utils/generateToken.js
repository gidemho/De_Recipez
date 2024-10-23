const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '1h'});
};

module.exports = generateToken