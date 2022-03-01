// // // // // // // // // // Joel J. De Alba - Software Engineer // // // // // // // // // //
// // // // // // // // // //     GK_WEB3.0 Blockchain Project    // // // // // // // // // //

// // --> Main Logo Component

// Main JSX React imports
import React from 'react';
// SCSS Imports
import '../css/Pages.css';
// Video / Image Imports
import Logo from '../Images/test03.png';

// JSX Component and Return
const GK_logo = () => {
    return (
        <div id="logo_div">
            <img id="logo_img" src={Logo} alt="Logo" />
        </div>
    );
}

// Default Export Method for Component
export default GK_logo;