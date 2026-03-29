import { useState, useMemo, useEffect, useCallback, useRef } from 'react';

import { LINKS } from '../constants';

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

interface GalleryImage {
    src: string;
    filename: string;
    aspectRatio: number;
}

/**
 * Pinterest-style: distribute images into the shortest column first.
 * This ensures newer images (sorted first) appear near the top.
 */
function distributeToColumns(images: GalleryImage[], numCols: number): GalleryImage[][] {
    const columns: GalleryImage[][] = Array.from({ length: numCols }, () => []);
    const colHeights = new Array(numCols).fill(0);

    for (const img of images) {
        const shortestIdx = colHeights.indexOf(Math.min(...colHeights));
        columns[shortestIdx].push(img);
        colHeights[shortestIdx] += 1 / img.aspectRatio;
    }

    return columns;
}

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLightboxVisible, setIsLightboxVisible] = useState(false);
    const [columns, setColumns] = useState<GalleryImage[][]>([]);
    const [numCols, setNumCols] = useState(window.innerWidth >= 768 ? 3 : 2);
    const resolvedImages = useRef<GalleryImage[] | null>(null);

    // Sort images by date descending (newest first), strip date after sorting
    const sortedImages = useMemo(() => {
        return Object.entries(galleryModules)
            .map(([path, mod]) => ({
                src: mod.default,
                date: extractDateFromFilename(path),
                filename: path.split('/').pop() || '',
            }))
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map(({ src, filename }) => ({ src, filename, aspectRatio: 16 / 9 }));
    }, []);

    // Load actual image dimensions once, then redistribute on column count change
    useEffect(() => {
        let cancelled = false;

        const loadAndDistribute = async () => {
            if (!resolvedImages.current) {
                resolvedImages.current = await Promise.all(
                    sortedImages.map(
                        (img) =>
                            new Promise<GalleryImage>((resolve) => {
                                const imgEl = new Image();
                                imgEl.onload = () =>
                                    resolve({ ...img, aspectRatio: imgEl.naturalWidth / imgEl.naturalHeight });
                                imgEl.onerror = () => resolve(img);
                                imgEl.src = img.src;
                            })
                    )
                );
            }

            if (!cancelled) {
                setColumns(distributeToColumns(resolvedImages.current, numCols));
            }
        };

        loadAndDistribute();
        return () => { cancelled = true; };
    }, [sortedImages, numCols]);

    // Debounced responsive column count
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setNumCols(window.innerWidth >= 768 ? 3 : 2);
            }, 150);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOpenLightbox = useCallback((src: string) => {
        setSelectedImage(src);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsLightboxVisible(true));
        });
    }, []);

    const handleCloseLightbox = useCallback(() => {
        setIsLightboxVisible(false);
        setTimeout(() => setSelectedImage(null), 300);
    }, []);

    return (
        <section className="py-20 px-4 bg-brown-900 text-cream">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Gallery</h2>

                {/* Pinterest-style masonry grid */}
                <div className="flex gap-4">
                    {columns.map((col, colIdx) => (
                        <div key={colIdx} className="flex-1 flex flex-col gap-4">
                            {col.map((img, index) => (
                                <div
                                    key={img.filename}
                                    className="overflow-hidden rounded-lg cursor-pointer group"
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
                    ))}
                </div>

                {/* Hashtag Link */}
                <div className="mt-16 text-center">
                    <p className="mb-4 text-sm md:text-lg opacity-80">
                        ハッシュタグ「#Rainy_Perch」で皆さまの写真もぜひ共有してください！
                    </p>
                    <a
                        href={LINKS.hashtag}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-cream text-brown-900 font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
                    >
                        #Rainy_Perch
                    </a>
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
