import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}