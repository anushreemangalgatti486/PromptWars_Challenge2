import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Learn', path: '/learn' },
  { label: 'Countries', path: '/countries' },
  { label: 'Calendar', path: '/calendar' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'Glossary', path: '/glossary' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // simple mock for now
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#0A1628]/95 backdrop-blur-md border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl" role="img" aria-label="ballot box">🗳️</span>
          <span className={`font-display font-bold text-[22px] tracking-wide transition-colors ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-primary drop-shadow-md'}`}>
            ElectVerse
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.path 
                  ? 'text-secondary border-b-2 border-secondary pb-1' 
                  : (isScrolled || location.pathname !== '/' ? 'text-white/80' : 'text-primary hover:text-white drop-shadow-sm')
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Elements */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/progress" className="flex items-center px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-sm font-medium shadow-glow-amber hover:bg-secondary/25 transition-colors cursor-pointer">
            View Progress
          </Link>
          
          <Link to="/learn" className="btn-amber px-6 py-2 h-10 text-sm">
            Start Learning
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-md ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-primary'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0A1628] flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <span className="font-display text-white text-[22px] font-bold">ElectVerse</span>
              <button className="text-white p-2" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-secondary text-xl font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                <Link to="/learn" onClick={() => setIsMobileMenuOpen(false)} className="btn-amber w-full py-4 text-center">
                  Start Learning Free
                </Link>
                <Link to="/quiz" onClick={() => setIsMobileMenuOpen(false)} className="btn-outline-white w-full py-4 text-center border-white/30 hover:bg-white/10 hover:text-white">
                  Take the Quiz
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
