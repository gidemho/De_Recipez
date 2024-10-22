import RecipeCard from './RecipeCard';



const RecipeList = ({ recipes }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipeItem={recipe} />
      ))}
    </div>
  );
};


export default RecipeList;