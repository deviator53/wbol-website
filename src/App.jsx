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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-[100px]">
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
