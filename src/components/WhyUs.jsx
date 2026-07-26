export default function WhyUs() {
    const razones = [
        {
            title: "Protección y limpieza",
            desc: "Cuidamos pisos, muebles y detalles de terminación para que el trabajo quede prolijo de principio a fin."
        },
        {
            title: "Cobertura local",
            desc: "Atendemos trabajos en toda la ciudad y alrededores, con disponibilidad para obras residenciales, comerciales y barrios privados."
        },
        {
            title: "Presupuesto claro",
            desc: "Podés consultar por llamada o WhatsApp. También evaluamos por fotos cuando ayuda a orientar mejor el trabajo y el costo."
        },
        {
            title: "Experiencia real",
            desc: "Especialistas en pintura interior, exterior, fachadas, superficies de madera y aplicación de impermeabilizantes."
        }
    ];

    return (
        <section id="por-que-elegirnos" className="py-20 bg-gray-50/50 px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Encabezado calcado a la referencia */}
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-extrabold text-xs md:text-sm uppercase tracking-[0.25em] block mb-3">
                        ¿Por qué elegir TuPintor?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
                        Orden, prolijidad y contacto directo
                    </h2>
                </div>

                {/* Grilla de 4 Tarjetas Verticales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {razones.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition text-center flex flex-col justify-start"
                        >
                            <h3 className="text-xl font-extrabold text-brand-dark mb-4 leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}