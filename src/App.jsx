import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CoachingPage from './CoachingPage'
import ContactPage from './ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/coaching" element={<CoachingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
