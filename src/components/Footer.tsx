import React from 'react';
import { AUTHOR } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-brown-900 text-cream text-center">
            <p className="text-sm opacity-60 font-sans">
                Copyright &copy; {new Date().getFullYear()} {AUTHOR.name}（X：{AUTHOR.xHandle}）
            </p>
        </footer>
    );
};

export default Footer;
