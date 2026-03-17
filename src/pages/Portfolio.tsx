import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Dashboard from '../components/Dashboard';
import Terminal from '../components/Terminal';
import Contact from '../components/Contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'dashboard', 'terminal', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy-900 text-slate-200">
      {/* Background Animated Gradient / Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-green/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        
        <main className="container mx-auto px-6 pt-24 pb-12 flex flex-col gap-32">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="dashboard"><Dashboard /></section>
          <section id="terminal"><Terminal /></section>
          <section id="contact"><Contact /></section>
        </main>

        <footer className="text-center py-6 text-slate-400 text-sm border-t border-white/10 mt-12">
          <p>© {new Date().getFullYear()} Bathiya Punsara. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
