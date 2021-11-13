import React from 'react';
import video from '../../../../Motorcycle Cinematic Video.mp4'



const DashboardMain = () => {
    return (
        <>
            <h2 sx={{ m: 5 }}>Welcome to our Shop</h2>
            <video src={video} playsinliner="playsinliner" autoplay="autoplay" loop="loop"></video>

        </ >
    );
};

export default DashboardMain;