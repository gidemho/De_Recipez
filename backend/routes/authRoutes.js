const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController')

const authRouter = express.Router();

authRouter.post('/api/auth/register', registerUser);
authRouter.post('/api/auth/login', loginUser);


module.exports = authRouter;