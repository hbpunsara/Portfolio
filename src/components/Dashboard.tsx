import { motion } from 'framer-motion';
import { Activity, GitCommit, Users, Server, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [commits, setCommits] = useState(0);
  
  // Fake counter animation
  useEffect(() => {
    let current = 0;
    const target = 1432;
    const step = target / 50;
    
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCommits(target);
        clearInterval(interval);
      } else {
        setCommits(Math.floor(current));
      }
    }, 40);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Total Projects", value: "24+", icon: Server, color: "neon-blue" },
    { label: "Technologies", value: "15", icon: Database, color: "neon-green" },
    { label: "GitHub Commits", value: commits.toString(), icon: GitCommit, color: "white" },
    { label: "Happy Clients", value: "12", icon: Users, color: "neon-blue" }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="flex flex-col gap-4 mb-16 items-end text-right">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4 justify-end">
          System Overview <span className="text-neon-green font-mono font-normal">.04</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-l from-white to-transparent rounded-full relative"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-panel p-6 flex flex-col items-center justify-center text-center gap-4 group 
                hover:-translate-y-2 transition-transform duration-300
                border-white/5 ${
                  stat.color === 'white' ? 'hover:border-white/30' : 
                  stat.color === 'neon-blue' ? 'hover:border-neon-blue/30' : 
                  'hover:border-neon-green/30'
                } relative overflow-hidden`}
            >
              {/* Animated background pulse */}
              <div className={`absolute inset-0 ${
                stat.color === 'white' ? 'bg-white/5' : 
                stat.color === 'neon-blue' ? 'bg-neon-blue/5' : 
                'bg-neon-green/5'
              } scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out origin-center`}></div>
              
              <div className={`relative z-10 p-4 rounded-full bg-navy-800 ${
                stat.color === 'white' ? 'text-white' : 
                stat.color === 'neon-blue' ? 'text-neon-blue' : 
                'text-neon-green'
              } group-hover:shadow-[0_0_15px_currentColor] transition-shadow duration-300`}>
                <Icon size={24} />
              </div>
              
              <div className="relative z-10">
                <h4 className={`text-3xl font-bold mb-1 font-mono ${
                  stat.color === 'white' ? 'text-white' : 
                  stat.color === 'neon-blue' ? 'text-neon-blue' : 
                  'text-neon-green'
                } drop-shadow-[0_0_8px_currentColor]`}>
                  {stat.value}
                </h4>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      {/* Activity Graph Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 glass-panel p-8 border-white/5 relative"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="text-neon-green" /> System Activity
          </h3>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_#00ff88]"></div>
          </div>
        </div>
        
        {/* Fake Graph */}
        <div className="h-48 flex items-end justify-between gap-2 border-b border-l border-white/10 p-4">
          {[40, 60, 30, 80, 50, 90, 45, 75, 100, 60, 85, 40].map((height, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.05 }}
              className="w-full bg-gradient-to-t from-neon-blue/20 to-neon-blue/80 rounded-t-sm hover:from-neon-green/40 hover:to-neon-green transition-colors cursor-pointer relative group"
            >
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-navy-900 border border-white/10 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {height} pts
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
