import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Users, Hash } from 'lucide-react';

const systems = [
  {
    title: 'First-Past-The-Post (FPTP)',
    icon: <Hash size={24} />,
    desc: 'The candidate with the most votes wins, regardless of whether they have a majority.',
    pros: ['Simple to understand', 'Usually produces clear winners'],
    cons: ['Can lead to a two-party system', 'Votes for losing candidates are "wasted"']
  },
  {
    title: 'Proportional Representation (PR)',
    icon: <PieChart size={24} />,
    desc: 'Parties gain seats in proportion to the number of votes cast for them.',
    pros: ['Fewer wasted votes', 'More representative of population'],
    cons: ['Can lead to unstable coalitions', 'Complex for voters to understand']
  },
  {
    title: 'Ranked Choice Voting (RCV)',
    icon: <Users size={24} />,
    desc: 'Voters rank candidates by preference. If no majority, the lowest is eliminated and votes redistributed.',
    pros: ['Eliminates the "spoiler effect"', 'Encourages positive campaigning'],
    cons: ['More complex ballot', 'Counting takes longer']
  }
];

export default function SystemsTab() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Electoral Systems</h2>
        <p className="text-text-secondary">Comparing different ways votes are translated into seats.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {systems.map((sys, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-border-light p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/5 p-3 rounded-lg text-primary">{sys.icon}</div>
              <h3 className="font-bold text-primary text-lg">{sys.title}</h3>
            </div>
            <p className="text-text-secondary text-sm mb-6 pb-6 border-b border-border-light">
              {sys.desc}
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">Advantages</h4>
                <ul className="text-sm text-text-secondary space-y-1 list-disc pl-4">
                  {sys.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Disadvantages</h4>
                <ul className="text-sm text-text-secondary space-y-1 list-disc pl-4">
                  {sys.cons.map((con, i) => <li key={i}>{con}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
