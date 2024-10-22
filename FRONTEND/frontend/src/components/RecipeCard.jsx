import PropTypes from 'prop-types';

const RecipeCard = ({ title, description, image, onClick }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onClick}
                >
                    View Recipe
                </button>
            </div>
        </div>
    );
};

// Adding PropTypes for validation
RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default RecipeCard;
