import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "POS System",
      description: "A high-performance Point of Sale system with AI-driven product recommendations, offline support, and advanced memoized billing calculations.",
      techStack: ["React", "TypeScript", "Tailwind css", "Node.js"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "neon-blue"
    },
    {
      title: "ERP System",
      description: "Comprehensive Enterprise Resource Planning software handling inventory, seasonal forecasting, and personnel management.",
      techStack: ["Vue.js", "Laravel", "PostgreSQL", "Docker"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "neon-green"
    },
    {
      title: "Air Quality Dashboard",
      description: "Real-time IoT data visualization dashboard tracking air quality indices across multiple sensor nodes globally.",
      techStack: ["React", "D3.js", "Firebase", "Python"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "white"
    },
    {
      title: "Spare Parts App",
      description: "Mobile application for automobile spare parts cataloging with augmented reality part fitting preview.",
      techStack: ["Flutter", "Dart", "Firebase", "ARKit"],
      github: "https://github.com",
      demo: "https://example.com",
      color: "neon-blue"
    }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <span className="text-neon-blue font-mono font-normal">03.</span> Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent rounded-full relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_rgba(0,240,255,1)]"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative glass-panel p-8 flex flex-col justify-between h-full border ${
              project.color === 'neon-blue' ? 'border-neon-blue/20 hover:border-neon-blue/60' : 
              project.color === 'neon-green' ? 'border-neon-green/20 hover:border-neon-green/60' : 
              'border-white/20 hover:border-white/60'
            } transition-all duration-500 overflow-hidden`}
          >
            {/* Background Glow */}
            <div className={`absolute -bottom-20 -right-20 w-40 h-40 blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700
              ${project.color === 'neon-blue' ? 'bg-neon-blue' : 
              project.color === 'neon-green' ? 'bg-neon-green' : 
              'bg-white'}`}
            ></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-navy-800 border ${
                    project.color === 'neon-blue' ? 'text-neon-blue border-neon-blue/30' : 
                    project.color === 'neon-green' ? 'text-neon-green border-neon-green/30' : 
                    'text-white border-white/30'
                  }`}
                >
                  <Code2 size={24} />
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`text-slate-400 ${
                    project.color === 'white' ? 'hover:text-white' : 
                    project.color === 'neon-blue' ? 'hover:text-neon-blue' : 
                    'hover:text-neon-green'
                  } transition-colors duration-300`}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${
                project.color === 'white' ? 'group-hover:text-white' : 
                project.color === 'neon-blue' ? 'group-hover:text-neon-blue' : 
                'group-hover:text-neon-green'
              } transition-colors duration-300`}>
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
              {project.techStack.map((tech, tIdx) => (
                <span 
                  key={tIdx} 
                  className={`text-xs font-mono px-3 py-1 rounded-full border border-white/5 bg-navy-800 ${
                    project.color === 'neon-blue' ? 'text-neon-blue/80 group-hover:text-neon-blue group-hover:border-neon-blue/30' : 
                    project.color === 'neon-green' ? 'text-neon-green/80 group-hover:text-neon-green group-hover:border-neon-green/30' : 
                    'text-white/80 group-hover:text-white group-hover:border-white/30'
                  } transition-colors duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
