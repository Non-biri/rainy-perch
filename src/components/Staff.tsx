import React from 'react';

const Staff: React.FC = () => {
    const staffMembers = [
        {
            id: 1,
            name: "Owner",
            role: "Barista",
            image: "https://placehold.co/150x150/2D241E/FFF?text=Owner",
            comment: "雨の日は、ここでゆっくりしませんか。"
        },
        {
            id: 2,
            name: "Staff A",
            role: "Server",
            image: "https://placehold.co/150x150/43342E/FFF?text=Staff+A",
            comment: "美味しいスイーツをご用意してお待ちしています。"
        },
    ];

    return (
        <section className="py-20 px-4 bg-cream">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-brown-900 mb-12">Staff</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {staffMembers.map((staff) => (
                        <div key={staff.id} className="flex flex-col items-center max-w-xs">
                            <img
                                src={staff.image}
                                alt={staff.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-brown-800 mb-4"
                            />
                            <h3 className="text-xl font-bold text-brown-900">{staff.name}</h3>
                            <p className="text-green-dark text-sm mb-2">{staff.role}</p>
                            <p className="text-brown-800 italic">"{staff.comment}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Staff;
