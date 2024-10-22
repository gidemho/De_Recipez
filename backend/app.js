const express = require('express');
// require('dotenv').config()
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes')


connectDB();

//Initialize the Express app
const app = express();

//Middleware to parse incoming JSON request
app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to De_Recipez!');
});


app.use(authRoutes);
app.use(recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Backend live on port', PORT);
});
