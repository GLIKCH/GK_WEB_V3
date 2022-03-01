// // // // // // // // // // Joel J. De Alba - Software Engineer // // // // // // // // // //
// // // // // // // // // //     GK_WEB3.0 Blockchain Project    // // // // // // // // // //

// // --> Component

// Main JSX React imports
import React from 'react';

// Routing Imports
// import { BrowserRouter as Router, } from 'react-router-dom';

// Component Imports

// import Featured from '../components/content/FeaturedContent';

// SCSS Imports
import '../css/Pages.css';

// Video / Image Imports
import Logo from '../Images/Variations/GKL_Primary_Yellow.png';


// JSX Component and Return

const GK_Nav = () => {
    console.log(Logo);

    return (
        <div className="NVH">
                {/* Navigation Left */}
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/groups">Groups</a>
                    <a href="/code">Code</a>
                    <a href="/portfolio">News</a>
                    <a href="/contact">Contact</a>
        </div>
    );
}

// Default Export Method for Component
export default GK_Nav;