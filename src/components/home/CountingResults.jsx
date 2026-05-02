import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CountingResults() {
  return (
    <section className="bg-primary py-[100px] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-[40px] text-white leading-tight mb-6"
          >
            From Counting Room to Results Declared
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/65 text-lg"
          >
            After polls close, trained officials count every ballot under public observation. When certified, results are declared — peacefully and transparently.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-video mb-16"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://storage.googleapis.com/electverse-media-bucket-495111/media/Election_count_to_results_declared_202605021155.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="bg-primary/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10 shadow-lg">
              <h4 className="text-accent-blue font-bold mb-1">Step 7 — Counting the Votes</h4>
              <p className="text-white/80 text-sm">Ballots processed under observation.</p>
            </div>
            
            <div className="bg-primary/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10 shadow-lg text-right">
              <h4 className="text-secondary font-bold mb-1">Step 8 — Results Declared</h4>
              <p className="text-white/80 text-sm">Official certification of outcomes.</p>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <Link to="/learn?tab=timeline" className="btn-outline-white text-white border-white/30 hover:border-white">
            See the full election timeline →
          </Link>
        </div>

      </div>
    </section>
  );
}
