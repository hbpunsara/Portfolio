import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="py-20 lg:py-32">
      <div className="flex flex-col gap-4 mb-16 items-end text-right">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-end gap-4">
          Initiate Contact <span className="text-neon-blue font-mono font-normal">.06</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-l from-neon-blue to-transparent rounded-full border border-neon-blue/20"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Let's build something <span className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">amazing</span> together.</h3>
          <p className="text-slate-400 mb-10 text-lg">
            I'm currently available for freelance projects and full-time opportunities. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-xl glass-panel text-neon-green group-hover:bg-neon-green/10 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">EMAIL</p>
                <p className="text-slate-300 font-medium group-hover:text-white transition-colors">hello@bathiyapunsara.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-xl glass-panel text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">PHONE</p>
                <p className="text-slate-300 font-medium group-hover:text-white transition-colors">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-xl glass-panel text-white group-hover:bg-white/10 transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">LOCATION</p>
                <p className="text-slate-300 font-medium group-hover:text-white transition-colors">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Github, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 border border-white/10 relative overflow-hidden group">
            {/* Background static glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-slate-400 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 outline-none focus:border-neon-blue/50 focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-slate-400 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 outline-none focus:border-neon-green/50 focus:shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-slate-400 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200 outline-none focus:border-white/50 focus:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="mt-4 w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300
                  bg-gradient-to-r from-neon-blue/20 to-neon-green/20 hover:from-neon-blue/30 hover:to-neon-green/30
                  border border-white/10 hover:border-white/30 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
                {formStatus === 'sending' && <><span className="animate-pulse">Transmitting...</span></>}
                {formStatus === 'sent' && <span className="text-neon-green drop-shadow-[0_0_5px_currentColor]">Transmission Successful</span>}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
