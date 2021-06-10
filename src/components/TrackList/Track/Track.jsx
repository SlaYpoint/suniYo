import React from "react";

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
                <img src={track.album.cover_small} alt={track.title_short}/>
            </figure>
            <div className="track__details">
                <h4 className="track__title">{track.title_short}</h4>
                <p className="track__artist">{track.artist.name}</p>
            </div>
        </li>
    );
}

export default Track;