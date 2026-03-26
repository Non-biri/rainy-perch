import React, { useState, useEffect, useCallback } from 'react';
import { EVENT_NAME } from '../constants';
import faviconIcon from '../assets/images/favicon.ico';

const navItems = [
    { label: 'Top', href: '#top' },
    { label: 'Concept', href: '#concept' },
    { label: 'Staff', href: '#staff' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'News', href: '#news' },
    { label: 'Join', href: '#join' },
];

const GlobalNav: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isDrawerOpen]);

    const scrollToElement = useCallback((targetId: string) => {
        const el = document.getElementById(targetId);
        if (!el) return;
        const targetY = el.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const diff = targetY - startY;
        if (diff === 0) return;
        let startTime: number | null = null;
        const duration = 600;

        const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            window.scrollTo(0, startY + diff * easeInOutCubic(progress));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, []);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
            setTimeout(() => scrollToElement(targetId), 350);
        } else {
            scrollToElement(targetId);
        }
    }, [isDrawerOpen, scrollToElement]);

    return (
        <>
            {/* Fixed Navigation Bar */}
            <nav
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
                    isScrolled
                        ? 'py-2 bg-cream/90 backdrop-blur-md shadow-sm'
                        : 'py-4 bg-cream/70 backdrop-blur-sm'
                }`}
            >
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#top"
                        onClick={(e) => handleNavClick(e, '#top')}
                        className="flex items-center gap-2 group"
                    >
                        <img
                            src={faviconIcon}
                            alt={EVENT_NAME}
                            className={`transition-all duration-300 ${isScrolled ? 'w-7 h-7' : 'w-9 h-9'}`}
                        />
                        <span className={`font-serif font-bold text-brown-900 tracking-wide transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'}`}>
                            {EVENT_NAME}
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-sm font-bold text-brown-800 hover:text-green-dark transition-colors tracking-wide"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
                        onClick={() => setIsDrawerOpen(true)}
                        aria-label="メニューを開く"
                    >
                        <span className="block w-6 h-0.5 bg-brown-900 rounded-full" />
                        <span className="block w-6 h-0.5 bg-brown-900 rounded-full" />
                        <span className="block w-6 h-0.5 bg-brown-900 rounded-full" />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsDrawerOpen(false)}
            />

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-full bg-brown-900 text-cream flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
                    isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-5">
                    <button
                        onClick={() => setIsDrawerOpen(false)}
                        className="text-cream text-3xl font-bold w-10 h-10 flex items-center justify-center hover:text-white transition-colors"
                        aria-label="メニューを閉じる"
                    >
                        &times;
                    </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-2xl font-serif font-bold tracking-widest hover:text-green-DEFAULT transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Drawer Footer */}
                <div className="p-6 text-center text-sm opacity-50 font-sans">
                    {EVENT_NAME}
                </div>
            </div>
        </>
    );
};

export default GlobalNav;
