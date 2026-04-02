import React, { useState } from 'react';
import { LINKS } from '../constants';
import joinImage from '../assets/images/CRP_Join.jpg';
import notesImage from '../assets/images/CRP_Notes.jpg';

const items = [
    { src: joinImage, alt: '参加方法', label: '参加方法' },
    { src: notesImage, alt: 'イベント注意事項', label: 'イベント注意事項' },
];

const HowToJoin: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLightboxVisible, setIsLightboxVisible] = useState(false);

    const handleOpen = (src: string) => {
        setSelectedImage(src);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsLightboxVisible(true));
        });
    };

    const handleClose = () => {
        setIsLightboxVisible(false);
        setTimeout(() => setSelectedImage(null), 300);
    };

    return (
        <section className="py-20 px-4 bg-brown-800 text-cream">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">How to Join</h2>

                {/* Pre-registration Block */}
                <div className="mb-16 text-center text-sm md:text-lg">
                    <div className="bg-brown-900/40 p-8 rounded-lg border border-brown-300 mx-auto max-w-2xl">
                        <p className="mb-2 opacity-90">
                            当店は事前予約制です。
                        </p>
                        <p className="mb-6 opacity-90">
                            御予約された方を優先でご案内したのち、<br />Group＋でオープンいたします。
                        </p>
                        <p className="mb-6 opacity-90 text-xs md:text-sm">
                            ※定員以上のご予約があった場合は抽選となります。
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <a
                                href={LINKS.reservationForm}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-80 max-w-full text-center bg-cream text-brown-900 font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
                            >
                                事前予約はこちら
                            </a>
                            <a
                                href={LINKS.vrcGroup}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-80 max-w-full text-center bg-cream text-brown-900 font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
                            >
                                VRCグループへの参加はこちら
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item) => (
                        <div key={item.label} className="text-center">
                            <h3 className="text-2xl font-serif font-bold mb-6">{item.label}</h3>
                            <div
                                className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                                onClick={() => handleOpen(item.src)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Message */}
                <div className="mt-16 text-center text-lg">
                    <p className="text-xl font-serif tracking-widest">
                        皆様のご来店を<br />
                        心よりお待ちしております。
                    </p>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer transition-all duration-300 ease-out ${isLightboxVisible ? 'bg-black/60' : 'bg-black/0'
                        }`}
                    onClick={handleClose}
                >
                    <img
                        src={selectedImage}
                        alt="拡大表示"
                        className={`max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-all duration-300 ease-out ${isLightboxVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className={`absolute top-6 right-6 text-white text-3xl font-bold hover:text-cream transition-all duration-300 ${isLightboxVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
};

export default HowToJoin;
