import React, { useState, useRef, useContext } from 'react';
import data from "../helpers/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const audioRef = useRef(null);

    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(data[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [transform, setTransform] = useState(false);

    const playSong = () => setIsPlaying(true);

    const pauseSong = () => setIsPlaying(false);


    return (
        <AppContext.Provider
            value={{
                tracks,
                setTracks,
                currentTrack,
                setCurrentTrack,
                isPlaying,
                playSong,
                pauseSong,
                audioRef,
                transform,
                setTransform
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
} 

export { AppContext, AppProvider }

