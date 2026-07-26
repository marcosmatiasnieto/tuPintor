import logo from '../assets/logo-tupintor.png';

export default function Footer() {
    const phone = "3804750587"; // Tu número configurado

    return (
        <footer id="contacto" className="bg-brand-dark text-gray-300 pt-16 pb-12 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-gray-800">

                {/* Columna 1: Marca y descripción */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-4">
                        <img src={logo} alt="Logo TuPintor" className="h-10 w-auto rounded-full" />
                        <span className="text-2xl font-black text-white tracking-tighter">TuPintor</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Servicios profesionales de pintura para hogares, comercios e industrias. Garantía de prolijidad, rapidez y atención personalizada.
                    </p>
                </div>

                {/* Columna 2: Enlaces Rápidos */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Navegación</h4>
                    <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
                        <li><a href="#servicios" className="hover:text-brand-blue transition">Nuestros Servicios</a></li>
                        <li><a href="#trabajos" className="hover:text-brand-blue transition">Galería de Trabajos</a></li>
                        <li><a href="#por-que-elegirnos" className="hover:text-brand-blue transition">¿Por qué elegirnos?</a></li>
                        <li><a href={`https://wa.me/${phone}?text=Hola,%20quisiera%20pedir%20un%20presupuesto`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition">Pedir Presupuesto</a></li>
                    </ul>
                </div>

                {/* Columna 3: Contacto Directo */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-4">Contacto Directo</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-3">
                            <i className="fa-brands fa-whatsapp text-green-500 text-lg"></i>
                            <span>WhatsApp / Llamadas: <strong>3804750587</strong></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-location-dot text-brand-blue text-lg"></i>
                            <span>Zona de Cordoba: Capital y Alrededores</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p>&copy; {new Date().getFullYear()} TuPintor. Todos los derechos reservados.</p>
                <p>Diseño y Desarrollo Web</p>
            </div>
        </footer>
    );
}