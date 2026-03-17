import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, Code2, Users, Settings } from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const sidebarLinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Projects', path: '/admin/projects', icon: Code2 },
    { name: 'Analytics', path: '/admin/analytics', icon: Users },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 glass-panel !rounded-none !border-y-0 !border-l-0 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="text-xl font-bold font-mono tracking-tighter flex items-center gap-2 whitespace-nowrap">
            <span className="text-neon-green">&gt;</span>
            <span>Neon<span className="text-white">Admin</span><span className="text-neon-blue animate-pulse">_</span></span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/admin'}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium
                ${isActive 
                  ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'}
              `}
            >
              <link.icon size={18} />
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => {
              localStorage.removeItem('isAdminAuth');
              navigate('/admin/login');
            }}
            className="flex items-center justify-start gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 w-full"
          >
            <LogOut size={18} />
            Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Header */}
        <header className="h-16 border-b border-white/10 glass-panel !rounded-none !border-y-0 !border-x-0 !border-b-white/10 flex items-center justify-between px-8 bg-transparent z-10">
          <h1 className="text-lg font-medium text-white">System Administration</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-green p-0.5">
              <div className="w-full h-full bg-navy-900 rounded-full flex items-center justify-center border border-navy-900">
                <span className="text-xs font-bold text-white">BP</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto p-8 relative z-10">
          <Outlet />
        </div>
        
        {/* Background glow for admin context */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-navy-900/5 to-navy-900/10"></div>
        </div>
      </main>
    </div>
  );
}
