import React, { useState } from 'react';
import Header from "../header/Header";
import SearchInputControl from './searchInputControl/SearchInputControl';

const DEFAULT_SEARCH_TEXT = '';
const Search = () => {

    const [searchTxt, setSearchTxt] = useState(DEFAULT_SEARCH_TEXT);

    return (
        <div className="searchPage">

            <Header
                HeadingLevel={'h3'}
                customClass={'searchHeader'}
                headingTxt={'GitHub Dictionary'}
            />
            <SearchInputControl
                searchTxt={searchTxt}
                setSearchTxt={setSearchTxt}
                defaultSearchTxt={DEFAULT_SEARCH_TEXT}
                placeholder={'GitHub Username'}
            />
        </div>

    )

}


export default Search