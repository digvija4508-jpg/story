import React from 'react';
import { SplinePlaceholder } from './SplinePlaceholder';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Spline Placeholder */}
      <div className="absolute inset-0 -z-10">
        <SplinePlaceholder label="Hero 3D Scene" className="rounded-none border-none opacity-60" />
      </div>

      {/* Content */}
      <div className="max-w-5xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wider uppercase border border-slate-200">
            Introducing the Future
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.9]">
            Fedvell <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
              Ecosystem
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-light leading-relaxed"
        >
          A high-performance platform designed for the modern era. 
          Seamlessly integrating 3D experiences with high-tech watercolor aesthetics.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};
