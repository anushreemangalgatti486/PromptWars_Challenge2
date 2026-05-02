import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import TimelineTab from '../components/learn/TimelineTab';
import StepsTab from '../components/learn/StepsTab';
import SystemsTab from '../components/learn/SystemsTab';
import SimulatorTab from '../components/learn/SimulatorTab';
import MythsTab from '../components/learn/MythsTab';
import EligibilityTab from '../components/learn/EligibilityTab';

export default function LearnHubPage() {
  const [activeTab, setActiveTab] = useState('timeline');

  const tabs = [
    { id: 'timeline', label: 'Timeline', component: <TimelineTab /> },
    { id: 'steps', label: 'How Voting Works', component: <StepsTab /> },
    { id: 'systems', label: 'Electoral Systems', component: <SystemsTab /> },
    { id: 'simulator', label: 'Vote Simulator', component: <SimulatorTab /> },
    { id: 'myths', label: 'Myth vs Fact', component: <MythsTab /> },
    { id: 'eligibility', label: 'Eligibility', component: <EligibilityTab /> },
  ];

  const activeComponent = tabs.find(t => t.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-[48px] text-primary mb-6"
          >
            Learn Hub
          </motion.h1>
          <p className="text-text-secondary text-lg">
            Dive into the mechanics of democracy. Explore interactive guides, simulators, and comparisons to understand how elections shape our world.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-secondary text-primary shadow-glow-amber'
                  : 'bg-white text-text-secondary hover:bg-gray-50 border border-border-light'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="bg-white rounded-3xl shadow-lg border border-border-light p-8 min-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeComponent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
