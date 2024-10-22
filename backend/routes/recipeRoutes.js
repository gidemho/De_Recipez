const express = require('express');
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const { protect } = require('../middlewares/authMiddleware');

const recipeRoutes = express.Router();

recipeRoutes.get('/api/recipes/all', getRecipes);

recipeRoutes.post('/api/recipe/add', protect, createRecipe);

recipeRoutes.put('/api/recipe/:id', protect, updateRecipe);

recipeRoutes.delete('/api/recipe/:id', protect, deleteRecipe);

module.exports = recipeRoutes;