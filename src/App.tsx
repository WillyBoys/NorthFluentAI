import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AIBasics from './pages/AIBasics'
import PromptBetter from './pages/PromptBetter'
import StrengthsAndLimits from './pages/StrengthsAndLimits'
import About from './pages/About'
import PromptImprover from './pages/PromptImprover'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './styles/global.css'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-basics" element={<AIBasics />} />
            <Route path="/prompt-better" element={<PromptBetter />} />
            <Route path="/strengths-and-limits" element={<StrengthsAndLimits />} />
            <Route path="/about" element={<About />} />
            <Route path="/prompt-improver" element={<PromptImprover />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
