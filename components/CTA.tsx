'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion-utils';

const CTA = () => {
  return (
    <section className="py-32 blueprint-grid relative overflow-hidden bg-primary-container text-on-primary-container">
      <motion.div 
        className="max-w-screen-xl mx-auto px-8 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black font-headline mb-8">Siap Memulai Proyek Anda?</motion.h2>
        <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-12">
          Diskusikan kebutuhan konstruksi Anda dengan tim ahli kami. Kami berikan konsultasi teknis gratis untuk proyek pertama Anda.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
          <motion.button 
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-primary px-10 py-5 rounded-xl font-headline font-bold tracking-wide transition-all shadow-2xl"
          >
            Mulai Konsultasi Gratis
          </motion.button>
          <motion.button 
            variants={staggerItem}
            className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-headline font-bold tracking-wide hover:bg-white/10 transition-all"
          >
            Hubungi WhatsApp
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Animated Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-primary/20 pointer-events-none"
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
};

export default CTA;
