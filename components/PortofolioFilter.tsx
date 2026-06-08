'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion-utils';

const PortofolioFilter = () => {
  return (
    <section className="sticky top-20 z-40 bg-surface/90 backdrop-blur-md py-6 px-8 md:px-16 lg:px-24 tonal-shift">
      <motion.div 
        className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.button variants={staggerItem} className="px-8 py-3 rounded-full bg-primary text-on-primary font-headline font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shrink-0">
          Semua
        </motion.button>
        <motion.button variants={staggerItem} className="px-8 py-3 rounded-full border border-outline-variant text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all shrink-0">
          Gedung
        </motion.button>
        <motion.button variants={staggerItem} className="px-8 py-3 rounded-full border border-outline-variant text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all shrink-0">
          Rumah
        </motion.button>
        <motion.button variants={staggerItem} className="px-8 py-3 rounded-full border border-outline-variant text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all shrink-0">
          Jalan
        </motion.button>
        <motion.button variants={staggerItem} className="px-8 py-3 rounded-full border border-outline-variant text-on-surface-variant font-headline font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all shrink-0">
          Infrastruktur
        </motion.button>
      </motion.div>
    </section>
  );
};

export default PortofolioFilter;
