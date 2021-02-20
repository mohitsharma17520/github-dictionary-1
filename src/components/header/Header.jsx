import React from 'react'
import PropTypes from 'prop-types'
import { GitHub } from 'react-feather';


const HEADER_TYPES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
/**
 * 
 * @param {*} props Generic Component to be used as header for different pages
 */
const Header = (props) => {
    const { HeaderType = HEADER_TYPES[2], headingTxt, customClass } = props;

    return (
        <>
            <span className='Logo'>
                <GitHub size={40} alt='GitHub'/>
            </span>
            <HeaderType className={customClass}>{headingTxt}</HeaderType>
        </>
    )
}

Header.propTypes = {
    // Attribute to decide the level of header
    HeaderType: PropTypes.oneOf(HEADER_TYPES),
    // Main content to be dispalyed on screen
    headingTxt: PropTypes.string,
    //If a header needs to be customized
    customClass: PropTypes.string
}


export default Header