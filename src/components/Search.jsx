import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchValue);
    };

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Введите текст для поиска"
            />
            <button onClick={handleSearch}>Поиск</button>
        </div>
    );
};

export default SearchBar;
