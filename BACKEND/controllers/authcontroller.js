const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req,res) => {
    const { username, email, password } = req.body;

    try {
        //Check if user already exist
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exist'});
        }
       // Create new user
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashedPassword
       });

       await newUser.save();

       const payload = { userId: user._id };
       const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'});

       res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};