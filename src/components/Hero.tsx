import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdfcf9]">
      
      {/* Cinematic Background: Spline 3D Model (White Background version) */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-40 scale-105 pointer-events-none"
          style={{
            maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
          }}
        >
          <Suspense fallback={<div className="w-full h-full bg-[#fdfcf9] animate-pulse" />}>
            <Spline 
              scene="https://prod.spline.design/EqT5bf6uWcGwN92H/scene.splinecode" 
              className="w-full h-full object-cover"
            />
          </Suspense>
        </div>
        
        {/* Soft White Vignette Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf9]/80 via-transparent to-[#fdfcf9] pointer-events-none" />
      </div>
      
      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl w-full px-8 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-slate-900/10" />
            <span className="text-slate-400 text-[10px] font-bold tracking-[0.4em] uppercase">
              The AI Future is Here
            </span>
            <span className="w-12 h-px bg-slate-900/10" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-slate-900 leading-[0.85]">
            Fedvell <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400">
              Ecosystem
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="space-y-10"
        >
          <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            Unleash the potential of a high-performance platform. 
            Experience the fusion of advanced tech and cinematic watercolor art.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
              Launch Console
            </button>
            <button className="w-full sm:w-auto px-8 py-5 text-slate-500 font-medium hover:text-slate-900 transition-colors flex items-center justify-center gap-2 group text-sm uppercase tracking-wider">
              Explore Docs
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements (Watercolor Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[15%] w-64 h-64 bg-purple-100/40 rounded-full blur-[120px]" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-4 text-slate-300"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] font-bold">Scroll to Initiate</span>
        <ArrowDown size={16} strokeWidth={3} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
