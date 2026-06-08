'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/motion-utils';

const AboutCertifications = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          className="text-center font-headline font-bold text-2xl text-on-surface-variant mb-12 uppercase tracking-[0.3em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          Sertifikasi &amp; Kepatuhan
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-12 transition-opacity duration-500 items-center justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn} className="flex flex-col items-center gap-4 group cursor-default">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center border border-outline-variant/20 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
              <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            </div>
            <p className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">ISO 9001:2015</p>
          </motion.div>
          
          <motion.div variants={scaleIn} className="flex flex-col items-center gap-4 group cursor-default">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center border border-outline-variant/20 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
              <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
            </div>
            <p className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">OHSAS 18001 (K3)</p>
          </motion.div>
          
          <motion.div variants={scaleIn} className="flex flex-col items-center gap-4 group cursor-default">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center border border-outline-variant/20 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
              <span className="material-symbols-outlined text-primary text-3xl">eco</span>
            </div>
            <p className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">ISO 14001:2015</p>
          </motion.div>
          
          <motion.div variants={scaleIn} className="flex flex-col items-center gap-4 group cursor-default">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center border border-outline-variant/20 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
              <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
            </div>
            <p className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">Legal Compliance</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCertifications;
