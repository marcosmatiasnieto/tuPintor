import fondoHero from '../assets/images/estructuraExterior.jpg';

export default function Hero() {
    const phone = "3804750587";
    const whatsappUrl = `https://wa.me/${phone}?text=Hola,%20quisiera%20enviar%20fotos%20para%20un%20presupuesto`;

    return (
        <section
            className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-4 bg-cover bg-center text-white min-h-[85vh] flex items-center"
            style={{ backgroundImage: `url(${fondoHero})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"></div>

            <div className="relative max-w-5xl mx-auto text-center z-10">

                <span className="inline-block bg-brand-blue/30 text-blue-200 text-xs md:text-sm font-bold px-3.5 py-1 rounded-full border border-brand-blue/40 uppercase tracking-widest mb-4">
                    Servicios Profesionales de Pintura
                </span>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight">
                    Pintores Profesionales en tu Ciudad
                </h1>

                <p className="text-base sm:text-xl text-gray-100 mb-6 md:mb-8 max-w-3xl mx-auto font-normal leading-relaxed">
                    Especialistas en interiores, exteriores, impermeabilizaciones y aplicación con tecnología Airless. Pedí tu presupuesto sin compromiso.
                </p>

                {/* Grilla de Servicios Clave */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto mb-8 text-xs sm:text-base md:text-lg font-bold text-white">
                    <div className="bg-white/10 backdrop-blur-sm py-2 px-2.5 rounded-lg border border-white/10">✓ Interior y Exterior</div>
                    <div className="bg-white/10 backdrop-blur-sm py-2 px-2.5 rounded-lg border border-white/10">✓ Sistema Airless</div>
                    <div className="bg-white/10 backdrop-blur-sm py-2 px-2.5 rounded-lg border border-white/10">✓ Renovación de Pisos</div>
                    <div className="bg-white/10 backdrop-blur-sm py-2 px-2.5 rounded-lg border border-white/10">✓ Impermeabilización</div>
                    <div className="bg-white/10 backdrop-blur-sm py-2 px-2.5 rounded-lg border border-white/10">✓ Mantenimiento Gral.</div>
                    <div className="bg-white/10 backdrop-blur-sm py-2 px-2.5 rounded-lg border border-white/10">✓ Barnices Sintéticos</div>
                </div>

                {/* Botones de Acción principales */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                    <a
                        href={`tel:+${phone}`}
                        className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg"
                    >
                        <i className="fa-solid fa-phone text-lg"></i>
                        Pedir cotización por teléfono
                    </a>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-white hover:bg-gray-100 text-slate-900 font-bold px-6 py-3.5 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg"
                    >
                        <i className="fa-brands fa-whatsapp text-xl text-green-500"></i>
                        Enviar fotos por WhatsApp
                    </a>
                </div>

            </div>
        </section>
    );
}