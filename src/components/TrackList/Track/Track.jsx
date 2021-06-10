import React from "react";
import limitTitle from "../../../helpers/limitTitle";

const Track = ({ track, setCurrentTrack, isPlaying, audioRef}) => {
    
    const trackSelectHandler = () => {
        setCurrentTrack(track);

        if (isPlaying) {
            audioRef.current.play();
        }
    }

    return (
        <li className="track" key={track.id} onClick={trackSelectHandler}>
            <figure className="track__cover">
                <img src={track.album.cover_small} alt={limitTitle(track.title_short)}/>
            </figure>
            <div className="track__details">
                <h4 className="track__title">{limitTitle(track.title_short)}</h4>
                <p className="track__artist">{track.artist.name}</p>
            </div>
        </li>
    );
}

export default Track;