// // // // // // // // // // Joel J. De Alba - Software Engineer // // // // // // // // // //
// // // // // // // // // //     GK_WEB3.0 Blockchain Project    // // // // // // // // // //

// // --> Main Logo Component

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

const GK_logo = () => {
    return (
/* Navigation Logo Middle */
<a href="/"><img id="homeLogo" src={Logo} alt="logo"></img></a>
    )}