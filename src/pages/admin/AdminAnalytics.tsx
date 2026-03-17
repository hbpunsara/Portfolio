import { Activity, BarChart2, Users } from 'lucide-react';

export default function AdminAnalytics() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center bg-navy-800/50 p-6 rounded-2xl border border-white/5 shadow-glass">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Deep Analytics</h2>
          <p className="text-slate-400 text-sm">Detailed traffic and engagement metrics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-navy-800/30 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue border border-neon-blue/20">
            <Users size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-mono text-white mb-2">Coming Soon</h3>
            <p className="text-slate-400 text-sm">Audience demographics engine offline.</p>
          </div>
        </div>

        <div className="p-8 bg-navy-800/30 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green border border-neon-green/20">
            <Activity size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-mono text-white mb-2">Coming Soon</h3>
            <p className="text-slate-400 text-sm">Real-time engagement tracking module offline.</p>
          </div>
        </div>

        <div className="p-8 bg-navy-800/30 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
            <BarChart2 size={32} />
          </div>
          <div>
            <h3 className="text-3xl font-mono text-white mb-2">Coming Soon</h3>
            <p className="text-slate-400 text-sm">Custom report generation offline.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
