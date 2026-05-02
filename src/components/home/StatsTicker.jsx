import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: "4.2B",  label: "Eligible voters worldwide" },
  { number: "190+",  label: "Countries hold elections"  },
  { number: "50+",   label: "Glossary terms to explore" },
  { number: "8",     label: "Steps to cast your ballot" },
  { number: "4",     label: "Major electoral systems"   },
  { number: "20+",   label: "Questions in our quiz"     }
];

export default function StatsTicker() {
  return (
    <section className="bg-secondary py-6 overflow-hidden border-y border-white/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
        >
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-2xl text-primary">{stat.number}</span>
                <span className="font-body font-medium text-primary/80 text-sm">{stat.label}</span>
              </div>
              {idx < stats.length - 1 && (
                <span className="hidden md:inline-block text-primary/30 text-xl font-black">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
