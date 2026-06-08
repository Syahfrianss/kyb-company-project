'use client';

import { motion } from 'framer-motion';
import { fadeInDown, heroTextReveal, fadeInUp, fadeInRight } from '@/lib/motion-utils';

const LayananHeader = () => {
  return (
    <header className="relative py-24 md:py-32 px-8 overflow-hidden">
      <motion.div 
        className="max-w-screen-2xl mx-auto flex flex-col items-start relative z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={fadeInDown} className="label-md font-label uppercase tracking-[0.2em] text-primary font-bold mb-4">Ecosystem Architecture</motion.span>
        <motion.h1 variants={heroTextReveal} className="font-headline text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter max-w-4xl mb-8">
          Layanan Kami
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          <motion.p variants={fadeInUp} className="md:col-span-6 text-xl text-on-surface-variant font-light leading-relaxed">
            Kami mengintegrasikan presisi teknik sipil dengan visi arsitektural yang progresif. Setiap milimeter adalah komitmen kami terhadap integritas struktural dan estetika fungsional.
          </motion.p>
          <div className="md:col-span-6 flex justify-end items-end">
            <motion.div variants={fadeInRight} className="flex gap-4">
              <div className="w-16 h-[2px] bg-primary mt-4"></div>
              <span className="font-headline font-medium text-primary uppercase text-xs tracking-widest">Precision Standard ISO 9001:2015</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default LayananHeader;
