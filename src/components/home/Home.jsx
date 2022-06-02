import React from 'react';
import Navigation from '../navigation/Navigation';
import bgvFile from '../../videos/bgv.mp4';
import shoePic from '../../images/shoes-main.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="bgv-wrapper">
            <video playsInline autoPlay muted loop poster={shoePic} id="bgvid">
                <source src={bgvFile} type="video/mp4" />
                <source src={bgvFile} type="video/webm" />
            </video>
            <Navigation />
            <div className="forward-content">
            <h1 id="large-title">
                QualityWear
                <hr className="custom"/>
            </h1>
            </div>
        </div>
    );
};

export default Home;