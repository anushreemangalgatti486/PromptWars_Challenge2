import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Users, Calendar, MapPin, X } from 'lucide-react';

const mockCountries = [
  {
    id: "US",
    name: "United States",
    region: "North America",
    system: "Presidential Republic / FPTP",
    nextElection: "November 2026 (Midterms)",
    voters: "161M+",
    turnout: "66.8% (2020)",
    description: "A federal republic where the President is elected indirectly through an Electoral College, while Congress uses First-Past-The-Post voting in single-member districts."
  },
  {
    id: "FR",
    name: "France",
    region: "Europe",
    system: "Semi-Presidential / Two-Round",
    nextElection: "April 2027 (Presidential)",
    voters: "48M+",
    turnout: "73.6% (2022)",
    description: "Features a two-round system for presidential elections, ensuring the winner secures an absolute majority of votes."
  },
  {
    id: "BR",
    name: "Brazil",
    region: "South America",
    system: "Presidential Republic / Electronic",
    nextElection: "October 2026 (General)",
    voters: "156M+",
    turnout: "79.0% (2022)",
    description: "Pioneers in electronic voting, allowing massive elections to be tallied within hours. Voting is compulsory for citizens aged 18 to 70."
  },
  {
    id: "IN",
    name: "India",
    region: "Asia",
    system: "Parliamentary / FPTP",
    nextElection: "2029 (General)",
    voters: "968M+",
    turnout: "66.3% (2024)",
    description: "The world's largest democracy. General elections span several weeks and utilize millions of electronic voting machines across diverse terrain."
  },
  {
    id: "ZA",
    name: "South Africa",
    region: "Africa",
    system: "Parliamentary / PR",
    nextElection: "2029 (General)",
    voters: "27M+",
    turnout: "58.6% (2024)",
    description: "Uses a closed-list proportional representation system, meaning citizens vote for a political party rather than individual candidates."
  }
];

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const filteredCountries = mockCountries.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 rounded-b-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="font-display font-bold text-[48px] text-primary mb-6">
            Country Explorer
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Explore democratic processes, electoral systems, and historical voter turnout data from nations around the globe.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50" size={20} />
            <input 
              type="text" 
              placeholder="Search by country or region..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-border-light rounded-full py-4 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-primary"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* List View */}
          <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredCountries.map((country, idx) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCountry(country)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedCountry?.id === country.id 
                    ? 'bg-primary text-white border-primary shadow-md' 
                    : 'bg-white border-border-light hover:border-secondary hover:shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{country.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCountry?.id === country.id ? 'bg-white/20 text-white' : 'bg-background-light text-text-secondary'
                  }`}>
                    {country.id}
                  </span>
                </div>
                <p className={`text-sm flex items-center gap-1 ${selectedCountry?.id === country.id ? 'text-white/80' : 'text-text-secondary'}`}>
                  <MapPin size={14} /> {country.region}
                </p>
              </motion.div>
            ))}
            
            {filteredCountries.length === 0 && (
              <div className="text-center p-8 bg-white rounded-2xl border border-border-light">
                <Globe size={32} className="mx-auto text-text-secondary/30 mb-2" />
                <p className="text-text-secondary">No countries found matching your search.</p>
              </div>
            )}
          </div>

          {/* Detail View */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <motion.div
                  key={selectedCountry.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl shadow-xl border border-border-light overflow-hidden"
                >
                  <div className="bg-primary p-8 text-white relative">
                    <button 
                      onClick={() => setSelectedCountry(null)}
                      className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                    <span className="inline-block px-3 py-1 bg-secondary text-primary font-bold text-xs rounded-full uppercase tracking-wider mb-4">
                      {selectedCountry.region}
                    </span>
                    <h2 className="text-4xl font-display font-bold mb-2">{selectedCountry.name}</h2>
                    <p className="text-white/80 text-lg flex items-center gap-2">
                      <Globe size={18} /> {selectedCountry.system}
                    </p>
                  </div>

                  <div className="p-8">
                    <p className="text-text-secondary text-lg leading-relaxed mb-8">
                      {selectedCountry.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-background-light p-6 rounded-2xl border border-border-light text-center">
                        <Calendar size={28} className="mx-auto text-accent-blue mb-3" />
                        <p className="text-sm text-text-secondary mb-1">Next Major Election</p>
                        <p className="font-bold text-primary">{selectedCountry.nextElection}</p>
                      </div>
                      
                      <div className="bg-background-light p-6 rounded-2xl border border-border-light text-center">
                        <Users size={28} className="mx-auto text-secondary mb-3" />
                        <p className="text-sm text-text-secondary mb-1">Eligible Voters</p>
                        <p className="font-bold text-primary">{selectedCountry.voters}</p>
                      </div>

                      <div className="bg-background-light p-6 rounded-2xl border border-border-light text-center">
                        <div className="w-7 h-7 mx-auto rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 font-bold text-[10px] mb-3">
                          %
                        </div>
                        <p className="text-sm text-text-secondary mb-1">Recent Turnout</p>
                        <p className="font-bold text-primary">{selectedCountry.turnout}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[400px] bg-white rounded-3xl shadow-sm border border-border-light border-dashed flex flex-col items-center justify-center text-center p-8"
                >
                  <Globe size={64} className="text-text-secondary/20 mb-4" />
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">Select a Country</h3>
                  <p className="text-text-secondary max-w-sm">
                    Choose a country from the list on the left to explore its specific democratic systems and election history.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
