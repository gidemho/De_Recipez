import React from 'react'

const Header = () => {
  return (
    <header className='shadow-md p-2 flex'>
        <span className="logo">
            <h2 className='text-md'>De Recipez</h2>
        </span>

        <nav className='flex'>
            <ul className='flex'>
                <li>Home</li>
                <li>Recipes</li>
                <li>About Me</li>
            </ul>
        </nav>

        <button> Login </button>
    </header>
  )
}

export default Header