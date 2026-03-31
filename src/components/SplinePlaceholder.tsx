import React from 'react';

interface SplinePlaceholderProps {
  className?: string;
  label?: string;
}

export const SplinePlaceholder: React.FC<SplinePlaceholderProps> = ({ className = '', label = 'Spline 3D Asset' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-inner ${className}`}>
      {/* Subtle watercolor-like background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200 blur-[100px]" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400">
        <div className="w-16 h-16 border-2 border-dashed border-slate-300 rounded-full animate-spin-slow flex items-center justify-center">
          <div className="w-8 h-8 bg-slate-200 rounded-lg rotate-45" />
        </div>
        <span className="font-mono text-xs tracking-widest uppercase opacity-60">{label}</span>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </div>
  );
};
