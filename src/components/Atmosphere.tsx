import React from 'react';

const Atmosphere: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-brown-900 text-cream">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Atmosphere</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1445116572660-d3842250e39c?q=80&w=800&auto=format&fit=crop"
                            alt="Cozy Corner"
                            className="w-full h-64 md:h-80 object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop"
                            alt="Coffee Beans"
                            className="w-full h-64 md:h-80 object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=400&auto=format&fit=crop"
                            alt="Rainy Window"
                            className="w-full h-64 md:h-80 object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <img
                            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
                            alt="Reading Area"
                            className="w-full h-64 md:h-80 object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Atmosphere;
