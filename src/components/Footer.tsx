import React from 'react';
import { SplinePlaceholder } from './SplinePlaceholder';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-[#fdfcf9]">
      {/* Background Spline Placeholder */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <SplinePlaceholder label="Footer 3D Scene" className="rounded-none border-none opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900">
            Ready to Build?
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Join the Fedvell ecosystem today and redefine your digital presence.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold tracking-wide shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-colors uppercase text-sm tracking-[0.2em]"
        >
          Get Started Now
        </motion.button>
      </div>

      {/* Footer Bottom Info */}
      <div className="absolute bottom-10 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] uppercase tracking-widest font-medium">
        <span>© 2026 Fedvell Platform</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
};
