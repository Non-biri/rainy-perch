import React from 'react';
import { EVENT_NAME, AUTHOR } from '../constants';

const Disclaimer: React.FC = () => {
    return (
        <section className="py-12 bg-brown-900 border-t border-white/10 text-cream">
            <div className="max-w-4xl mx-auto px-4 text-xs md:text-sm opacity-50 text-left leading-relaxed font-sans space-y-2">
                <p className="text-center text-base md:text-xl font-bold tracking-wider drop-shadow-lg">
                    免責事項
                </p>
                <p>
                    ※当サイトはVRChatにて開催されるカフェイベント「{EVENT_NAME}」（以下、本イベント）代表者の許可を得て、{AUTHOR.name}が個人的に作成したファンページ（二次創作）です。
                </p>
                <p>
                    ※本イベントの運営とは直接的な関わりはございませんので、当サイトに関する内容を本イベントへ直接お問い合わせすることはご遠慮ください。
                </p>
                <p>
                    ※当サイトの利用により生じたいかなる問題や損害について、{AUTHOR.name}は責任を負いかねます。
                </p>
                <p>
                    ※更新は個人のペースで行うため、実際のイベント状況と異なる場合があります。最新情報は本イベントの公式Xにてご確認ください。
                </p>
                <p>
                    ※当サイトは予告なく内容変更や公開終了となる場合がございます。あらかじめご了承ください。
                </p>
                <p>
                    ※当サイトについてお気づきの点がございましたら、個別に{AUTHOR.name}（X：{AUTHOR.xHandle}）までご連絡ください。
                </p>
            </div>
        </section>
    );
};

export default Disclaimer;
