'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/motion-utils';

const PortofolioCTA = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24">
      <motion.div 
        className="max-w-7xl mx-auto rounded-3xl bg-surface-container-highest p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full blueprint-grid opacity-30 -rotate-12 pointer-events-none"></div>
        
        <motion.div variants={fadeInLeft} className="relative z-10 max-w-xl text-center md:text-left">
          <h2 className="font-headline font-black text-4xl md:text-5xl leading-tight mb-6">Punya proyek serupa?</h2>
          <p className="text-on-surface-variant text-lg">Bawa visi Anda ke dalam realitas teknis yang presisi bersama tim ahli kami.</p>
        </motion.div>
        
        <motion.div variants={fadeInRight} className="relative z-10">
          <Link
            href="/hubungi-kami"
            className="group flex items-center gap-4 bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
            Konsultasikan Sekarang
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortofolioCTA;
