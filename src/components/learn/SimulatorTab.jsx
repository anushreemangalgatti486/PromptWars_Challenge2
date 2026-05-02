import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function SimulatorTab() {
  const [votes, setVotes] = useState({
    PartyA: 40,
    PartyB: 35,
    PartyC: 25,
  });

  const [system, setSystem] = useState('FPTP');

  const totalVotes = votes.PartyA + votes.PartyB + votes.PartyC;

  const handleSlider = (party, value) => {
    setVotes(prev => ({ ...prev, [party]: parseInt(value) }));
  };

  const getSeats = () => {
    // Simulated simple translation for a 100-seat parliament
    if (system === 'FPTP') {
      const winner = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
      return [
        { name: 'Party A', seats: winner === 'PartyA' ? 60 : 20, color: '#0A1628' },
        { name: 'Party B', seats: winner === 'PartyB' ? 60 : 20, color: '#F5A623' },
        { name: 'Party C', seats: winner === 'PartyC' ? 60 : 0, color: '#1D9E75' }
      ];
    } else {
      // Proportional Representation
      return [
        { name: 'Party A', seats: Math.round((votes.PartyA / totalVotes) * 100) || 0, color: '#0A1628' },
        { name: 'Party B', seats: Math.round((votes.PartyB / totalVotes) * 100) || 0, color: '#F5A623' },
        { name: 'Party C', seats: Math.round((votes.PartyC / totalVotes) * 100) || 0, color: '#1D9E75' }
      ];
    }
  };

  const chartData = getSeats();

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Vote Simulator</h2>
        <p className="text-text-secondary">Adjust the vote share and see how different systems distribute seats.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-border-light">
          <div className="mb-8">
            <h3 className="font-bold text-primary mb-4">Electoral System</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => setSystem('FPTP')}
                className={`flex-1 py-2 rounded-lg font-bold transition-all ${system === 'FPTP' ? 'bg-primary text-white shadow-md' : 'bg-white text-primary border border-gray-200'}`}
              >
                FPTP
              </button>
              <button 
                onClick={() => setSystem('PR')}
                className={`flex-1 py-2 rounded-lg font-bold transition-all ${system === 'PR' ? 'bg-primary text-white shadow-md' : 'bg-white text-primary border border-gray-200'}`}
              >
                Proportional
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-primary mb-2">Vote Distribution</h3>
            {Object.keys(votes).map((party) => (
              <div key={party}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-primary">{party}</span>
                  <span className="text-text-secondary">{votes[party]}k votes</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={votes[party]}
                  onChange={(e) => handleSlider(party, e.target.value)}
                  className="w-full accent-secondary"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="h-[300px]">
          <h3 className="font-bold text-primary mb-6 text-center">Parliamentary Seats (100 total)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fill: '#444441' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#444441' }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Bar dataKey="seats" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
