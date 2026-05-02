import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';

const terms = [
  { term: "Absentee Ballot", definition: "A ballot completed and typically mailed in advance of an election by a voter who is unable to be present at the polls." },
  { term: "Ballot Initiative", definition: "A means by which a petition signed by a certain minimum number of registered voters can force a public vote on a proposed statute or constitutional amendment." },
  { term: "Caucus", definition: "A local meeting where registered members of a political party in a city, town or county gather to vote for their preferred party candidate and conduct other party business." },
  { term: "Constituency", definition: "A body of voters in a specified area who elect a representative to a legislative body." },
  { term: "Delegate", definition: "A person selected to represent a group of people in some political assembly of the United States." },
  { term: "Electoral College", definition: "A set of electors who are selected to elect a candidate to a particular office. Often represents different organizations or entities, with each organization or entity represented by a particular number of electors or with votes weighted in a particular way." },
  { term: "First-Past-The-Post", definition: "An electoral system in which voters cast their vote for a candidate of their choice, and the candidate who receives the most votes wins, even if they did not receive a majority of the votes." },
  { term: "Gerrymandering", definition: "The practice of drawing the boundaries of electoral districts in a way that gives one political party an unfair advantage over its rivals." },
  { term: "Incumbent", definition: "The current holder of a political office." },
  { term: "Proportional Representation", definition: "An electoral system in which parties gain seats in proportion to the number of votes cast for them." },
  { term: "Referendum", definition: "A general vote by the electorate on a single political question which has been referred to them for a direct decision." },
  { term: "Suffrage", definition: "The right to vote in political elections." }
];

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState('All');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredTerms = terms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(search.toLowerCase()) || 
                          item.definition.toLowerCase().includes(search.toLowerCase());
    const matchesLetter = activeLetter === 'All' || item.term.toUpperCase().startsWith(activeLetter);
    return matchesSearch && matchesLetter;
  }).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display font-bold text-[48px] text-primary mb-6 flex items-center justify-center gap-4">
            <BookOpen size={40} className="text-secondary" /> Glossary
          </h1>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Your comprehensive dictionary for understanding the language of democracy and electoral systems.
          </p>

          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/50" size={20} />
            <input 
              type="text" 
              placeholder="Search for a term or definition..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-border-light rounded-full py-4 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-primary"
            />
          </div>

          {/* Alphabet Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveLetter('All')}
              className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                activeLetter === 'All' ? 'bg-primary text-white shadow-md' : 'bg-white text-text-secondary border border-border-light hover:border-secondary'
              }`}
            >
              All
            </button>
            {alphabet.map(letter => {
              const hasTerms = terms.some(t => t.term.toUpperCase().startsWith(letter));
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && setActiveLetter(letter)}
                  disabled={!hasTerms}
                  className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                    activeLetter === letter 
                      ? 'bg-secondary text-primary shadow-md' 
                      : hasTerms 
                        ? 'bg-white text-primary border border-border-light hover:border-secondary cursor-pointer' 
                        : 'bg-gray-100 text-gray-400 border border-transparent cursor-not-allowed opacity-50'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dictionary List */}
        <div className="bg-white rounded-3xl shadow-sm border border-border-light overflow-hidden">
          {filteredTerms.length > 0 ? (
            <div className="divide-y divide-border-light">
              {filteredTerms.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6 md:p-8 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-4 md:gap-8"
                >
                  <div className="md:w-1/3">
                    <h3 className="font-display font-bold text-2xl text-primary">{item.term}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-text-secondary leading-relaxed">{item.definition}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen size={48} className="mx-auto text-text-secondary/20 mb-4" />
              <p className="text-text-secondary text-lg">No terms found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
