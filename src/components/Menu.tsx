import React from 'react';

const Menu: React.FC = () => {
    const menuItems = [
        { id: 1, src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop", alt: "Special Coffee" },
        { id: 2, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop", alt: "Cheesecake" },
        { id: 3, src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop", alt: "Latte Art" },
        { id: 4, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop", alt: "Sandwich" },
    ];

    return (
        <section className="py-20 px-4 bg-brown-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center text-brown-900 mb-12">Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item) => (
                        <div key={item.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
