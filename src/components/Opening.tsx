import React, { useEffect, useState } from 'react';

interface OpeningProps {
    onComplete: () => void;
}

const Opening: React.FC<OpeningProps> = ({ onComplete }) => {
    const [fadeText, setFadeText] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // 1. Text fades in slightly after mount (controlled by CSS default or small timeout)
        const textTimer = setTimeout(() => {
            setFadeText(true);
        }, 500);

        // 2. Start fading out everything after a few seconds
        const completeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 3500);

        // 3. Notify parent animation is done to remove component
        const removeTimer = setTimeout(() => {
            onComplete();
        }, 4500); // 3500 + 1000ms transition

        return () => {
            clearTimeout(textTimer);
            clearTimeout(completeTimer);
            clearTimeout(removeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-brown-900 text-cream transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div
                className={`text-2xl md:text-4xl font-serif tracking-widest transition-opacity duration-1000 ${fadeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <p>一期一会の時間を貴方に。</p>
            </div>
        </div>
    );
};

export default Opening;
