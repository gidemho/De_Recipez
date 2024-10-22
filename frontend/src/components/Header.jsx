import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='shadow-md flex p-2 w-full'>
      <span className="logo p-2 w-2/12">
        <h2 className='text-xl font-bold'>De Recipez</h2>
      </span>

      <div className='flex justify-between w-10/12'>
      <nav className='p-2'>
        <ul className='flex gap-8'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>


      <button className='p-3 bg-purple-500 text-white rounded-lg'> Login </button>
      </div>
    </header>
  )
}

export default Header