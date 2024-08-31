import Navbar from "scenes/alumniPage/alumniNavbar";
import React from 'react';  
import AlumniProfile from "scenes/alumniPage/alumniProfile";
import "./index.css";


const AlumniPage = () => {
    return (
        <div>
            <Navbar/>
            <div className = "alumni-profiles">
                <AlumniProfile />
            </div>
        </div>
    )
}

export default AlumniPage;