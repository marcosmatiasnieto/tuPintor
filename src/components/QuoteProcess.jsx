export default function QuoteProcess() {
    const pasos = [
        {
            title: "Nos contás zona y tipo de trabajo",
            desc: "Contactanos y contanos qué trabajo de pintura necesitás: casa, departamento, local, fachada, finalización de contrato o impermeabilización."
        },
        {
            title: "Enviás fotos o video si ayuda",
            desc: "Una imagen del estado actual permite orientar mejor el alcance y evitar presupuestos a ciegas."
        },
        {
            title: "Coordinamos el próximo paso",
            desc: "Te orientamos con alcance, tiempos y condiciones para avanzar de forma clara."
        }
    ];

    return (
        <section className="py-20 bg-[#FBF9F5] px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-extrabold text-xs md:text-sm uppercase tracking-[0.25em] block mb-3">
                        Cotización
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight mb-6">
                        Cómo pedir presupuesto
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        Para presupuestar bien necesitamos saber zona, tipo de trabajo, estado de paredes, metros aproximados, altura, preparación previa y si el trabajo incluye materiales.
                    </p>
                </div>

                {/* Grilla de 3 Pasos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pasos.map((paso, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition text-center flex flex-col justify-start"
                        >
                            <h3 className="text-xl font-extrabold text-brand-dark mb-4 leading-snug">
                                {paso.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                                {paso.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}