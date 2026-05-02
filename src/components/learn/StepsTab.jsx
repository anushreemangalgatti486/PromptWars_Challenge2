import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, MapPin, Search, Mail, FileCheck, Info } from 'lucide-react';

const steps = [
  { id: 1, title: 'Check Registration', desc: 'Confirm your voter registration status online or via local offices.', icon: <Search size={32} /> },
  { id: 2, title: 'Find Polling Station', desc: 'Locate where you need to go to cast your vote on election day.', icon: <MapPin size={32} /> },
  { id: 3, title: 'Review Candidates', desc: 'Read platforms, watch debates, and decide who best represents you.', icon: <Info size={32} /> },
  { id: 4, title: 'Cast Your Ballot', desc: 'Go to the station, verify your ID, and secretly cast your vote.', icon: <FileCheck size={32} /> },
];

export default function StepsTab() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">How Voting Works</h2>
        <p className="text-text-secondary">A simple step-by-step guide to participating in democracy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-border-light relative z-10 hover:-translate-y-2 hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              <span className="text-secondary mr-2">{step.id}.</span>
              {step.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}

        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-[68px] left-20 right-20 h-0.5 bg-secondary/20 z-0"></div>
      </div>
    </div>
  );
}
