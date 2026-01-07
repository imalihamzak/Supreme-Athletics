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
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Pricing from './pages/Pricing'
import Videos from './pages/Videos'
import GetStarted from './pages/GetStarted'
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
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/join-team" element={<JoinTeam />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <ScrollToTop />
    </Router>
  )
}

export default App
