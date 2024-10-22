const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.status(201).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createRecipe = async (req, res) => {
    const { title, decription, ingredients, steps } = req.body;

    try {
        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            steps,
            user: req.user._id
        });

        const recipe = await newRecipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, res.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(500).json({message: 'Server error' });
    }
};