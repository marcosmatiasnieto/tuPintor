import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import QuoteProcess from './components/QuoteProcess'
import MoreWorks from './components/MoreWorks'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <QuoteProcess />
        <MoreWorks />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}