// Main JSX React imports
import React from 'react';

// Routing Imports
import GK_Nav from '../components/full_nav';
// import { BrowserRouter as Router, } from 'react-router-dom';

// Component Imports
import GKVideo from '../videos/GK_BG00.mp4';

// import Featured from '../components/content/FeaturedContent';

// SCSS Imports
import '../scss/Pages.scss';

// Video / Image Imports
import Logo from '../Images/Variations/GKL_Primary_Yellow.png';


// JSX Component and Return

const Home = () => {
    console.log(Logo);

    return(
        <body>
 
            {/* Background Video */}
            <video id="homeVideo" autoPlay playsinline loop muted>
            <source src={GKVideo} type="video/mp4" />
            </video>

            <div class="block1">.Section Test 1</div>
            <div class="block2">
            <GK_Nav />
            </div>
            <div class="block3">.</div>
            <div class="block4">.</div>
            <div class="block5">.</div>
            <div class="block6">.</div>
            <div class="block7">.</div>
            <div class="block8">.</div>
            <div class="block9">.</div>
            
        </body>
    );



    
}

// Default Export Method for Component
export default Home;
