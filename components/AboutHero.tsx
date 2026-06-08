'use client';

import { motion } from 'framer-motion';
import { fadeInDown, heroTextReveal, blurIn } from '@/lib/motion-utils';

const AboutHero = () => {
  return (
    <header className=" min-h-[460px] relative min-h-[614px] flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none"></div>
      
      <motion.div 
        className="relative z-10 text-center px-4"
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={fadeInDown} 
          className="inline-block px-3 py-1 mb-6 text-[0.6875rem] font-bold tracking-[0.2em] uppercase bg-primary-container/10 text-primary border border-primary/20 rounded-full"
        >
          Heritage &amp; Excellence
        </motion.span>
        
        <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-on-surface mb-6 flex flex-wrap justify-center overflow-hidden">
          <motion.span variants={heroTextReveal} className="mr-4">Tentang</motion.span>
          <motion.span variants={heroTextReveal} className="text-primary">Kami</motion.span>
        </h1>
        
        <motion.p 
          variants={blurIn} 
          className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-light"
        >
          Membangun masa depan Indonesia melalui presisi teknik dan komitmen arsitektural yang tak tergoyahkan.
        </motion.p>
      </motion.div>
    </header>
  );
};

export default AboutHero;
