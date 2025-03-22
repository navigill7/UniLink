import React, { useState, useEffect } from 'react';
import './carousal.css'; // Ensure this file is correctly imported

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(intervalId);
    }, [images.length]);

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-item">
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" onClick={handlePrevImage}>‹</button>
                <button className="carousel-control-next" onClick={handleNextImage}>›</button>
            </div>
        </div>
    );
};

export default Carousel;
