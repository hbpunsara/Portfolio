import { useState } from 'react';
import { Save, User, Shield, Bell } from 'lucide-react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('Profile');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${activeTab} settings saved successfully!`);
  };

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Security', icon: Shield },
    { name: 'Notifications', icon: Bell },
  ];

  return (
    <div className="flex justify-center items-start">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <div className="bg-navy-800/50 p-6 rounded-2xl border border-white/5 shadow-glass">
          <h2 className="text-2xl font-bold text-white mb-1">System Settings</h2>
          <p className="text-slate-400 text-sm">Configure your portfolio details and preferences.</p>
        </div>

        <div className="bg-navy-800/30 rounded-2xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4">
            
            <div className="border-r border-white/5 p-6 flex flex-col gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.name;
                return (
                  <button 
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium w-full text-left transition-colors
                      ${isActive ? 'bg-neon-blue/10 text-neon-blue' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    <Icon size={16} /> {tab.name}
                  </button>
                );
              })}
            </div>

            <div className="md:col-span-3 p-8">
              <h3 className="text-lg font-medium text-white mb-6 border-b border-white/10 pb-4">{activeTab} Information</h3>
              
              <form onSubmit={handleSave} className="flex flex-col gap-6">
                
                {activeTab === 'Profile' && (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                        <input type="text" defaultValue="Bathiya" className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-neon-blue focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                        <input type="text" defaultValue="Punsara" className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-neon-blue focus:outline-none transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Role Title</label>
                      <input type="text" defaultValue="Software Developer" className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-neon-blue focus:outline-none transition-colors" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                      <input type="email" defaultValue="admin@neonforge.com" className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-slate-400" disabled />
                      <p className="text-xs text-slate-500 mt-1">Primary email cannot be changed from system preferences.</p>
                    </div>
                  </>
                )}

                {activeTab === 'Security' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-neon-blue focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">New Password</label>
                      <input type="password" placeholder="Enter new password" className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-neon-blue focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
                      <input type="password" placeholder="Confirm new password" className="w-full bg-navy-900 border border-white/10 rounded-lg py-2 px-3 text-white focus:border-neon-blue focus:outline-none transition-colors" />
                    </div>
                  </>
                )}

                {activeTab === 'Notifications' && (
                  <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-3 text-slate-300 text-sm cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded appearance-none checked:bg-neon-blue border border-white/20 checked:border-neon-blue" />
                      Email me when someone submits a contact form
                    </label>
                    <label className="flex items-center gap-3 text-slate-300 text-sm cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded appearance-none checked:bg-neon-blue border border-white/20 checked:border-neon-blue" />
                      Notify me of monthly site analytics reports
                    </label>
                    <label className="flex items-center gap-3 text-slate-300 text-sm cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded appearance-none checked:bg-neon-blue border border-white/20 checked:border-neon-blue" />
                      Join system update newsletter
                    </label>
                  </div>
                )}

                <div className="pt-4 flex justify-end">
                  <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-neon-blue text-navy-900 font-medium rounded-lg hover:bg-[#00d0ff] transition-all">
                    <Save size={16} />
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
