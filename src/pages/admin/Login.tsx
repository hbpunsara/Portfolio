import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, ArrowRight } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardcoded demo credentials
    if (username === 'admin' && password === 'neonforge2026') {
      localStorage.setItem('isAdminAuth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid system credentials. Access denied.');
    }
  };

  return (
    <div className="min-h-screen bg-[#050B14] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <div className="text-3xl font-bold font-mono tracking-tighter flex items-center justify-center gap-2 mb-2">
            <span className="text-neon-green">&gt;</span>
            <span className="whitespace-nowrap">Neon<span className="text-white">Admin</span><span className="text-neon-blue animate-pulse">_</span></span>
          </div>
          <p className="text-slate-400">System authorization required</p>
        </div>

        <div className="glass-panel p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 font-mono">USERNAME</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-navy-900 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 font-mono">PASSWORD</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-navy-900 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm font-mono flex items-center gap-2 bg-red-500/10 p-3 rounded-lg border border-red-500/20"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_currentColor]"></div>
                {error}
              </motion.div>
            )}

            <button 
              type="submit"
              className="mt-2 group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-navy-900 bg-neon-blue hover:bg-[#00d0ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue focus:ring-offset-navy-900 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Initialize Session
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>

          <div className="mt-8 text-center border-t border-white/10 pt-6">
            <p className="text-xs text-slate-500 font-mono">
               System Login For Demo:<br/>
               User: <span className="text-neon-green">admin</span> | Pass: <span className="text-neon-blue">neonforge2026</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
