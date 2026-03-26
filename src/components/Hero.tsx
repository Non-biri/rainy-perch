import React, { useState, useEffect } from 'react';
import { EVENT_NAME } from '../constants';

import mainBurner1 from '../assets/images/main_burner_1.jpg';
import mainBurner2 from '../assets/images/main_burner_2.jpg';
import mainBurner3 from '../assets/images/main_burner_3.jpg';
import mainBurner4 from '../assets/images/main_burner_4.jpg';
import mainBurner5 from '../assets/images/main_burner_5.jpg';

const images = [mainBurner1, mainBurner2, mainBurner3, mainBurner4, mainBurner5];

const Hero: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

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
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </div>
            ))}

            {/* Overlay Content */}
            <div className="relative z-10 text-center text-cream px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-wider drop-shadow-lg">
                    {EVENT_NAME}
                </h1>
                <p className="text-base md:text-2xl font-light tracking-wide drop-shadow-md">
                    雨の音と、コーヒーの香り。
                    <br />
                    仮想世界で少しだけ、羽を休めませんか。
                </p>
            </div>

            {/* Image Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full transition-all border-2 ${idx === currentImageIndex ? 'bg-cream border-cream scale-110' : 'bg-transparent border-cream/50 hover:border-cream/80'}`}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`Switch to image ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
