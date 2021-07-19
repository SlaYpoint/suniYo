import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/globalContext";

import "./TrackList.css";
import Pagination from "./Pagination/Pagination";
import Track from "./Track/Track";
import Preloader from "../Preloader/Preloader";

const TrackList = ({ loading }) => {
  const { tracks } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage] = useState(5);

  const endIdx = currentPage * tracksPerPage;
  const startIdx = endIdx - tracksPerPage;
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  if (loading) {
    return (
      <div className="track__container">
        <Preloader />
      </div>
    );
  }
 
  return (
    <div className="track__container">
      <ul className="track__list">
        {tracks.length === 0 ? (
          <li className="error">
            <h2 className="error__msg">
              Oops! Looks like we dont have the song you are looking for 🙁
              <br /> Please try another 😅
            </h2>
          </li>
        ) : (
          tracks
            .slice(startIdx, endIdx)
            .map((track) => (
              <Track
                track={track}
              />
            ))
        )}
      </ul>
      <Pagination
        page={currentPage}
        postsPerPage={tracksPerPage}
        totalPosts={tracks.length}
        paginate={paginate}
      />
    </div>
  );
}

export default TrackList;