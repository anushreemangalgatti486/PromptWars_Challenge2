import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, BookOpen, Flame, Map, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProgressPage() {
  // Mock user data
  const userData = {
    name: "Future Voter",
    joinDate: "May 2026",
    level: 4,
    xp: 2450,
    nextLevelXp: 3000,
    streak: 3,
    completedModules: 12,
    totalModules: 20
  };

  const achievements = [
    { id: 1, title: "First Steps", desc: "Completed the timeline module", icon: <Map className="text-blue-500" />, unlocked: true },
    { id: 2, title: "Quiz Master", desc: "Scored 100% on a civic quiz", icon: <Award className="text-yellow-500" />, unlocked: true },
    { id: 3, title: "Global Citizen", desc: "Explored 5 different country systems", icon: <Target className="text-purple-500" />, unlocked: false },
    { id: 4, title: "Scholar", desc: "Read 20 glossary terms", icon: <BookOpen className="text-green-500" />, unlocked: false }
  ];

  const recentActivity = [
    { id: 1, action: "Completed Quiz: Electoral Systems", date: "Today, 10:30 AM", points: "+50 XP" },
    { id: 2, action: "Read: Ranked Choice Voting", date: "Yesterday", points: "+20 XP" },
    { id: 3, action: "Checked Eligibility", date: "May 1", points: "+10 XP" }
  ];

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display font-bold text-[48px] text-primary mb-2">
            Your Dashboard
          </h1>
          <p className="text-text-secondary text-lg">
            Track your civic learning journey and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Profile Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Level & XP Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px]"></div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between relative z-10 gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border-4 border-secondary/30 relative">
                    <span className="text-3xl font-display font-bold">{userData.level}</span>
                    <div className="absolute -bottom-2 -right-2 bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      Lvl
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-1">{userData.name}</h2>
                    <p className="text-white/60 flex items-center gap-2">
                      <Flame size={16} className="text-secondary" /> {userData.streak} Day Streak
                    </p>
                  </div>
                </div>
                
                <div className="w-full sm:w-auto min-w-[200px] text-center sm:text-right">
                  <div className="flex justify-between text-sm mb-2 font-bold">
                    <span>{userData.xp} XP</span>
                    <span className="text-white/50">{userData.nextLevelXp} XP</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary rounded-full relative"
                      style={{ width: `${(userData.xp / userData.nextLevelXp) * 100}%` }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 mt-2">
                    {userData.nextLevelXp - userData.xp} XP to Level {userData.level + 1}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Course Progress */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border-light"
            >
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Learning Path</h3>
                  <p className="text-text-secondary">Your progress through the core modules</p>
                </div>
                <span className="font-bold text-primary bg-primary/5 px-4 py-2 rounded-lg">
                  {Math.round((userData.completedModules / userData.totalModules) * 100)}% Complete
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Democracy Basics", status: "completed" },
                  { title: "Electoral Systems", status: "completed" },
                  { title: "Global Elections Map", status: "in-progress" },
                  { title: "Voter Rights & History", status: "locked" }
                ].map((course, idx) => (
                  <div key={idx} className="flex items-center p-4 rounded-xl border border-border-light hover:border-secondary transition-colors group">
                    <div className="mr-4">
                      {course.status === 'completed' ? (
                        <CheckCircle2 className="text-green-500" size={24} />
                      ) : course.status === 'in-progress' ? (
                        <div className="w-6 h-6 rounded-full border-2 border-secondary border-t-transparent animate-spin"></div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className={`font-bold ${course.status === 'locked' ? 'text-text-secondary' : 'text-primary'}`}>
                        {course.title}
                      </h4>
                    </div>
                    <div>
                      <Link to="/learn" className={`text-sm font-bold ${course.status === 'locked' ? 'text-gray-300 pointer-events-none' : 'text-secondary hover:underline'}`}>
                        {course.status === 'completed' ? 'Review' : course.status === 'in-progress' ? 'Continue' : 'Locked'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            {/* Achievements */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border-light"
            >
              <h3 className="text-xl font-bold text-primary mb-6">Badges & Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`flex flex-col items-center text-center p-4 rounded-xl border ${
                      badge.unlocked ? 'bg-primary/5 border-primary/10' : 'bg-gray-50 border-gray-100 grayscale opacity-60'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                      badge.unlocked ? 'bg-white shadow-sm' : 'bg-gray-200'
                    }`}>
                      {badge.icon}
                    </div>
                    <h4 className="font-bold text-primary text-sm leading-tight mb-1">{badge.title}</h4>
                    <p className="text-[10px] text-text-secondary leading-tight">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activity Feed */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border-light"
            >
              <h3 className="text-xl font-bold text-primary mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-4 relative">
                    {/* Timeline line */}
                    <div className="absolute left-[5px] top-6 bottom-[-24px] w-[2px] bg-border-light last:hidden"></div>
                    
                    <div className="w-3 h-3 rounded-full bg-secondary mt-1.5 relative z-10 border-2 border-white box-content"></div>
                    
                    <div className="flex-grow">
                      <p className="font-bold text-primary text-sm">{activity.action}</p>
                      <p className="text-xs text-text-secondary">{activity.date}</p>
                    </div>
                    
                    <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded h-fit">
                      {activity.points}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
