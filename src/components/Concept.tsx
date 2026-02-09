import React from 'react';

const Concept: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-cream text-brown-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold mb-10">Concept</h2>
                <div className="space-y-6 text-lg leading-relaxed font-serif">
                    <p>
                        Rainy Perchは、雨の降る止まり木のような場所。
                    </p>
                    <p>
                        仮想世界の片隅で、静かな雨音と共に<br />
                        落ち着いた時間を過ごしていただきたい。<br />
                        そんな想いでこのカフェを作りました。
                    </p>
                    <p>
                        お気に入りのアバターで、<br />
                        友人と語らうもよし、一人で読書をするもよし。<br />
                        あなたの心地よい居場所になれますように。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Concept;
