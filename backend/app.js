const express = require('express');
require('dotenv').config()
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes')
const cors = require("cors")
connectDB();

//Initialize the Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('De Recipez API is live!');
});


app.use(authRoutes);
app.use(recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Backend live on port', PORT);
});
