import React from "react";
import Pagination from "./Pagination/Pagination";
import Track from "./Track/Track";

const TrackList = ({tracks, setTracks, currentTrack, setCurrentTrack, audioRef, isPlaying}) => {
    return (
        <div className="tracks__container">
            <ul className="track__list">
                {tracks.map((track) => (
                    <Track
                        track={track}
                        setCurrentTrack={setCurrentTrack}
                        isPlaying={isPlaying}
                        tracks={tracks}
                        setTracks={setTracks}
                        audioRef={audioRef}
                    />
                ))}
            </ul>
            <Pagination/>
        </div>
    );
}

export default TrackList;