import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Initializing... Welcome to my digital space.";
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-[90vh] flex flex-col justify-center relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-2 text-neon-green font-mono mb-6 bg-neon-green/10 w-fit px-4 py-1.5 rounded-full border border-neon-green/20">
          <Terminal size={16} />
          <span className="text-sm">STATUS: ONLINE</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
            Bathiya Punsara
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          <span className="text-neon-blue">Software Developer</span>
        </h2>
        
        <div className="font-mono text-lg md:text-xl text-slate-400 mb-12 h-8 flex items-center">
          <span className="text-neon-green mr-2">&gt;</span>
          {text}
          <span className="typing-cursor ml-1"></span>
        </div>
        
        <div className="flex flex-wrap gap-6">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-neon-blue/10 text-neon-blue font-semibold rounded-lg overflow-hidden border border-neon-blue/50 hover:bg-neon-blue/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <div className="flex items-center gap-2 relative z-10">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/10 to-neon-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
          >
            Contact Me
          </button>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent"
        />
      </motion.div>
    </div>
  );
}
