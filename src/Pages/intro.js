// Main JSX React imports
import React from 'react';

// Routing Imports
// import { BrowserRouter as Router, } from 'react-router-dom';

// Component Imports
import GKVideo from '../videos/GK_BG00.mp4';
import GKLogo from '../components/main_logo.jsx';
import GKNav from '../components/full_nav.jsx';

// import Featured from '../components/content/FeaturedContent';

// SCSS Imports
import '../css/Pages.css';

// Video / Image Imports


// JSX Component and Return

const Home = () => {
    return(
        <body>
        {/* GK_Video */}
        <video id="homeVideo" autoPlay playsinline loop muted>
        <source src={GKVideo} type="video/mp4" />
        </video>
        {/* GK_Nav */}
        <GKNav className="NV1" />
        {/* GK_Logo */}
        <div className="SQ1">SQ1</div>
        <GKLogo className="logo_intro"/>
        <div className="SQ2">SQ2</div>
        </body>
        
    );

}

// Default Export Method for Component
export default Home;
