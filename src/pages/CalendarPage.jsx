import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Search, Filter } from 'lucide-react';

const mockElections = [
  { id: 1, country: "United States", type: "Midterm Elections", date: "Nov 3, 2026", status: "upcoming", region: "Americas" },
  { id: 2, country: "France", type: "Presidential Election", date: "Apr 11, 2027", status: "upcoming", region: "Europe" },
  { id: 3, country: "Brazil", type: "General Election", date: "Oct 4, 2026", status: "upcoming", region: "Americas" },
  { id: 4, country: "India", type: "State Assembly", date: "Dec 2025", status: "upcoming", region: "Asia" },
  { id: 5, country: "United Kingdom", type: "General Election", date: "Jul 4, 2024", status: "completed", region: "Europe" },
  { id: 6, country: "South Africa", type: "Municipal Elections", date: "2026", status: "future", region: "Africa" },
  { id: 7, country: "Germany", type: "Federal Election", date: "Sep 28, 2025", status: "upcoming", region: "Europe" },
  { id: 8, country: "Australia", type: "Federal Election", date: "2025", status: "upcoming", region: "Oceania" }
];

export default function CalendarPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredElections = mockElections.filter(election => {
    const matchesFilter = filter === 'all' || election.status === filter;
    const matchesSearch = election.country.toLowerCase().includes(search.toLowerCase()) || 
                          election.type.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="font-display font-bold text-[48px] text-primary mb-6 flex items-center justify-center gap-4">
            <CalendarIcon size={40} className="text-secondary" /> Election Calendar
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Track upcoming, future, and recently completed democratic elections around the world.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50" size={20} />
              <input 
                type="text" 
                placeholder="Search country or election type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-border-light rounded-full py-3 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            
            <div className="relative min-w-[160px]">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50" size={20} />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-white border border-border-light rounded-full py-3 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 appearance-none cursor-pointer text-primary font-medium"
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="future">Future</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredElections.map((election, idx) => (
            <motion.div
              key={election.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border-light hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Status Indicator Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${
                election.status === 'upcoming' ? 'bg-secondary' : 
                election.status === 'completed' ? 'bg-gray-400' : 'bg-accent-blue'
              }`}></div>

              <div className="flex justify-between items-start mb-4 mt-2">
                <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${
                  election.status === 'upcoming' ? 'bg-secondary/10 text-secondary' : 
                  election.status === 'completed' ? 'bg-gray-100 text-gray-600' : 'bg-accent-blue/10 text-accent-blue'
                }`}>
                  {election.status}
                </span>
                <span className="text-text-secondary text-sm flex items-center gap-1">
                  <MapPin size={14} /> {election.region}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-primary mb-1 group-hover:text-secondary transition-colors">
                {election.country}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {election.type}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-bold bg-primary/5 p-3 rounded-lg border border-primary/10">
                <CalendarIcon size={18} className="text-primary/60" />
                {election.date}
              </div>
            </motion.div>
          ))}
          
          {filteredElections.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-text-secondary text-lg">No elections found matching your criteria.</p>
              <button 
                onClick={() => {setSearch(''); setFilter('all');}}
                className="mt-4 text-secondary font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
