import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minus, X } from 'lucide-react';

export default function TerminalSection() {
  const [history, setHistory] = useState<{ command: string; output: string | React.ReactNode }[]>([
    {
      command: '',
      output: (
        <div className="text-neon-blue mb-4">
          <p>Welcome to NeonOS v1.0</p>
          <p>Type <span className="text-neon-green">'help'</span> to see available commands.</p>
        </div>
      )
    }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output: string | React.ReactNode = '';

      switch (cmd) {
        case 'help':
          output = (
            <div className="text-slate-300">
              <p>Available commands:</p>
              <ul className="list-disc list-inside ml-2">
                <li><span className="text-neon-green">about</span> - Display information about the developer</li>
                <li><span className="text-neon-green">projects</span> - List recent projects</li>
                <li><span className="text-neon-green">contact</span> - Show contact details</li>
                <li><span className="text-neon-green">clear</span> - Clear terminal window</li>
                <li><span className="text-neon-green">sudo</span> - Secret command</li>
              </ul>
            </div>
          );
          break;
        case 'about':
          output = "Bathiya Punsara | Software Developer specializing in React, Node, Laravel, and Flutter.";
          break;
        case 'projects':
          output = "1. POS System\n2. ERP System\n3. Air Quality Dashboard\n4. Spare Parts App";
          break;
        case 'contact':
          output = "Email: dev@example.com | GitHub: github.com/user | LinkedIn: linkedin.com/in/user";
          break;
        case 'clear':
          setHistory([{ command: '', output: '' }]);
          setInput('');
          return;
        case 'sudo':
          output = "Nice try. Access denied.";
          break;
        case '':
          output = "";
          break;
        default:
          output = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;
      }

      setHistory([...history, { command: cmd, output }]);
      setInput('');
    }
  };

  return (
    <div className="py-20 lg:py-32">
      <div className="flex flex-col gap-4 mb-16 lg:items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
          <span className="text-neon-blue font-mono font-normal">05.</span> System Terminal
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green rounded-full relative"></div>
      </div>

      <div className="max-w-4xl mx-auto glass-panel border-white/10 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Terminal Header */}
        <div className="bg-navy-900 border-b border-white/5 p-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 shadow-[0_0_5px_currentColor] transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 shadow-[0_0_5px_currentColor] transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 shadow-[0_0_5px_currentColor] transition-colors cursor-pointer"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
            <TerminalIcon size={14} />
            <span>guest@neonforge:~</span>
          </div>
          <div className="flex gap-3 text-slate-500">
            <Minus size={14} className="hover:text-white cursor-pointer" />
            <Maximize2 size={14} className="hover:text-white cursor-pointer" />
            <X size={14} className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-[#050B14] p-6 h-96 overflow-y-auto font-mono text-sm" onClick={() => document.getElementById('term-input')?.focus()}>
          {history.map((item, idx) => (
            <div key={idx} className="mb-4">
              {item.command && (
                <div className="flex items-center gap-2 text-slate-300 mb-1">
                  <span className="text-neon-green">guest@neonforge</span>
                  <span className="text-neon-blue">~/portfolio</span>
                  <span>$ {item.command}</span>
                </div>
              )}
              {item.output && (
                <div className="text-slate-400 whitespace-pre-wrap leading-relaxed">
                  {item.output}
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-neon-green">guest@neonforge</span>
            <span className="text-neon-blue">~/portfolio</span>
            <span>$</span>
            <input 
              id="term-input"
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-1 text-slate-300 caret-neon-green"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
