import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://storage.googleapis.com/electverse-media-bucket-495111/media/Polling_station.mp4" type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl pt-20 lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[56px] leading-[1.1] font-bold text-white mb-6"
          >
            Your Vote.<br/>
            Your Voice.<br/>
            Your Democracy.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-xl font-body mb-10 max-w-lg"
          >
            Learn how elections work — from candidacy announcement to certified results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/learn" className="btn-amber text-lg">
              Start Learning →
            </Link>
            <Link to="/quiz" className="btn-outline-white text-lg">
              Take the Quiz
            </Link>
          </motion.div>
        </div>

        {/* Floating Badges right panel */}
        <div className="hidden lg:flex flex-col justify-center relative h-[400px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-10 right-20 glass-panel-dark px-6 py-4 rounded-xl flex items-center gap-4"
          >
            <span className="text-3xl">🌍</span>
            <div>
              <p className="text-white font-medium">Used in 190+ countries</p>
              <p className="text-white/50 text-sm">Global education</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-10 left-10 glass-panel-dark px-6 py-4 rounded-xl flex items-center gap-4"
          >
            <span className="text-3xl">📋</span>
            <div>
              <p className="text-white font-medium">10 election phases</p>
              <p className="text-white/50 text-sm">Step-by-step guides</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-secondary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
