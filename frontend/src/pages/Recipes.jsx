import React, { useState } from 'react'
import RecipeList from '../components/RecipeList'
import dummyData from '../dummyData'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import NewRecipeForm from '../components/NewRecipeForm'
import AddRecipeButton from '../components/AddRecipeButton'


const Recipes = () => {
  const [isOpen, setisOpen] = useState(true)

  const toggleOpen = () => {
    if (isOpen) {
      setisOpen(!isOpen)
    }
  }

  return (
    <div>
      <Header />
      <h1 className="text-3xl text-center p-5 font-bold">Recipes</h1>
      <AddRecipeButton state={isOpen} setState={setisOpen} />
      <SearchBar />
      <RecipeList recipes={dummyData} />
      
      {isOpen && <NewRecipeForm state={isOpen} setState={setisOpen} />}
    

    </div>
  )
}

export default Recipes