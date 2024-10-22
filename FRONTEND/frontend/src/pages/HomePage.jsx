import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';

function HomePage() {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
        axios.get('/api/recipes')
        .then(response => setRecipes(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>De_Recipez</h1>
            <SearchBar />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default HomePage;