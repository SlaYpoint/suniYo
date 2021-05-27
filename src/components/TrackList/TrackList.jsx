import React from "react";
import Pagination from "./Pagination/Pagination";

const TrackList = () => {
    return (
        <div className="tracks__container">
            <ul className="track__list">

            </ul>
            <Pagination/>
        </div>
    );
}

export default TrackList;