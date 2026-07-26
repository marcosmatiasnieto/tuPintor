export default function WhyUs() {
    const razones = [
        {
            icon: "fa-clock",
            title: "Presupuesto en 24hs",
            desc: "Te respondemos al instante y coordinamos la visita técnica sin compromiso."
        },
        {
            icon: "fa-shield-halved",
            title: "Garantía de Trabajo",
            desc: "Usamos materiales de primera calidad para asegurar acabados duraderos."
        },
        {
            icon: "fa-broom",
            title: "Limpieza Garantizada",
            desc: "Cuidamos tus muebles y pisos. Entregamos la obra impecable y lista para usar."
        }
    ];

    return (
        <section className="py-16 bg-white px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {razones.map((item, index) => (
                        <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                                <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}