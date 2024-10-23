import React from 'react'
import RecipeList from '../components/RecipeList'
import dummyData from '../dummyData'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'

const Recipes = () => {
  return (
    <div>
       <Header/>
        <h1 className="text-3xl text-center p-5 font-bold">Recipes</h1>
        <SearchBar/>
        <RecipeList recipes={dummyData}/>


    </div>
  )
}

export default Recipes