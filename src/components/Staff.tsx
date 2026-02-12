import React, { useState, useEffect } from 'react';

// Import images
import staffAIcon from '../assets/images/staff_A_icon.jpg';
import staffAStand1 from '../assets/images/staff_A_stand_1.png';
import staffAStand2 from '../assets/images/staff_A_stand_2.png';

import staffBIcon from '../assets/images/staff_B_icon.jpg';
import staffBStand1 from '../assets/images/staff_B_stand_1.png';
import staffBStand2 from '../assets/images/staff_B_stand_2.png';

import staffCIcon from '../assets/images/staff_C_icon.jpg';
import staffCStand1 from '../assets/images/staff_C_stand_1.png';
import staffCStand2 from '../assets/images/staff_C_stand_2.png';

interface StaffMember {
    id: number;
    name: string;
    role: string;
    icon: string;
    stands: string[];
    comment: string;
    description?: string;
}

const Staff: React.FC = () => {
    const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
    const [currentStandIndex, setCurrentStandIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const staffMembers: StaffMember[] = [
        {
            id: 1,
            name: "Staff A",
            role: "Barista",
            icon: staffAIcon,
            stands: [staffAStand1, staffAStand2],
            comment: "雨の日は、ここでゆっくりしませんか。",
            description: "丁寧なハンドドリップで、お客様一人ひとりに合わせた一杯を提供します。雨音を聞きながらのコーヒーブレイクをお楽しみください。"
        },
        {
            id: 2,
            name: "Staff B",
            role: "Server",
            icon: staffBIcon,
            stands: [staffBStand1, staffBStand2],
            comment: "美味しいスイーツをご用意してお待ちしています。",
            description: "季節のフルーツを使った自家製スイーツが自慢です。おすすめのペアリングもご提案させていただきます。"
        },
        {
            id: 3,
            name: "Staff C",
            role: "Manager",
            icon: staffCIcon,
            stands: [staffCStand1, staffCStand2],
            comment: "皆様のご来店を心よりお待ちしております。",
            description: "Rainy Perchが皆様にとって心地よい止まり木となりますように。いつでもお気軽にお声がけください。"
        },
    ];

    const handleOpenModal = (staff: StaffMember) => {
        setSelectedStaff(staff);
        setCurrentStandIndex(0);
        // Trigger animation after mount
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsModalVisible(true));
        });
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setTimeout(() => setSelectedStaff(null), 300); // Wait for animation to finish
    };

    const toggleStand = () => {
        if (selectedStaff) {
            setCurrentStandIndex((prev) => (prev + 1) % selectedStaff.stands.length);
        }
    };

    return (
        <section className="py-20 px-4 bg-cream">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-brown-900 mb-12">Staff</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {staffMembers.map((staff) => (
                        <div
                            key={staff.id}
                            className="flex flex-col items-center max-w-xs cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            onClick={() => handleOpenModal(staff)}
                        >
                            <div className="relative group">
                                <img
                                    src={staff.icon}
                                    alt={staff.name}
                                    className="w-40 h-40 rounded-full object-cover object-center border-4 border-brown-800 mb-6 shadow-lg group-hover:border-green-DEFAULT transition-colors"
                                />

                            </div>
                            <h3 className="text-2xl font-bold text-brown-900">{staff.name}</h3>
                            <p className="text-green-dark text-lg mb-2">{staff.role}</p>
                            <p className="text-brown-800 italic">"{staff.comment}"</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detail Modal */}
            {selectedStaff && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 ease-out ${isModalVisible ? 'bg-black/40' : 'bg-black/0'
                        }`}
                    onClick={handleCloseModal}
                >
                    <div
                        className={`bg-cream rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transition-all duration-300 ease-out ${isModalVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 bg-brown-100 relative h-[50vh] md:h-auto flex items-center justify-center overflow-hidden group">
                            <img
                                src={selectedStaff.stands[currentStandIndex]}
                                alt={`${selectedStaff.name} Stand`}
                                className="h-full w-auto object-contain cursor-pointer transition-transform duration-300"
                                onClick={toggleStand}
                            />
                            <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full text-xs font-bold text-brown-900 shadow-sm pointer-events-none">
                                Click image to switch pose
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left relative">
                            <button
                                className="absolute top-4 right-4 text-brown-800 hover:text-brown-900 text-2xl font-bold w-10 h-10 flex items-center justify-center"
                                onClick={handleCloseModal}
                            >
                                &times;
                            </button>

                            <p className="text-green-DEFAULT font-bold tracking-wider mb-2">{selectedStaff.role}</p>
                            <h3 className="text-4xl font-serif font-bold text-brown-900 mb-6">{selectedStaff.name}</h3>

                            <div className="space-y-4 text-brown-800 leading-relaxed overflow-y-auto max-h-60 pr-2">
                                <p className="font-bold text-lg border-l-4 border-green-DEFAULT pl-4 italic">
                                    "{selectedStaff.comment}"
                                </p>
                                <p className="">
                                    {selectedStaff.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-brown-200 flex gap-4">
                                {/* Pose Switcher Buttons (Optional alternative to clicking image) */}
                                {selectedStaff.stands.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-3 h-3 rounded-full transition-colors ${idx === currentStandIndex ? 'bg-brown-900' : 'bg-brown-300 hover:bg-brown-500'}`}
                                        onClick={() => setCurrentStandIndex(idx)}
                                        aria-label={`Switch to pose ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Staff;
