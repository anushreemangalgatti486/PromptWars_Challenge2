import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Scale, Beaker, Zap, FileText } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Election Timeline",
    desc: "From candidacy to inauguration — every phase explained",
    path: "/learn?tab=timeline",
    accentColor: "group-hover:text-[#2A5FA8]",
    glow: "hover:shadow-[0_0_30px_rgba(42,95,168,0.2)]"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "How Voting Works",
    desc: "Step-by-step guide to casting your ballot",
    path: "/learn?tab=steps",
    accentColor: "group-hover:text-[#1D9E75]",
    glow: "hover:shadow-[0_0_30px_rgba(29,158,117,0.2)]"
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Election Systems",
    desc: "Compare FPTP, PR, Ranked Choice and more",
    path: "/learn?tab=systems",
    accentColor: "group-hover:text-[#F5A623]",
    glow: "hover:shadow-[0_0_30px_rgba(245,166,35,0.2)]"
  },
  {
    icon: <Beaker className="w-8 h-8" />,
    title: "Vote Simulator",
    desc: "See how the same votes produce different winners",
    path: "/learn?tab=simulator",
    accentColor: "group-hover:text-[#C0392B]",
    glow: "hover:shadow-[0_0_30px_rgba(192,57,43,0.2)]"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Myth vs Fact",
    desc: "Bust common election misconceptions",
    path: "/learn?tab=myths",
    accentColor: "group-hover:text-[#8B5CF6]",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Am I Eligible?",
    desc: "Find out if and how you can vote",
    path: "/learn?tab=eligibility",
    accentColor: "group-hover:text-[#1D9E75]",
    glow: "hover:shadow-[0_0_30px_rgba(29,158,117,0.2)]"
  }
];

export default function QuickStart() {
  return (
    <section className="bg-background-light py-[80px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-[40px] text-primary"
          >
            What do you want to learn?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={feature.path}
                className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-border-light transition-all duration-300 hover:-translate-y-2 ${feature.glow}`}
              >
                <div className={`mb-6 p-4 rounded-full bg-background-light text-text-secondary transition-colors duration-300 ${feature.accentColor}`}>
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-[22px] text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
