import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header'
import dummyData from '../dummyData'


function HomePage() {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
        axios.get('/api/recipes')
        .then(response => setRecipes(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
          <Header/>
            <SearchBar />
            {/* <RecipeList recipes={recipes} /> */}
            <RecipeList recipes={dummyData}/>
        </div>
    );
}

export default HomePage;