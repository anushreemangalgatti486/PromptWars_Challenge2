import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const elections = [
  { flag: "🇺🇸", country: "United States", type: "Midterm Elections",    date: "Nov 2026", status: "upcoming" },
  { flag: "🇫🇷", country: "France",        type: "Presidential Election", date: "Apr 2027", status: "upcoming" },
  { flag: "🇧🇷", country: "Brazil",        type: "General Election",      date: "Oct 2026", status: "upcoming" },
  { flag: "🇮🇳", country: "India",         type: "General Election",      date: "2029",     status: "future"   },
  { flag: "🇬🇧", country: "United Kingdom",type: "General Election",      date: "Jul 2024", status: "completed"},
  { flag: "🇩🇪", country: "Germany",       type: "Federal Election",      date: "Feb 2025", status: "completed"}
];

const getStatusColor = (status) => {
  switch(status) {
    case 'upcoming': return 'bg-[#FAEEDA] text-[#633806]';
    case 'future': return 'bg-[#E6F1FB] text-[#0C447C]';
    case 'completed': return 'bg-[#F1EFE8] text-[#444441]';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function WorldElectionsPreview() {
  return (
    <section className="bg-background-light py-[80px]">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-[40px] text-primary"
          >
            Elections Happening Around the World
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/calendar" className="text-accent-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View full calendar <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 gap-6 snap-x hide-scrollbar">
          {elections.map((election, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] snap-center bg-white rounded-2xl shadow-sm border border-border-light p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl">{election.flag}</span>
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${getStatusColor(election.status)}`}>
                  {election.status}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-1">
                {election.country}
              </h3>
              <p className="text-text-secondary font-medium mb-4">
                {election.type}
              </p>
              <div className="flex items-center text-primary font-bold">
                📅 {election.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
