import React from 'react';
import { EVENT_NAME, LINKS } from '../constants';

const VRCGroup: React.FC = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">VRC Group</h2>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
                <p className="mb-6 text-sm md:text-lg">
                    {EVENT_NAME}のVRChatグループに参加すると、<br />
                    営業日のお知らせやイベント情報を<br />
                    いち早く受け取れます。<br />
                    ぜひお気軽にご参加ください。
                </p>
                <a
                    href={LINKS.vrcGroup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brown-800 text-cream px-8 py-3 rounded-full hover:bg-brown-900 transition-colors font-bold"
                >
                    VRCグループに参加する
                </a>
            </div>
        </div>
    );
};

export default VRCGroup;
