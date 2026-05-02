import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="bg-[#0A1628] py-[100px] relative overflow-hidden">
      {/* Subtle grid lines background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-[48px] text-white leading-tight mb-6">
            Ready to become an informed voter?
          </h2>
          <p className="text-white/65 text-xl font-body mb-10">
            Explore timelines, simulate elections, test your knowledge — all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/learn" className="btn-amber px-8 py-4 text-lg">
              Start Learning Free →
            </Link>
            <Link to="/quiz" className="btn-outline-white border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              Take the Quiz
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
