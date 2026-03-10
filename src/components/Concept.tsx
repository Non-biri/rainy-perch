import React from 'react';

const Concept: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-cream text-brown-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold mb-10">Concept</h2>
                <div className="space-y-6 text-sm md:text-lg leading-relaxed font-serif">
                    <p>
                        Rainy・Perchは、雨の降る止まり木のような場所。
                    </p>
                    <p>
                        仮想世界の片隅で、静かな雨音と共に<br />
                        ささやかな憩いの場を提供しております。<br />
                    </p>
                    <p>
                        第1、第3木曜日の22時～23時に営業<br />
                        初見さん初心者さん大歓迎の、<br />
                        ゆったりカフェイベントです。<br />
                    </p>
                    <p>
                        ぜひ、お友達も誘って<br />
                        一緒に楽しいひとときを過ごしませんか？<br />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Concept;
