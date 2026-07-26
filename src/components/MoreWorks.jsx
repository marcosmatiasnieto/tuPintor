import { useState } from 'react';

// Importás fotos adicionales que tengas guardadas en tu carpeta images
import img5 from '../assets/images/interior.jpg'; // Podés reemplazar por trabajo5.jpg, etc.
import img6 from '../assets/images/techo.jpg';
import img7 from '../assets/images/estructuraExterior.jpg';
import img8 from '../assets/images/interiorNaranja.jpg';

export default function MoreWorks() {
    const [selectedImage, setSelectedImage] = useState(null);

    const fotosExtra = [
        { src: img5, alt: "Proyecto de pintura exterior" },
        { src: img6, alt: "Terminación en quincho y galería" },
        { src: img7, alt: "Trabajo en interior y cielorrasos" },
        { src: img8, alt: "Fachada comercial terminada" },
    ];

    return (
        <section className="py-20 bg-white px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* Título de la sección calcado a la referencia */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
                        Algunos de nuestros trabajos
                    </h2>
                </div>

                {/* Grilla de 2 columnas de imágenes grandes (igual que en la imagen de referencia) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {fotosExtra.map((foto, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(foto.src)}
                            className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-80 md:h-[400px] bg-gray-100 border border-gray-100"
                        >
                            <img
                                src={foto.src}
                                alt={foto.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay suave al pasar el cursor */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-sm border border-white/30 flex items-center gap-2">
                                    <i className="fa-solid fa-magnifying-glass-plus"></i> Ampliar imagen
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Lightbox / Modal para ver en grande */}
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
        </section>
    );
}