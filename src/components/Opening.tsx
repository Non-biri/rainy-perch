import React, { useEffect, useState, useCallback, useRef } from 'react';

interface OpeningProps {
    onComplete: () => void;
}

const Opening: React.FC<OpeningProps> = ({ onComplete }) => {
    const [fadeText, setFadeText] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const isSkipping = useRef(false);

    const handleSkip = useCallback(() => {
        if (isSkipping.current) return;
        isSkipping.current = true;
        setFadeOut(true);
        setTimeout(() => onComplete(), 800);
    }, [onComplete]);

    useEffect(() => {
        const textTimer = setTimeout(() => setFadeText(true), 500);
        const completeTimer = setTimeout(() => handleSkip(), 3500);

        // Skip on any user interaction
        const events = ['click', 'touchstart', 'keydown', 'wheel'] as const;
        events.forEach(e => window.addEventListener(e, handleSkip, { once: true }));

        return () => {
            clearTimeout(textTimer);
            clearTimeout(completeTimer);
            events.forEach(e => window.removeEventListener(e, handleSkip));
        };
    }, [handleSkip]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-brown-900 text-cream transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            <div
                className={`text-2xl md:text-4xl font-serif tracking-widest transition-all duration-1000 ${fadeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <p>一期一会の時間を貴方に。</p>
            </div>
        </div>
    );
};

export default Opening;
