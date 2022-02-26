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
import '../scss/Pages.scss';

// Video / Image Imports
import Logo from '../Images/Variations/GKL_Primary_Yellow.png';


// JSX Component and Return

const GK_Nav = () => {
    console.log(Logo);

    return (
        <div className="Header">
            <div className="full_nav_div">

                {/* Navigation Left */}
                <ul id="navl">
                    <li id="gknav"><a href="/">Home</a></li>
                    <li id="gknav"><a href="/shop">Shop</a></li>
                    <li id="gknav"><a href="/groups">Groups</a></li>
                    <li id="gknav"><a href="/code">Code</a></li>
                    <li id="gknav"><a href="/portfolio">News</a></li>
                    <li id="gknav"><a href="/contact">Contact</a></li>
                </ul>

            </div>
</div>
    );
}

// Default Export Method for Component
export default GK_Nav;