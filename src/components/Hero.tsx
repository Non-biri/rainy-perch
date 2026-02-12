import React, { useState, useEffect } from 'react';

import mainBurner1 from '../assets/images/main_burner_1.jpg';
import mainBurner2 from '../assets/images/main_burner_2.jpg';
import mainBurner3 from '../assets/images/main_burner_3.jpg';

const Hero: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of images for the slider
    // Array of images for the slider
    const images = [
        mainBurner1,
        mainBurner2,
        mainBurner3,
    ];

    useEffect(() => {
        // Change image every 10 seconds (10000ms)
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brown-900">
            {/* Background Images with Fade Effect */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-60' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Hero Background ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            ))}

            {/* Overlay Content */}
            <div className="relative z-10 text-center text-cream px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-wider drop-shadow-lg">
                    Rainy・Perch
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-wide drop-shadow-md">
                    雨の音と、コーヒーの香り。
                    <br />
                    仮想世界で少しだけ、羽を休めませんか。
                </p>
            </div>
        </section>
    );
};

export default Hero;
