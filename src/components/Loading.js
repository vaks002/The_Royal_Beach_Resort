import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif'
// import Hero from '../components/Hero';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Rooms Data Loading....</h4>
            <img src = {loadingGif} alt="" />
        </div>
    )
}