import React from "react";

import "./LikedList.css";

const LikedList = ({liked, playLiked}) => {

    return (
      <li className="liked" key={liked.id} onClick={()=> playLiked(liked.id)}>
        <figure className="liked__cover">
          <img
            src={liked.cover}
            alt={liked.title}
          />
        </figure>
        <div className="liked__details">
          <h4 className="liked__title">{liked.title}</h4>
          <p className="liked__artist">{liked.artist}</p>
        </div>
      </li>
    );
}

export default LikedList;