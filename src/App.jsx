import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import About from './pages/About'
import Membership from './pages/Membership'
import JoinTeam from './pages/JoinTeam'
import Trainers from './pages/Trainers'
import TestimonialsPage from './pages/TestimonialsPage'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FAQPage from './pages/FAQPage'
import Schedule from './pages/Schedule'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Programs />} />
        <Route path="/programs/:programId" element={<ProgramDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/join-team" element={<JoinTeam />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <ScrollToTop />
    </Router>
  )
}

export default App
