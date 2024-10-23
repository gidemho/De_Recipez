import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const NewRecipeForm = ({ state, setState }) => {
    const token = localStorage.getItem("token")
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [steps, setSteps] = useState(['']);
    const [imageURL, setImageURL] = useState('')
    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const handleStepChange = (index, value) => {
        const newSteps = [...steps];
        newSteps[index] = value;
        setSteps(newSteps);
    };

    const addIngredientField = () => setIngredients([...ingredients, '']);
    const addStepField = () => setSteps([...steps, '']);

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipeData = { title, description, ingredients, steps, imageURL };
        try {
            toast("Submitting....")
            const options = {
                method: 'POST',
                url: 'https://de-recipez.onrender.com/api/recipe/add',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: recipeData
            }
            axios.request(options).then(response => {
                if (response.status == 201) {
                    toast.success("Successfully added product")

                }

            })
        } catch (e) {
            toast.error("Something went wrong in adding recipe")
            console.error(e)
        }
    }
    return (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <ToastContainer />
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">

                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => { setState(false) }}
                >
                    <FaTimes className='text-3xl text-lighter text-red' />
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-center">Create New Recipe</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full p-3 border border-gray-300 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Description"
                        className="w-full p-3 border border-gray-300 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Ingredients</h3>
                        {ingredients.map((ingredient, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`Ingredient ${index + 1}`}
                                className="w-full p-2 border border-gray-300 rounded"
                                value={ingredient}
                                onChange={(e) => handleIngredientChange(index, e.target.value)}
                                required
                            />
                        ))}
                        <button
                            type="button"
                            className="text-blue-500 hover:underline"
                            onClick={addIngredientField}
                        >
                            + Add another ingredient
                        </button>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-medium">Steps</h3>
                        {steps.map((step, index) => (
                            <textarea
                                key={index}
                                placeholder={`Step ${index + 1}`}
                                className="w-full p-2 border border-gray-300 rounded"
                                value={step}
                                onChange={(e) => handleStepChange(index, e.target.value)}
                                required
                            />
                        ))}
                        <button
                            type="button"
                            className="text-blue-500 hover:underline"
                            onClick={addStepField}
                        >
                            + Add another step
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Recipe image URL"
                        className="w-full p-3 border border-gray-300 rounded"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        required
                    />


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg
                         hover:bg-blue-700 transition duration-300"
                        onClick={handleSubmit}
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewRecipeForm;
