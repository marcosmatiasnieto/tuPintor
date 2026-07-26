import { useState } from 'react';
import { Link } from 'react-router-dom';

// Importación de tus imágenes
import img1 from '../assets/images/exteriorBlanco2.jpg';
import img2 from '../assets/images/paredDorada.jpg';
import img3 from '../assets/images/techo2.jpg';
import img4 from '../assets/images/Trabajado1.jpg';
import img5 from '../assets/images/Airless.jpg';
import img6 from '../assets/images/habitacionBlanca.jpg';
import img7 from '../assets/images/InteriorBlanco.jpg';
import img8 from '../assets/images/paredAzul.jpg';
import img9 from '../assets/images/interior.jpg';
import img10 from '../assets/images/Airless2.jpg';
import img11 from '../assets/images/techo.jpg';
import img12 from '../assets/images/exteriorBlanco.jpg';
import img13 from '../assets/images/FrenteDeCasa.jpg';
import img14 from '../assets/images/TechoBlanco.jpg';



export default function GalleryPage() {
    const [filter, setFilter] = useState('Todos');
    const [selectedImage, setSelectedImage] = useState(null);

    const fotos = [
        { src: img1, title: "Pintura de Fachada", category: "Exterior" },
        { src: img2, title: "Pared dorada ", category: "Exterior" },
        { src: img3, title: "Renovación de Techos y Pisos", category: "Exterior" },
        { src: img4, title: "Pisos", category: "Pisos" },
        { src: img5, title: "Airless", category: "Airless" },
        { src: img6, title: "habitacionBlanca", category: "Interior" },
        { src: img7, title: "habitacionBlanca/Naranja", category: "Interior" },
        { src: img8, title: "paredAzul", category: "Exterior" },
        { src: img9, title: "InteriorBlanco", category: "Interior" },
        { src: img10, title: "Airless2", category: "Airless" },
        { src: img11, title: "Techo", category: "Pisos" },
        { src: img12, title: "Exterior", category: "Exterior" },
        { src: img13, title: "FrenteDeCasa", category: "Exterior" },
        { src: img14, title: "TechoBlanco", category: "Exterior" },
        
    ];

    const categorias = ['Todos', 'Interior', 'Exterior', 'Pisos', 'Airless'];

    const fotosFiltradas = filter === 'Todos'
        ? fotos
        : fotos.filter(f => f.category === filter);

    return (
        <main className="min-h-screen bg-slate-50 pt-10 pb-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Botón Volver al inicio */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-white text-gray-800 font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md border border-gray-200 transition-all hover:-translate-x-0.5"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        Volver al inicio
                    </Link>
                </div>

                {/* Header de la Galería */}
                <div className="text-center mb-10">
                    <span className="text-brand-blue font-extrabold text-xs uppercase tracking-[0.2em] block mb-2">
                        Portafolio Completo
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight mb-4">
                        Galería de Obras Realizadas
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto text-base">
                        Explorá todos nuestros proyectos terminados en hogares, comercios e industrias.
                    </p>
                </div>

                {/* Filtros por categoría */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categorias.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full font-bold text-sm transition-all cursor-pointer ${filter === cat
                                    ? 'bg-brand-blue text-white shadow-md scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grilla de Fotos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {fotosFiltradas.map((foto, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(foto.src)}
                            className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-72 bg-gray-100 border border-gray-200/60"
                        >
                            <img
                                src={foto.src}
                                alt={foto.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">
                                    {foto.category}
                                </span>
                                <h3 className="text-lg font-bold">{foto.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Lightbox / Modal de Foto Ampliada */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-brand-blue transition cursor-pointer"
                        >
                            &times; Cerrar
                        </button>
                        <img
                            src={selectedImage}
                            alt="Trabajo ampliado"
                            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}