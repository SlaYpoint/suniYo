import React from "react";
import { useGlobalContext } from "../../../contexts/globalContext";

import { limitTitle } from "../../../helpers/index";

const Track = ({ track }) => {
    const { setCurrentTrack, isPlaying, audioRef, setTransform } = useGlobalContext();
    
    const trackSelectHandler = () => {
        setCurrentTrack(track);
        setTransform(false);

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