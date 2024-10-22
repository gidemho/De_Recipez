import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <form className="m-auto px-28 py-5 flex justify-center border border-3"> 
      <input
        className="outline-none border-3 border-neutral-900 text-neutral-900"  
        type="text"
        placeholder="Search recipes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="w-10 h-10 bg-purple-500 text-center rounded-full" type="submit">
        <FaSearch className="text-xl text-white ml-2" />
      </button>
    </form>
  );
}

export default SearchBar;