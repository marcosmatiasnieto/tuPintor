import logo from '../assets/logo-tupintor.png';

export default function Navbar() {
    const phone = "3804750587"; // Tu número real cargado
    const whatsappUrl = `https://wa.me/${phone}?text=Hola,%20quisiera%20pedir%20un%20presupuesto`;

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo / Marca */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo TuPintor" className="h-12 w-auto rounded-full shadow-inner" />
                    <span className="text-2xl font-black text-brand-dark tracking-tighter">TuPintor</span>
                </div>

                {/* Links de navegación (Texto más grande y oscuro) */}
                <nav className="hidden md:flex items-center gap-8 font-bold text-gray-900 text-lg">
                    <a href="#servicios" className="hover:text-brand-blue transition">Servicios</a>
                    <a href="#trabajos" className="hover:text-brand-blue transition">Trabajos</a>
                    <a href="#por-que-elegirnos" className="hover:text-brand-blue transition">Por qué elegirnos</a>
                    <a href="#contacto" className="hover:text-brand-blue transition">Contacto</a>
                </nav>

                {/* Botones de acción */}
                <div className="flex items-center gap-3">
                    <a
                        href={`tel:+${phone}`}
                        className="hidden lg:flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-full font-bold text-base transition"
                    >
                        <i className="fa-solid fa-phone text-sm"></i>
                        Llamar
                    </a>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition flex items-center gap-2 text-base shadow-md"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        <span className="hidden sm:inline">Presupuesto</span>
                    </a>
                </div>

            </div>
        </header>
    );
}