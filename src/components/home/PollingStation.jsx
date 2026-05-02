import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PollingStation() {
  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Video Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative rounded-[16px] overflow-hidden shadow-xl aspect-video"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://storage.googleapis.com/electverse-media-bucket-495111/media/Polling_station.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </motion.div>

          {/* Text Right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-accent-blue font-bold text-sm tracking-widest uppercase mb-4">
              ELECTION DAY
            </h4>
            <h2 className="font-display font-bold text-[40px] text-primary leading-tight mb-6">
              Democracy in Action
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              On election day, polling stations across the country open their doors. Election officials verify registrations, hand out ballots, and ensure every vote is cast in private and counted with full transparency.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <p className="font-display font-bold text-3xl text-primary mb-1">190+</p>
                <p className="text-text-secondary text-sm">countries hold elections</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-primary mb-1">4.2B</p>
                <p className="text-text-secondary text-sm">eligible voters worldwide</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-primary mb-1">8</p>
                <p className="text-text-secondary text-sm">steps to cast your ballot</p>
              </div>
            </div>

            <Link to="/learn?tab=steps" className="btn-outline">
              Explore polling station steps →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
