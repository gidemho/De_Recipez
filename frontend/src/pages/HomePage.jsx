import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header'
import dummyData from '../dummyData'
import bgImage from '../assets/bgimage.jpg'

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/recipes')
            .then(response => setRecipes(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Header />

            <section className="hero relative">
                <img src={bgImage} alt="Hero image" className="w-full h-screen object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl text-center p-5 font-bold">Taste the world's finest recipes</h1>
                    <p className="text-center mb-5">We offer a massive collection of recipes for your next meal</p>
                    <button className="bg-purple-800 px-6 py-3 text-white rounded hover:bg-purple-700 transition">
                        View Recipes
                    </button>
                </div>
            </section>

            <footer className='w-full h-11 bg-slate-900 p-4'>
                <p className='text-center text-white'>&copy; ALX 2024</p>
            </footer>
        </div>
    );
}

export default HomePage;
