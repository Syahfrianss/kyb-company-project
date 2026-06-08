'use client';

import { motion } from 'framer-motion';
import { scaleIn, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion-utils';

const ClosingCTA = () => {
    return (
      <section className="py-32 px-8">
        <motion.div 
          className="max-w-screen-2xl mx-auto bg-zinc-900 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 blueprint-grid invert pointer-events-none"></div>
          
          <motion.div className="relative z-10" variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="font-headline text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Punya proyek yang membutuhkan presisi tinggi?</motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              Mari diskusikan visi Anda bersama tim ahli kami. Kami siap memberikan solusi teknis terbaik untuk kebutuhan konstruksi Anda.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.button 
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight shadow-xl shadow-primary/20"
              >
                Konsultasikan Gratis
              </motion.button>
              <motion.button 
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/5 text-white border border-white/10 px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                Hubungi WhatsApp
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
};
  
export default ClosingCTA;
