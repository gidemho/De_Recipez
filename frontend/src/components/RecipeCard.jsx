const RecipeCard = ({ recipeItem }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src={recipeItem.imageUrl} alt={recipeItem.title} /> */}
            <div className="px-6 py-4">
                <div className="font-light text-xl mb-2">{recipeItem.title}</div>
                <p className="text-gray-700 text-base">
                    {recipeItem.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    className="bg-purple-800 hover:bg-blue-700 text-white font-lighter py-2 px-4 rounded"
                >
                    View Recipe
                </button>
            </div>
        </div>
    );
};



export default RecipeCard;
