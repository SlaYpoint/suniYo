import React from "react";
import { FaSearch, FaHeart } from "react-icons/fa";

import "./Header.css";

const Header = ({searchSubmitHandler, searchChangeHandler}) => {
    
    return (
        <header className="header">
            <img src="" alt="Logo" className="header-logo"/>

            <form className="search" onSubmit={()=>searchSubmitHandler()}>
                <input type="text" className="search__input" onChange={() => searchChangeHandler()}/>
                <button className="btn search__btn" onClick={() => searchSubmitHandler()}>
                    <FaSearch/>
                </button>
            </form>

            <div className="likes">
                <button className="btn likes__btn">
                    <FaHeart/>
                </button>
            </div>
        </header>
    );
}

export default Header;