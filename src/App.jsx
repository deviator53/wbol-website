import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programmes from './pages/Programmes'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import News from './pages/News'
import NewsPost from './pages/NewsPost'
import FounderSpeech from './pages/FounderSpeech'
import Maintenance from './pages/Maintenance'

// Set to true to show maintenance page, false to restore the site
const MAINTENANCE_MODE = true

export default function App() {
  if (MAINTENANCE_MODE) return <Maintenance />

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-[140px] md:pt-[100px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsPost />} />
          <Route path="/founder-speech" element={<FounderSpeech />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
