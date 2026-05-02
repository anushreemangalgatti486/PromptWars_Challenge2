import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RallyParticipation() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://storage.googleapis.com/electverse-media-bucket-495111/media/Election_rally_crowd_animation_202605021139.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0A1628]/80 to-[#0A1628]/50 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-primary/40"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-[56px] text-white mb-6 drop-shadow-md">
            Democracy is Participation
          </h2>
          <p className="text-white/80 text-xl font-body mb-10 leading-relaxed drop-shadow-sm">
            Millions of citizens raise their voices every election cycle. Your participation shapes the world your community lives in.
          </p>
          <Link to="/learn?tab=eligibility" className="btn-amber px-8 py-4 text-lg shadow-glow-amber">
            Check your eligibility →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
