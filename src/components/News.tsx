import React from 'react';

const News: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-cream text-brown-900 border-t border-brown-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold mb-8">News</h2>
                <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
                    <p className="mb-6 text-lg">
                        最新情報は公式X (旧Twitter) にて配信しています。<br />
                        臨時休業や季節のメニューなど、こちらをご確認ください。
                    </p>
                    <a
                        href="https://x.com/RainyPerch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brown-800 text-cream px-8 py-3 rounded-full hover:bg-brown-900 transition-colors font-bold"
                    >
                        Check on X
                    </a>
                </div>
            </div>
        </section>
    );
};

export default News;
