import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-brown-900 text-cream text-center border-t border-white/10">
            <div className="flex justify-center space-x-6 mb-4">
                <a
                    href="https://x.com/RainyPerch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-DEFAULT transition-colors"
                >
                    X (Twitter)
                </a>
            </div>
            <p className="text-sm opacity-60 font-sans">
                &copy; {new Date().getFullYear()} Rainy Perch. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
