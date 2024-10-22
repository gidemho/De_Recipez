const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//Load environment variables
dotenv.config();

//Connect to MongoDB
connectDB();

//Initialize the Express app
const app = express();

//Middleware to parse incoming JSON request
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to De_Recipez!');
});

const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
app.use(authRoutes);
app.use(recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('PORT is alive');
});
