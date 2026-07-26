export default function Hero() {
    const whatsappUrl = "https://wa.me/5493800000000?text=Hola,%20quisiera%20pedir%20un%20presupuesto%20de%20pintura";

    return (
        <section className="pt-32 pb-20 bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 text-white px-4">
            <div className="max-w-4xl mx-auto text-center">
                <span className="bg-blue-500/20 text-blue-200 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-wide">
                    Servicio Profesional de Pintura
                </span>

                <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight">
                    Renová tus espacios con un acabado perfecto
                </h1>

                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light">
                    Trabajos residenciales y comerciales. Rapidez, limpieza y presupuesto transparente en menos de 24 hs.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
                    >
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        Pedir Presupuesto por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}