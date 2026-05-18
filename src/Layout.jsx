import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <div className="w-20 h-20 rounded-xl bg-slate-100 p-2 shadow-sm">
                <img src="/osed-logo.png" alt="OSED logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-black">OSED</div>
                <div className="text-xs text-gray-600 leading-tight">ONE STEP EVERYDAY.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="hover:text-gray-600 transition">Home</Link>
              <Link to="/about" className="hover:text-gray-600 transition">About</Link>
              <Link to="/coaching" className="hover:text-gray-600 transition">Coaching</Link>
              <Link to="/contact" className="btn-primary">Apply for Coaching</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <Link to="/" className="block hover:text-gray-600">Home</Link>
              <Link to="/about" className="block hover:text-gray-600">About</Link>
              <Link to="/coaching" className="block hover:text-gray-600">Coaching</Link>
              <Link to="/contact" className="block btn-primary text-center">Apply for Coaching</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Arrow icon - upward trending */}
                  <g>
                    {/* Gray diagonal stripes */}
                    <path d="M 30 60 L 50 40 L 70 20" stroke="#B0B0B0" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M 25 65 L 45 45 L 65 25" stroke="#B0B0B0" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M 35 55 L 55 35 L 75 15" stroke="#B0B0B0" strokeWidth="6" strokeLinecap="round" fill="none" />
                    {/* Red accent */}
                    <path d="M 55 35 L 65 25 L 75 35" stroke="#C41E3A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    {/* Arrowhead */}
                    <path d="M 75 15 L 85 20 L 78 25" stroke="#B0B0B0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>
                </svg>
                <h3 className="font-bold text-lg">OSED</h3>
              </div>
              <p className="text-gray-300">One Step Every Day</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                <li><Link to="/coaching" className="hover:text-white transition">Coaching</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
                />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OSED. All rights reserved. | Discipline. Consistency. Transformation.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-red-700 border-t border-gray-300 safe-area-inset-bottom">
        <div className="container-custom py-3">
          <Link
            to="/contact"
            className="block w-full py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-bold text-center rounded transition"
            style={{ backgroundColor: '#C41E3A' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#A01830'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#C41E3A'}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
}
