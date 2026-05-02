import React, { useState } from 'react';
import { motion } from 'framer-motion';

const myths = [
  {
    myth: "One vote doesn't make a difference.",
    fact: "Many local elections are decided by fewer than 100 votes. Your vote absolutely matters, especially in local races which directly impact your daily life."
  },
  {
    myth: "You need a specific type of ID to vote in all elections.",
    fact: "Voter ID laws vary drastically by jurisdiction. Many places do not require photo ID, and alternative forms of identification are often accepted."
  },
  {
    myth: "If you make a mistake on your ballot, your vote is lost forever.",
    fact: "If you make a mistake before submitting, you can ask a poll worker for a new ballot (this is called 'spoiling' a ballot)."
  },
  {
    myth: "Electoral fraud is widespread and changes election outcomes frequently.",
    fact: "Extensive research shows that voter fraud is exceptionally rare. Electoral systems have multiple layers of security and checks."
  }
];

export default function MythsTab() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Myth vs Fact</h2>
        <p className="text-text-secondary">Click the cards to reveal the truth behind common election misconceptions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
        {myths.map((item, idx) => (
          <FlipCard key={idx} myth={item.myth} fact={item.fact} idx={idx} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ myth, fact, idx }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className="relative w-full h-[200px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-primary text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-lg border border-white/10"
             style={{ backfaceVisibility: 'hidden' }}>
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4">Myth</span>
          <h3 className="text-lg font-bold">"{myth}"</h3>
          <p className="text-white/50 text-xs mt-4 group-hover:text-white/80 transition-colors">Click to reveal fact</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-white text-primary rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-lg border-2 border-secondary"
             style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-4">Fact</span>
          <p className="text-sm font-medium">{fact}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
