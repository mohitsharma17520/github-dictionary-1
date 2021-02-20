import React from 'react';
import PropTypes from 'prop-types'
import "./searchInputControl.scss";
import { Search } from 'react-feather';
import { Delete } from 'react-feather';
const ENTER_KEYCODE = 13;

/**
 * 
 * @param {*} props Component to allow users to enter search criteria and clear the search 
 */
const SearchInputControl = props => {
    const { searchTxt, setSearchTxt, defaultSearchTxt, placeholder } = props;

    return (
        <div>
            <div className="SearchInputControl mt-3">

                <Search alt="search-icon" aria-hidden={true} class="search-icon" />

                <input
                    className='inputBox'
                    placeholder={placeholder}
                    aria-label="Type Username to Search"
                    type="text"
                    tabIndex={1}
                    value={searchTxt}
                    onChange={evt => setSearchTxt(evt.target.value)}
                />

                <Delete
                    alt="clear-button"
                    class="delete-icon"
                    onClick={() => setSearchTxt(defaultSearchTxt)}
                />


            </div>


        </div>
    )
}

SearchInputControl.propTypes = {
    //username of the Github user
    searchTxt: PropTypes.string,
    //hook to update the state of searchTxt
    setSearchTxt: PropTypes.func,
    //default text to fetch the results from Github, without user input
    defaultSearchTxt: PropTypes.string,
    //Message to be displayed inside searchbar
    placeholder: PropTypes.string.isRequired,
}

export default SearchInputControl