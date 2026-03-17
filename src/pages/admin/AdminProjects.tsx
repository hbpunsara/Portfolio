import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';

export default function AdminProjects() {
  const projects = [
    { id: 1, name: "POS System", status: "Active", tech: "React, Node.js", views: "1.2k" },
    { id: 2, name: "ERP System", status: "Active", tech: "Vue, Python", views: "856" },
    { id: 3, name: "Air Quality Dashboard", status: "Draft", tech: "Next.js", views: "-" },
    { id: 4, name: "Spare Parts App", status: "Active", tech: "Flutter", views: "3.4k" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center bg-navy-800/50 p-6 rounded-2xl border border-white/5 shadow-glass">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Project Management</h2>
          <p className="text-slate-400 text-sm">Create, edit, and organize your portfolio items.</p>
        </div>
        <button 
          onClick={() => alert("Open New Project creation modal")}
          className="flex items-center gap-2 px-4 py-2 bg-neon-blue text-navy-900 font-medium rounded-lg hover:bg-[#00d0ff] transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
        >
          <Plus size={18} />
          <span>New Project</span>
        </button>
      </div>

      <div className="bg-navy-800/30 rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 text-slate-400 text-xs uppercase tracking-wider font-mono">
              <th className="p-4 border-b border-white/5 font-medium">Project Name</th>
              <th className="p-4 border-b border-white/5 font-medium">Status</th>
              <th className="p-4 border-b border-white/5 font-medium">Tech Stack</th>
              <th className="p-4 border-b border-white/5 font-medium">Views</th>
              <th className="p-4 border-b border-white/5 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {projects.map((project, idx) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={project.id} 
                className="border-b border-white/5 hover:bg-white/5 transition-colors group"
              >
                <td className="p-4 text-white font-medium flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-navy-900 border border-white/10 flex items-center justify-center">
                    <span className="text-neon-blue font-mono text-xs">{project.id}</span>
                  </div>
                  {project.name}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'Active' 
                      ? 'bg-neon-green/10 text-neon-green border-neon-green/20' 
                      : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4 text-slate-400">{project.tech}</td>
                <td className="p-4 text-slate-400 font-mono">{project.views}</td>
                <td className="p-4 flex gap-2 justify-end opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => alert(`View ${project.name} live in new tab`)} className="p-2 hover:bg-neon-blue/10 hover:text-neon-blue rounded transition-colors" title="View Live">
                    <ExternalLink size={16} />
                  </button>
                  <button onClick={() => alert(`Edit ${project.name} configuration modal`)} className="p-2 hover:bg-white/10 text-slate-300 rounded transition-colors" title="Edit">
                    <Edit2 size={16} />
                  </button>
                  <button onClick={() => { if(window.confirm(`Are you sure you want to delete ${project.name}?`)) alert('Deleted'); }} className="p-2 hover:bg-red-500/10 hover:text-red-400 rounded transition-colors" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
