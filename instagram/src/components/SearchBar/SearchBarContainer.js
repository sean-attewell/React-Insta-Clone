import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
                <img alt="instagram logo" src={IGLogo} className="logo-image" />
            </div>

            <form onSubmit={props.handleFilterPost}>
                <input 
                    onChange={props.handleSearchChange}
                    type="text"
                    name="search"
                    value={props.value}
                    placeholder="Search"
                />
                <input
                    type="submit"
                />                
            </form>

            <div className="social-wrapper">
                <div className="social">
                    <i className="fa fa-compass" />
                </div>
                <div className="social">
                    <i className="fa fa-heart" />
                </div>
                <div className="social">
                    <i className="fa fa-user-circle" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;