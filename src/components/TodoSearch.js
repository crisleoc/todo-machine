import React from 'react';
import searchIcon from '../assets/search.png';
import clearInputIcon from '../assets/clear-input.png';
import '../css/TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue
}) {
    return (
        <div className="todoSearch">
            <div className="todoSearch__input-container">
                <button className="input-container__clear-btn">
                    <img src={clearInputIcon} alt="Clear input" />
                </button>
                <input
                    className="input-container__input"
                    placeholder="Search task"
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }
                    } />
            </div>
            <button className="todoSearch__search-btn">
                <img src={searchIcon} alt="Search icon" />
            </button>
        </div>
    );
}

export { TodoSearch };