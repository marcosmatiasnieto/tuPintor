export default function Navbar() {
    return (
        <header className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 transition-all">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-paint-roller text-2xl text-blue-600"></i>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">TuPintor</span>
                </div>

                <a
                    href="https://wa.me/5493800000000?text=Hola,%20quisiera%20pedir%20un%20presupuesto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-medium transition flex items-center gap-2 text-sm md:text-base cursor-pointer"
                >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span className="hidden sm:inline">Presupuesto sin cargo</span>
                </a>
            </div>
        </header>
    )
}