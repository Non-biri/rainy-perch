import React from 'react';
import { LINKS } from '../constants';

const News: React.FC = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">News</h2>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
                <p className="mb-6 text-sm md:text-lg">
                    次回営業日など最新情報は<br />
                    公式X (旧Twitter) にてご確認ください。
                </p>
                <a
                    href={LINKS.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brown-800 text-cream px-8 py-3 rounded-full hover:bg-brown-900 transition-colors font-bold"
                >
                    Check on X
                </a>
            </div>
        </div>
    );
};

export default News;
