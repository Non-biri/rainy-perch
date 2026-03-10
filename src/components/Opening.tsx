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

    // Generate fixed random values for raindrops so they don't re-render differently
    const rainDrops = useRef(Array.from({ length: 30 }).map(() => ({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
        opacity: 0.1 + Math.random() * 0.3
    })));

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-brown-900 text-cream transition-opacity duration-700 overflow-hidden ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Rain Effect */}
            <div className="absolute inset-0 pointer-events-none">
                {rainDrops.current.map((drop, i) => (
                    <div
                        key={i}
                        className="absolute top-[-20px] w-[2px] h-[20px] bg-blue-200"
                        style={{
                            left: drop.left,
                            opacity: drop.opacity,
                            animation: `fall ${drop.animationDuration} linear infinite`,
                            animationDelay: drop.animationDelay,
                        }}
                    />
                ))}
            </div>

            {/* Inline styles for rain animation */}
            <style>{`
                @keyframes fall {
                    0% { transform: translateY(-20px); }
                    100% { transform: translateY(110vh); }
                }
            `}</style>

            <div
                className={`z-10 text-2xl md:text-4xl font-serif tracking-widest transition-all duration-1000 ${fadeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <p><ruby>一期一会<rt className="text-[0.6rem] md:text-base">いちごいちえ</rt></ruby>の時間を貴方に。</p>
            </div>
        </div>
    );
};

export default Opening;
