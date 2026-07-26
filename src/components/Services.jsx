export default function Services() {
    const servicios = [
        {
            icon: "fa-paint-roller",
            title: "Pintura Interior y Exterior",
            description: "Acabados de calidad para casas, departamentos, oficinas y fachadas comerciales."
        },
        {
            icon: "fa-screwdriver-wrench",
            title: "Mantenimiento Gral. de Pintura",
            description: "Retoques, reparación de grietas y acondicionamiento general de superficies."
        },
        {
            icon: "fa-spray-can",
            title: "Aplicación de Sistemas Airless",
            description: "Tecnología de pulverizado a alta presión para acabados uniformes, ultra rápidos y perfectos."
        },
        {
            icon: "fa-brush",
            title: "Barnices Sintéticos",
            description: "Protección, embellecimiento y laqueado para aberturas, decks y estructuras de madera."
        },
        {
            icon: "fa-border-all",
            title: "Pintura y Renovación de Pisos",
            description: "Aplicación de pintura epóxica y recubrimientos de alta resistencia para pisos y garajes."
        },
        {
            icon: "fa-droplet-slash",
            title: "Impermeabilización",
            description: "Tratamiento contra filtraciones, humedad de cimientos y sellado protector de techos y muros."
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-bold text-sm uppercase tracking-wider">
                        Lo que hacemos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark mt-2 mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
                        Soluciones profesionales adaptadas a cada tipo de proyecto y superficie.
                    </p>
                </div>

                {/* Grilla ajustada a 3 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((s, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 text-2xl">
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}