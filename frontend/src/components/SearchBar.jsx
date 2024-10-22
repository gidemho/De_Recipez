import { useState } from 'react';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
       };

       return (
        <form onSubmit={handleSearch}>
            <input
            type="text"
            placeholder="Search recipes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
       );
}

export default SearchBar;