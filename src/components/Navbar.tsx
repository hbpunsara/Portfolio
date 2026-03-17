import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, User, Home, Mail, LayoutDashboard, Briefcase } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Dashboard', id: 'dashboard', icon: LayoutDashboard },
    { name: 'Terminal', id: 'terminal', icon: Terminal },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-panel rounded-none border-t-0 border-x-0 !border-b-white/10' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold font-mono tracking-tighter flex items-center gap-2 cursor-pointer whitespace-nowrap" onClick={() => scrollToSection('home')}>
          <span className="text-neon-green">&gt;</span>
          <span>Neon<span className="text-white">Forge</span><span className="text-neon-blue animate-pulse">_</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-neon-blue hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]
                ${activeSection === link.id ? 'text-neon-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'text-slate-300'}`}
              >
                <Icon size={16} />
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Mobile menu button could go here */}
        <div className="md:hidden flex items-center">
          <button className="text-neon-green hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
