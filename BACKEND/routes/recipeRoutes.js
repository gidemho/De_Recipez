const express = require('express');
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const { protect } = require('../middlewares/authMiddleware');

const recipeRoutes = express.Router();

recipeRoutes.get('/', getRecipes);

recipeRoutes.post('/:id', protect, createRecipe);

recipeRoutes.put('/:id', protect, updateRecipe);

recipeRoutes.delete('/:id', protect, deleteRecipe);

module.exports = recipeRoutes;