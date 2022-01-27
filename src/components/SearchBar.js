// React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import SearchIcon from './../assets/search_icon.svg';

export default function SearchBar() {

    const navigate = useNavigate();
    const [showInput, setShowInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleClickSearch = () => {
        if (showInput) {
            if (searchQuery === "") {
                setShowInput(false);
                navigate('/');
            } else {
                navigate(`search/${searchQuery}`);
            }
        } else {
            setShowInput(true);
        }
    }

    return (
        <div className="search-bar header-links">
            {showInput &&
                <form onSubmit={handleClickSearch}>
                    <input type="text" placeholder='search' onChange={(e) => { setSearchQuery(e.target.value) }} />
                    <button type="reset" onClick={() => { setSearchQuery("") }}>&times;</button>
                </form>
            }
            <img src={SearchIcon} alt="search" onClick={handleClickSearch} />
        </div>
    );
}