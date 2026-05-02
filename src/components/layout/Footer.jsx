import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] pt-[60px] pb-[32px] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="ballot box">🗳️</span>
              <span className="font-display font-bold text-[22px] tracking-wide text-white">
                ElectVerse
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Civic education for everyone. Learn how democracy works — free, open, always.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Learn</h4>
            <ul className="flex flex-col gap-3">
              {['Timeline', 'How Voting Works', 'Election Systems', 'Vote Simulator', 'Myth vs Fact', 'Eligibility Checker'].map(link => (
                <li key={link}>
                  <Link to="/learn" className="text-white/60 hover:text-secondary transition-colors text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              {['Country Explorer', 'World Calendar', 'Quiz & Badges', 'My Progress', 'Glossary'].map(link => (
                <li key={link}>
                  <Link to={`/${link.split(' ')[0].toLowerCase()}`} className="text-white/60 hover:text-secondary transition-colors text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">About</h4>
            <ul className="flex flex-col gap-3">
              {['About ElectVerse', 'Data Sources', 'Accessibility', 'Privacy Policy', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-secondary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm flex items-center gap-1.5">
            Built with <Heart size={14} className="text-accent-red fill-accent-red" /> for democracy
          </p>
          <p className="text-white/35 text-sm">
            © ElectVerse {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
