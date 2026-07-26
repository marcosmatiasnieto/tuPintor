export default function Services() {
    const phone = "5493804750587";

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
        <section id="servicios" className="py-20 bg-slate-50/60 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] block mb-2">
                        Lo que hacemos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                        Soluciones profesionales adaptadas a cada tipo de proyecto y superficie.
                    </p>
                </div>

                {/* Grilla renovada */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((s, index) => {
                        const waUrl = `https://wa.me/${phone}?text=Hola,%20quisiera%20consultar%20por%20el%20servicio%20de%20${encodeURIComponent(s.title)}`;

                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Contenedor del ícono más grande y con más contraste */}
                                    <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 border border-blue-100 shadow-xs">
                                        <i className={`fa-solid ${s.icon}`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                                        {s.description}
                                    </p>
                                </div>

                                {/* Directo a WhatsApp filtrado por ese servicio */}
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-blue-700 transition"
                                >
                                    <span>Consultar este servicio</span>
                                    <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}