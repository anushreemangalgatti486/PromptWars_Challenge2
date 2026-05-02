import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CinematicBanner() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section className="relative w-full h-[70vh] flex items-center overflow-hidden">
      {/* Parallax Video Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/electverse-media-bucket-495111/media/Man_inserting_ballot_box_202605021150.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A1628]/85 via-[#0A1628]/60 to-[#0A1628]/30"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[520px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-secondary/20 border border-secondary/50 text-secondary text-[11px] font-bold tracking-[4px] rounded uppercase mb-6 shadow-glow-amber">
              STEP 6 OF 8
            </span>
            <h2 className="font-display font-bold text-[52px] leading-tight text-white mb-6 drop-shadow-md">
              One Vote Can Change Everything
            </h2>
            <p className="text-white/75 text-lg font-body mb-8 leading-relaxed drop-shadow-sm">
              Every ballot you cast is a direct exercise of democratic power. Learn exactly what happens from the moment you enter the booth.
            </p>
            <Link to="/learn?tab=steps" className="btn-amber">
              See how voting works →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
