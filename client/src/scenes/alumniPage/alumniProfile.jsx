import React from 'react';
import "./alumniProfile.css";

const AlumniProfile = () => {
    return <div className = "profile-image-container">
        <img className="image" src="https://img.freepik.com/premium-photo/handsome-man-with-glasses-smiling-looking-t-1720967623-1_979520-126729.jpg?w=740" alt="profile Image" />
        <div className = "profile-container">
            <div className = "profile-details">
                <p className = "text">Name:</p>
                <h1 className="heading">Siddu Nihar Y</h1>
                <p className="text">Pass Out:</p>
                <h1 className="heading">2026</h1>
                <p className="text">Work Domain:</p>
                <h1 className="heading">Ariticial Intellegence</h1>
                <p className="text">Experience:</p>
                <h1 className="heading">4+ years</h1>
                <p className="text">Organization:</p>
                <h1 className="heading">Google</h1>
            </div>
            <button className = 'connect-button'>Connect</button>
        </div>
        
    </div>
}

export default AlumniProfile;