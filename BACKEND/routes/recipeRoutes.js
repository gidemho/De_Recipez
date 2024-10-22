const express = require('express');
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getRecipes);

router.post('/:id', protect, createRecipe);

router.put('/:id', protect, updateRecipe);

router.delete('/:id', protect, deleteRecipe);

module.exports = router;