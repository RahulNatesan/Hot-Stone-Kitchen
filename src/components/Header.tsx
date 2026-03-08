import { useState } from 'react'

const navLinks = [
  { label: 'Menu', href: '#dishes' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Experience', href: '#experience' },
  { label: 'Location', href: '#location' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
        <div className="container-hsk">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-hsk-accent/90 flex items-center justify-center text-white font-heading font-bold text-lg">
                  HSK
                </div>
                <span className="text-xl font-bold text-white">Hot Stone Kitchen</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#location"
                className="px-5 py-2.5 text-sm font-semibold text-white/80 border border-white/15 rounded-full hover:border-white/30 hover:text-white transition-all duration-300"
              >
                Reserve Table
              </a>
              <a
                href="#dishes"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-hsk-accent rounded-full hover:bg-hsk-accent-hover transition-all duration-300 shadow-lg shadow-red-900/30"
              >
                View Menu
              </a>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-hsk-primary border-l border-white/10 flex flex-col pt-24 pb-8 px-8 transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-left px-4 py-3 text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-8">
            <a href="#location" className="w-full py-3 text-center text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all" onClick={() => setMenuOpen(false)}>
              Reserve Table
            </a>
            <a href="#dishes" className="w-full py-3 text-center text-sm font-semibold text-white bg-hsk-accent rounded-full hover:bg-hsk-accent-hover transition-all" onClick={() => setMenuOpen(false)}>
              View Menu
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
