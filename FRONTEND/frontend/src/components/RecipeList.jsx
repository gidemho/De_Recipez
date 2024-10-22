import PropTypes from 'prop-types'; // Import PropTypes
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

// Add propTypes validation for 'recipes'
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
};

export default RecipeList;