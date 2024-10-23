import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import NewRecipeForm from '../components/NewRecipeForm';
import AddRecipeButton from '../components/AddRecipeButton';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Recipes = () => {
  const [isOpen, setIsOpen] = useState(false); // Changed initial state to false
  const [fetchedRecipes, setFetchedRecipes] = useState([]);
  const token = localStorage.getItem('token'); // Fetch token from localStorage

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const options = {
          url: 'http://localhost:5000/api/recipes/all',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(options);
        
        if (response.status === 200 && Array.isArray(response.data)) {
          setFetchedRecipes(response.data);
        }
        console.log(fetchedRecipes)
      } catch (error) {
        toast.error('Something went wrong in fetching recipes');
        console.error(error);
      }
    };

    if (token) {
      fetchRecipes();
    }
  }, [token]); 

  return (
    <div>
      <ToastContainer />
      <Header />
      <h1 className="text-3xl text-center p-5 font-bold">Recipes</h1>
      <AddRecipeButton state={isOpen} setState={setIsOpen} />
      <SearchBar />
      <RecipeList recipes={fetchedRecipes} />

      {isOpen && <NewRecipeForm state={isOpen} setState={setIsOpen}/>}
    </div>
  );
};

export default Recipes;
