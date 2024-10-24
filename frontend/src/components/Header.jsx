import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { IoSettingsOutline } from "react-icons/io5";
import {toast, ToastContainer} from "react-toastify"

const Header = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate()

  let username = '';

  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    username = payload.username || 'User';
  }
  const handleLogout = () => {
    localStorage.removeItem("token")
    toast.info("Successfully logged out!")
    setTimeout(() => {
      navigate('/login')
    }, 5000)
  }
  return (
    <header className='shadow-md flex p-2 w-full relative'>
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

        {token ? (
          <div className='flex items-center mx-3'>
            
            <span className='mr-2'>
              <RxAvatar className="text-4xl" />
            </span>
            <div className='absolute top-14 z-50 bg-white p-5 w-32'>
              <button className='p-2 bg-red-600 text-white w-full'
              onClick={handleLogout}
              >Log Out</button>
            </div>
            <div>
              <p>Welcome!<br />{username}</p>
            </div>
          </div>
        ) : (
          <div className='flex gap-4'>
           
            <button className='p-4 bg-purple-500 text-white rounded-lg'>
              <Link to="/login">Log In</Link>
            </button>
          </div>

        )}
      </div>
    </header>
  );
};

export default Header;
