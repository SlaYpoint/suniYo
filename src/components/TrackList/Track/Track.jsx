import React from "react";
import "./Track.css";

const Track = ({ track, setCurrentTrack, isPlaying, tracks, setTracks, audioRef}) => {
    return (
        <li key={track.id}>
            <figure className="track__cover">
                <img src={track.album.cover_small} alt={track.title_short}/>
            </figure>
            <div className="track__details">
                <h4 className="track__title">{track.title_short}</h4>
                <p className="track_artist">{track.artist.name}</p>
            </div>
        </li>
    );
}

export default Track;