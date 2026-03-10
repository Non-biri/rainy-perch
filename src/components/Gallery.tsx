import React, { useState, useMemo } from 'react';

// Eagerly import all jpg images from the gallery folder
const galleryModules = import.meta.glob<{ default: string }>(
    '../assets/images/gallery/*.jpg',
    { eager: true }
);

// Extract date from VRChat filenames like "VRChat_2026-02-19_22-54-40.168_3840x2160.jpg"
function extractDateFromFilename(path: string): Date {
    const filename = path.split('/').pop() || '';
    const match = filename.match(/(\d{4})-(\d{2})-(\d{2})_(\d{2})-(\d{2})-(\d{2})/);
    if (match) {
        const [, year, month, day, hour, minute, second] = match;
        return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
    }
    return new Date(0);
}

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLightboxVisible, setIsLightboxVisible] = useState(false);

    // Sort images by date descending (newest first)
    const images = useMemo(() => {
        return Object.entries(galleryModules)
            .map(([path, mod]) => ({
                src: mod.default,
                date: extractDateFromFilename(path),
                filename: path.split('/').pop() || '',
            }))
            .sort((a, b) => b.date.getTime() - a.date.getTime());
    }, []);

    const handleOpenLightbox = (src: string) => {
        setSelectedImage(src);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsLightboxVisible(true));
        });
    };

    const handleCloseLightbox = () => {
        setIsLightboxVisible(false);
        setTimeout(() => setSelectedImage(null), 300);
    };

    return (
        <section className="py-20 px-4 bg-brown-900 text-cream">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Gallery</h2>

                {/* Collage-style masonry grid */}
                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((img, index) => (
                        <div
                            key={img.filename}
                            className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => handleOpenLightbox(img.src)}
                        >
                            <img
                                src={img.src}
                                alt={`Gallery photo ${index + 1}`}
                                className="w-full h-auto object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox modal */}
            {selectedImage && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer transition-all duration-300 ease-out ${isLightboxVisible ? 'bg-black/60' : 'bg-black/0'
                        }`}
                    onClick={handleCloseLightbox}
                >
                    <img
                        src={selectedImage}
                        alt="Gallery fullsize"
                        className={`max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-all duration-300 ease-out ${isLightboxVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className={`absolute top-6 right-6 text-white text-3xl font-bold hover:text-cream transition-all duration-300 ${isLightboxVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={handleCloseLightbox}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
