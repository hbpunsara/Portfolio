import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Clock, MessageSquare, TrendingUp, Activity, Plus } from 'lucide-react';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('Last 7 Days');
  
  const quickStats = [
    { label: "Total Views", value: "14,592", change: "+12.5%", icon: Eye, color: "neon-blue" },
    { label: "Avg Session", value: "2m 45s", change: "+4.1%", icon: Clock, color: "neon-green" },
    { label: "New Messages", value: "24", change: "+8.2%", icon: MessageSquare, color: "white" },
    { label: "Engagement", value: "68%", change: "+2.4%", icon: TrendingUp, color: "neon-blue" },
  ];

  const recentActivity = [
    { type: 'message', text: 'New contact message from Sarah J.', time: '10 mins ago' },
    { type: 'view', text: 'Portfolio viewed from San Francisco, CA', time: '1 hour ago' },
    { type: 'project', text: 'ERP System demo link clicked', time: '3 hours ago' },
    { type: 'system', text: 'Automated database backup completed', time: '5 hours ago' },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header Area */}
      <div className="flex justify-between items-center bg-navy-800/50 p-6 rounded-2xl border border-white/5 shadow-glass">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Welcome back, Admin</h2>
          <p className="text-slate-400 text-sm">Here's what's happening with your portfolio today.</p>
        </div>
        
        <Link to="/admin/projects" className="flex items-center gap-2 px-4 py-2 bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded-lg hover:bg-neon-blue/20 transition-all shadow-[0_0_10px_rgba(0,240,255,0.1)]">
          <Plus size={18} />
          <span>New Project</span>
        </Link>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-navy-800/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-xl ${
                  stat.color === 'white' 
                    ? 'bg-white/10 text-white border-white/20' 
                    : stat.color === 'neon-blue' 
                      ? 'bg-neon-blue/10 text-neon-blue border-neon-blue/20' 
                      : 'bg-neon-green/10 text-neon-green border-neon-green/20'
                  } border`}>
                  <Icon size={20} />
                </div>
                <div className="flex items-center gap-1 text-neon-green text-xs font-medium bg-neon-green/10 px-2 py-1 rounded-full border border-neon-green/20">
                  <TrendingUp size={12} />
                  {stat.change}
                </div>
              </div>
              
              <div>
                <h3 className={`text-3xl font-bold font-mono tracking-tight ${
                  stat.color === 'white' ? 'text-white' : stat.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-green'
                } drop-shadow-[0_0_8px_currentColor] mb-1`}>
                  {stat.value}
                </h3>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Complex Layout Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Fake Analytics Chart Area */}
        <div className="lg:col-span-2 p-6 bg-navy-800/30 rounded-2xl border border-white/5 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="text-neon-blue" size={20} />
              Traffic Overview
            </h3>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-navy-900 border border-white/10 text-slate-300 text-sm rounded-lg px-3 py-1 outline-none"
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex-1 min-h-[250px] border-b border-l border-white/10 flex items-end justify-between p-4 gap-2">
            {[30, 50, 40, 70, 60, 90, 80].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer h-full relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-navy-900 border border-white/10 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                  {height * 12} views
                </div>
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="w-full bg-gradient-to-t from-neon-blue/20 to-neon-blue/60 group-hover:from-neon-blue/40 group-hover:to-neon-blue rounded-t-sm transition-colors border-t border-neon-blue/50"
                ></motion.div>
                <div className="text-center text-xs text-slate-500 mt-2">Day {i+1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Log */}
        <div className="p-6 bg-navy-800/30 rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Clock className="text-neon-green" size={20} />
            Recent Activity
          </h3>
          
          <div className="flex flex-col gap-6">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'message' ? 'bg-white shadow-[0_0_8px_#fff]' : 
                    activity.type === 'view' ? 'bg-neon-blue shadow-[0_0_8px_rgba(0,240,255,1)]' : 
                    'bg-neon-green shadow-[0_0_8px_rgba(0,255,136,1)]'
                  }`}></div>
                </div>
                <div>
                  <p className="text-sm text-slate-300 leading-tight mb-1">{activity.text}</p>
                  <p className="text-xs text-slate-500 font-mono">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => alert("Complete Activity Log Modal to be implemented.")}
            className="w-full mt-8 py-2 text-sm text-slate-400 border border-white/5 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
          >
            View Complete Log
          </button>
        </div>
      </div>
    </div>
  );
}
