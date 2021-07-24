import React, {useState} from "react";
import { FaSearch, FaHeart } from "react-icons/fa";

import "./Header.css";
import logo from "../assets/logo.png";

const Header = ({searchSubmitHandler}) => {
    const [value, setValue] = useState('');
  
    return (
      <header className="header">
        <img src={logo} alt="suniyo" className="header-logo" />

        <form
          className="search"
          onSubmit={(e) => searchSubmitHandler(e, value)}
        >
          <input
            type="text"
            className="search__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="btn search__btn"
            onClick={(e) => searchSubmitHandler(e, value)}
          >
            <FaSearch />
          </button>
        </form>

        <div className="likes">
          <button className="btn likes__btn" >
            <FaHeart />
          </button> 
        </div>
      </header>
    );
}

export default Header;