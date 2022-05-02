import { useState } from 'react';

function SearchBar({ searchBags }) {

    const [input, setInput] = useState('');

    const getInput = (e) => {
        let storeInput = e.target.value;
        let upperCaseInput = storeInput[0].toUpperCase() + storeInput.slice(1).toLowerCase();
        setInput(upperCaseInput);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        searchBags(input);
        setInput('');
    };

    return (
        <>
            <form onSubmit = {onSubmit}>
                <label>Search by Founder: </label>
                <input
                    onChange = {getInput}
                    name = 'founder'
                    className='input-bar'
                    type = 'text'
                    placeholder='Search Bags'
                    >
                </input>
                <button className = 'search-button'>Search</button>
            </form>
        </>
    );
};

export default SearchBar;