import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "neon-blue",
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "JavaScript / TypeScript", level: 85 }
      ]
    },
    {
      title: "Backend",
      color: "neon-green",
      skills: [
        { name: "Laravel (PHP)", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "Python", level: 70 }
      ]
    },
    {
      title: "Database & Tools",
      color: "white",
      skills: [
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Git & GitHub", level: 85 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="flex flex-col gap-4 mb-16 items-end text-right">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-end gap-4">
          Skills Stack <span className="text-neon-green font-mono font-normal">.02</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-l from-neon-green to-transparent rounded-full relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-green rounded-full shadow-[0_0_10px_#00ff88]"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.2 }}
            className={`glass-panel p-8 border-t-4 ${
              category.color === 'white' ? 'border-white/50' : 
              category.color === 'neon-blue' ? 'border-neon-blue' : 
              'border-neon-green'
            } hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300`}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              category.color === 'white' ? 'text-white' : 
              category.color === 'neon-blue' ? 'text-neon-blue' : 
              'text-neon-green'
            }`}>
              {category.title}
            </h3>
            
            <div className="flex flex-col gap-6">
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (idx * 0.1), ease: "easeOut" }}
                      className={`h-full rounded-full relative
                        ${category.color === 'white' ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 
                        category.color === 'neon-blue' ? 'bg-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 
                        'bg-neon-green shadow-[0_0_10px_rgba(0,255,136,0.8)]'}`}
                    >
                      {/* Glow effect inner element */}
                      <div className="absolute top-0 right-0 w-4 h-full bg-white/50 blur-[2px]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
