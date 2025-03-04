import Navbar from "scenes/alumniPage/alumniNavbar";
import AlumniProfile from "scenes/alumniPage/alumniProfile";
import Carousel from "./carousal";
import React from 'react';
import "./index.css";

const images = [
    'https://vaave.s3.amazonaws.com/assets/site_content/151644581/banners/851f5ac9941d720844d143ed9cfcf60a_6a291089e51b1d1749e54efad3bb255b.jpeg',
    'https://vaave.s3.amazonaws.com/assets/site_content/151644581/banners/851f5ac9941d720844d143ed9cfcf60a_e8e8edf955316a41d9d4ced7eb65f6cd.png',
    'https://vaave.s3.amazonaws.com/assets/site_content/151644581/banners/851f5ac9941d720844d143ed9cfcf60a_a7b797d1ac1f63350653f6afdaf7d932.jpeg'
];

const AlumniPage = () => {
    return (
        <div>
            <Navbar/>
            <Carousel images={images} width="80%" height="400px" />
            <div className = "alimuni-year-container">
                <img className="Aliumi-year-image" src="https://vaave.s3.amazonaws.com/block_images/_2cb4f32a9b78b560c8fa65d64479d857__.png" />
            </div>
            <div className = "alumni-profiles">
                <AlumniProfile />
                <AlumniProfile />
                <AlumniProfile />
                <AlumniProfile />
                <AlumniProfile />
                <AlumniProfile />
                <AlumniProfile />
                <AlumniProfile />
                <AlumniProfile />
            </div>
        </div>
    )
}

export default AlumniPage;