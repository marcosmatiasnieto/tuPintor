import { useState } from 'react';
import logo from '../assets/logo-tupintor.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const phone = "3804750587";
    const whatsappUrl = `https://wa.me/${phone}?text=Hola,%20quisiera%20pedir%20un%20presupuesto`;

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex justify-between items-center">

                {/* Logo / Marca */}
                <Link
                    to="/"
                    className="flex items-center gap-2 md:gap-3 group"
                    aria-label="Ir al inicio"
                >
                    <img
                        src={logo}
                        alt="Logo TuPintor"
                        className="h-10 md:h-12 w-auto rounded-full shadow-inner transition-transform duration-200 group-hover:scale-105"
                    />

                    <span className="text-xl md:text-2xl font-black text-brand-dark tracking-tighter transition-colors duration-200 group-hover:text-brand-blue">
                        TuPintor
                    </span>
                </Link>

                {/* Links de navegación (Solo visibles en pantallas grandes lg:) */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-bold text-gray-900 text-base xl:text-lg">
                    <a href="#servicios" className="hover:text-brand-blue transition">Servicios</a>
                    <a href="#trabajos" className="hover:text-brand-blue transition">Trabajos</a>
                    <a href="#por-que-elegirnos" className="hover:text-brand-blue transition">Por qué elegirnos</a>
                    <a href="#contacto" className="hover:text-brand-blue transition">Contacto</a>
                </nav>

                {/* Botones de acción escritorio */}
                <div className="hidden sm:flex items-center gap-3">
                    <a
                        href={`tel:+${phone}`}
                        className="hidden xl:flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-bold text-sm transition"
                    >
                        <i className="fa-solid fa-phone text-xs"></i>
                        Llamar
                    </a>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-bold transition flex items-center gap-2 text-sm xl:text-base shadow-md"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        <span>Presupuesto</span>
                    </a>
                </div>

                {/* Botón Hamburguesa (Para pantallas chicas y medianas) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-gray-800 focus:outline-none p-2 text-2xl"
                    aria-label="Abrir menú"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>

            </div>

            {/* Menú Desplegable Móvil */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-6 shadow-xl flex flex-col gap-4 font-bold text-gray-900 text-lg">
                    <a href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-brand-blue py-1">Servicios</a>
                    <a href="#trabajos" onClick={() => setIsOpen(false)} className="hover:text-brand-blue py-1">Trabajos</a>
                    <a href="#por-que-elegirnos" onClick={() => setIsOpen(false)} className="hover:text-brand-blue py-1">Por qué elegirnos</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-brand-blue py-1">Contacto</a>
                    <div className="pt-2 flex flex-col gap-2">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            Pedir Presupuesto por WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}