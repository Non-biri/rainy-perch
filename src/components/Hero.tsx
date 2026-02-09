import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gray-700">
                <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
                    alt="Cafe Interior"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 text-center text-cream px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-wider">
                    Rainy Perch
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-wide">
                    雨の音と、コーヒーの香り。
                    <br />
                    仮想世界で少しだけ、羽を休めませんか。
                </p>
            </div>
        </section>
    );
};

export default Hero;
