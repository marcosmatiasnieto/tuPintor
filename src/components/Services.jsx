export default function Services() {
    const servicios = [
        {
            icon: "fa-house",
            title: "Pintura de Interiores",
            description: "Paredes, techos, molduras y acabados finos con materiales de primera calidad."
        },
        {
            icon: "fa-building",
            title: "Pintura de Exteriores",
            description: "Protección e impermeabilización de fachadas resguardadas contra clima e intemperie."
        },
        {
            icon: "fa-droplet-slash",
            title: "Tratamiento de Humedad",
            description: "Diagnóstico y reparación de grietas, salitre y humedad de cimientos o filtraciones."
        },
        {
            icon: "fa-brush",
            title: "Barnices y Maderas",
            description: "Restauración y laqueado de puertas, aberturas y pérgolas de madera."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">Soluciones integrales para dejar tus ambientes impecables.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicios.map((s, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                                <i className={`fa-solid ${s.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}