export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <span className="text-xl font-bold text-white">TuPintor</span>
                    <p className="text-sm mt-1">Servicios profesionales de pintura.</p>
                </div>
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} TuPintor. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}