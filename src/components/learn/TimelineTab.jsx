import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Users, FileSignature, CheckCircle, Flag, Scale } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    phase: "Pre-Election",
    title: "Voter Registration & Districting",
    date: "1-2 Years Before",
    icon: <Users size={24} />,
    description: "Electoral boundaries are drawn and citizen voter rolls are updated. Eligible citizens must register to vote.",
    details: ["Boundary delimitation ensures equal representation.", "Voter registration drives occur nationwide.", "Eligibility is verified by electoral commissions."]
  },
  {
    id: 2,
    phase: "Campaign",
    title: "Candidate Nomination & Campaigning",
    date: "3-6 Months Before",
    icon: <Flag size={24} />,
    description: "Candidates declare their intent to run. Campaigns begin, involving rallies, debates, and policy platform releases.",
    details: ["Parties hold primary elections or caucuses.", "Candidates raise funds and launch advertising.", "Public debates are organized for major offices."]
  },
  {
    id: 3,
    phase: "Preparation",
    title: "Ballot Printing & Logistics",
    date: "1 Month Before",
    icon: <FileSignature size={24} />,
    description: "Official ballots are finalized and printed securely. Polling stations are secured and poll workers are trained.",
    details: ["Millions of ballots printed with anti-fraud measures.", "Electronic voting machines are tested and sealed.", "Logistics for remote and overseas voting are executed."]
  },
  {
    id: 4,
    phase: "Election Day",
    title: "Voting & Poll Closing",
    date: "Election Day",
    icon: <Calendar size={24} />,
    description: "Citizens cast their votes. Polling stations operate under strict observation. Polls close at designated times.",
    details: ["Voters verify identity at stations.", "Exit polling is conducted by media.", "Ballot boxes are sealed immediately upon poll closing."]
  },
  {
    id: 5,
    phase: "Post-Election",
    title: "Counting & Results Declaration",
    date: "1-7 Days After",
    icon: <CheckCircle size={24} />,
    description: "Votes are counted transparently. Preliminary results are announced, followed by official certification.",
    details: ["Counting occurs under party and independent observation.", "Disputes are handled by electoral courts.", "Final certification officially declares the winner."]
  }
];

export default function TimelineTab() {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">The Election Timeline</h2>
        <p className="text-text-secondary">Understanding the critical phases of a democratic election.</p>
      </div>

      <div className="relative border-l-4 border-secondary/30 ml-4 md:ml-8 space-y-8">
        {timelineEvents.map((event) => (
          <div key={event.id} className="relative pl-8 md:pl-12">
            {/* Timeline Node */}
            <div 
              className={`absolute -left-[22px] top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-colors ${
                expandedId === event.id ? 'bg-secondary text-primary' : 'bg-primary text-white'
              }`}
            >
              {event.icon}
            </div>

            {/* Content Card */}
            <motion.div 
              className={`bg-white rounded-xl shadow-sm border transition-all cursor-pointer overflow-hidden ${
                expandedId === event.id ? 'border-secondary ring-1 ring-secondary' : 'border-border-light hover:border-secondary/50'
              }`}
              onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}
              layout
            >
              <div className="p-6 flex items-center justify-between">
                <div>
                  <span className="text-accent-blue font-bold text-sm tracking-wider uppercase mb-1 block">
                    {event.phase} • {event.date}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === event.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-text-secondary" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedId === event.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-border-light mt-2">
                      <p className="text-text-secondary mb-4 mt-4 leading-relaxed">
                        {event.description}
                      </p>
                      <ul className="space-y-2">
                        {event.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-primary/80">
                            <CheckCircle size={16} className="text-secondary mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
