import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id || recipe.title} recipeItem={recipe} />
        ))
      ) : (
        <p className="text-center text-lg">No recipes available.</p>
      )}
    </div>
  );
};

export default RecipeList;
