import React, {useState} from "react";
import Pagination from "./Pagination/Pagination";
import Track from "./Track/Track";

const TrackList = ({tracks, setTracks, currentTrack, setCurrentTrack, audioRef, isPlaying, loading}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [tracksPerPage] = useState(5);

    const endIdx = currentPage * tracksPerPage;
    const startIdx = endIdx - tracksPerPage;

    const paginate = (pageNum) => {
        setCurrentPage(pageNum);
    }

    return (
        <div className="tracks__container">
            <ul className="track__list">
                {
                    tracks.slice(startIdx,endIdx).map((track) => (
                    <Track
                        track={track}
                        setCurrentTrack={setCurrentTrack}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                    />
                    ))
                }
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