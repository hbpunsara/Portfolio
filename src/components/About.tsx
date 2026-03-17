import { motion } from 'framer-motion';
import { Shield, Brain, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Brain, title: "Problem Solver", desc: "Turning complex requirements into elegant solutions." },
    { icon: Zap, title: "Performance First", desc: "Building fast, scalable, and responsive applications." },
    { icon: Shield, title: "Secure Coding", desc: "Following best practices for data protection." }
  ];

  return (
    <div className="py-20 lg:py-32 relative">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <span className="text-neon-blue font-mono font-normal">01.</span> About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent rounded-full"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-neon-green/20 blur-3xl rounded-full scale-90 group-hover:bg-neon-blue/20 transition-colors duration-700"></div>
          <div className="relative glass-panel p-2 z-10 aspect-square overflow-hidden border border-neon-green/30 group-hover:border-neon-blue/30 transition-colors duration-500">
            {/* Placeholder for Profile Img - since no path, just cool gradient placeholder */}
            <div className="w-full h-full bg-navy-800 rounded-xl flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
            </div>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-green rounded-tl-xl m-4 group-hover:border-neon-blue transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-green rounded-br-xl m-4 group-hover:border-neon-blue transition-colors"></div>
          </div>
        </motion.div>
        
        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p className="font-mono text-neon-green mb-4">Hello, World! I am Bathiya Punsara.</p>
            <p className="mb-6">
              I am a passionate <strong className="text-white">Software Developer</strong> focused on building robust internal systems, dashboards, and mobile applications. 
              My expertise lies in blending seamless user experiences with solid backend architectures.
            </p>
            <p className="mb-8">
              Whether it's an ERP system, POS framework, or an Air Quality dashboard, I approach each project with a focus on clean code, scalability, and performance. 
              Currently exploring modern web and mobile technologies to create the next generation of reliable software.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 flex flex-col items-center text-center gap-3 border-neon-blue/10 hover:border-neon-blue/50"
                >
                  <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
