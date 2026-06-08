'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, heroTextReveal, fadeInUp } from '@/lib/motion-utils';

const PortofolioHeader = () => {
  return (
    <section className=" min-h-[460px] flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <motion.div 
        className="max-w-4xl py-20"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInLeft} className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[2px] bg-primary"></span>
          <span className="font-label text-xs font-bold tracking-[0.2em] uppercase text-primary">CV.Karya Babatan</span>
        </motion.div>
        
        <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tight text-on-surface mb-8 overflow-hidden">
          <motion.span variants={heroTextReveal} className="inline-block mr-4">Proyek</motion.span> 
          <motion.span variants={heroTextReveal} className="relative inline-block">Kami<span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span></motion.span>
        </h1>
        
        <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light max-w-2xl">
          Kumpulan proyek arsitektur dan infrastruktur yang mendefinisikan standar baru dalam presisi, estetika, dan fungsionalitas di seluruh Indonesia.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PortofolioHeader;
