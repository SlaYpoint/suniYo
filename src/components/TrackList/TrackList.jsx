import React, { useState } from "react";
import "./TrackList.css";
import Pagination from "./Pagination/Pagination";
import Track from "./Track/Track";
import Preloader from "../Preloader/Preloader";

const TrackList = ({loading, tracks, setCurrentTrack, audioRef, isPlaying}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage] = useState(5);

  const endIdx = currentPage * tracksPerPage;
  const startIdx = endIdx - tracksPerPage;
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  if (loading) {
    return (
      <div className="tracks__container">
        <Preloader />
      </div>
    );
  }
  
  return (
    <div className="track__container">
      <ul className="track__list">
        {tracks.slice(startIdx, endIdx).map((track) => (
          <Track
            track={track}
            setCurrentTrack={setCurrentTrack}
            isPlaying={isPlaying}
            audioRef={audioRef}
          />
        ))}
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