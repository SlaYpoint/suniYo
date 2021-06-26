import React, {useState} from "react";
import { FaSearch, FaHeart } from "react-icons/fa";

import "./Header.css";
import LikedList from "./LikedList";

const Header = ({searchSubmitHandler, likes}) => {
    const [value, setValue] = useState('');

    return (
      <header className="header">
        <img src="" alt="Logo" className="header-logo" />

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
          <button className="btn likes__btn">
            <FaHeart />
          </button>
          <div className="likes__dropdown">
            <ul className="likes__list">
              {likes.length === 0 ? (
                <li className="error">
                  <h2 className="error__msg">
                    No liked songs 
                  </h2>
                </li>
              ) : (
                  likes.map((liked) => <LikedList liked={liked}/>)
              )}
            </ul>
          </div>
        </div>
      </header>
    );
}

export default Header;