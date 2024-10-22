import React from 'react';

function RecipeList({ recipes }) {
    return (
        <dive>
            <h3>Recipes</h3>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>
                        {recipe.title}
                    </li>
                ))}
            </ul>
        </dive>
    );
}

export default RecipeList;