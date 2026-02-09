import React from 'react';

const HowToJoin: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-brown-800 text-cream">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold mb-10">How to Join</h2>
                <div className="space-y-6 text-lg leading-relaxed font-serif">
                    <p>
                        Rainy Perchは、VRChat上のワールドとして公開されています。
                    </p>
                    <div className="bg-brown-900 p-8 rounded-lg border border-brown-100/20 inline-block text-left mt-4">
                        <h3 className="text-xl font-bold mb-4 text-center">参加方法</h3>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>VRChatを起動し、メニューを開きます。</li>
                            <li>World検索で「RainyPerch」と入力してください。</li>
                            <li>検索結果からワールドを選択し、Joinしてください。</li>
                        </ol>
                        <p className="mt-6 text-sm text-center opacity-80">
                            ※ PC / Quest 両対応
                        </p>
                    </div>
                    <p className="mt-10">
                        皆様のご来店を心よりお待ちしております。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowToJoin;
