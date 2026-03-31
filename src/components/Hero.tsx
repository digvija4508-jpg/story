import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Split Background Content */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full bg-white" />
        <div className="w-full lg:w-1/2 h-full bg-slate-950 transition-all duration-1000" />
      </div>

      {/* Decorative Gradient Overlay (Center Split) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-40 pointer-events-none hidden lg:block" />
      
      <div className="relative z-10 max-w-7xl w-full px-8 md:px-16 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-10 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-slate-400" />
                <span className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                  Established 2026
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.85]">
                Fedvell <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400">
                  Ecosystem
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <p className="max-w-md text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                Elevate your vision with a high-performance platform. 
                Integrating cinematic 3D experiences with advanced watercolor aesthetics.
              </p>
              
              <div className="flex items-center gap-6">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                  Get Started
                </button>
                <button className="px-6 py-4 text-slate-600 font-medium hover:text-slate-900 transition-colors group">
                  View Demo 
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Model with Seamless Integration */}
          <div className="relative aspect-square w-full order-1 lg:order-2 h-[500px] lg:h-[700px] flex items-center justify-center">
            
            {/* Ambient Pulse Effect */}
            <div className="absolute inset-0 bg-slate-200/5 blur-[120px] rounded-full scale-75 animate-pulse-slow pointer-events-none" />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="w-full h-full relative"
              style={{
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
              }}
            >
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-slate-200/20 border-t-white rounded-full animate-spin" />
                </div>
              }>
                <Spline 
                  scene="https://prod.spline.design/EqT5bf6uWcGwN92H/scene.splinecode" 
                  className="w-full h-full"
                />
              </Suspense>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-8 lg:left-16 flex items-center gap-4 text-slate-400 group cursor-default"
      >
        <ArrowDown size={18} strokeWidth={2} className="animate-bounce" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-slate-900 transition-colors">Scroll to explore</span>
      </motion.div>
    </section>
  );
};
