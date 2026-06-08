'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/motion-utils';

const AboutTimeline = () => {
  return (
    <section className="py-32 px-8 overflow-hidden relative">
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        
        <motion.div 
          className="mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-headline font-bold text-4xl mb-4">Milestones Keberlanjutan</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line Animated */}
          <motion.div 
            className="absolute top-1/2 left-0 h-[1px] bg-primary/40 -translate-y-1/2 z-0 hidden md:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
          {/* Static Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2 z-0 hidden md:block"></div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* 2010 */}
            <motion.div variants={staggerItem} className="relative group pt-12 md:pt-0 pb-12 md:pb-0 z-10">
              <div className="flex flex-col items-center">
                <motion.div variants={scaleIn} className="w-4 h-4 rounded-full bg-primary mb-8 relative z-10 ring-8 ring-primary/10"></motion.div>
                <div className="text-center transition-all duration-300 group-hover:translate-y-[-5px] bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl">
                  <span className="font-headline font-bold text-2xl text-primary block mb-2">2010</span>
                  <h4 className="font-bold text-on-surface mb-2">Didirikan</h4>
                  <p className="text-sm text-on-surface-variant">Operasi awal di bidang konsultasi sipil.</p>
                </div>
              </div>
            </motion.div>

            {/* 2014 */}
            <motion.div variants={staggerItem} className="relative group pt-12 md:pt-0 pb-12 md:pb-0 z-10">
              <div className="flex flex-col items-center">
                <motion.div variants={scaleIn} className="w-4 h-4 rounded-full bg-surface-container border-2 border-primary mb-8 relative z-10 group-hover:bg-primary transition-colors"></motion.div>
                <div className="text-center transition-all duration-300 group-hover:translate-y-[-5px] bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl">
                  <span className="font-headline font-bold text-2xl text-on-surface-variant block mb-2 group-hover:text-primary">2014</span>
                  <h4 className="font-bold text-on-surface mb-2">Ekspansi Nasional</h4>
                  <p className="text-sm text-on-surface-variant">Menangani proyek infrastruktur lintas pulau.</p>
                </div>
              </div>
            </motion.div>

            {/* 2019 */}
            <motion.div variants={staggerItem} className="relative group pt-12 md:pt-0 pb-12 md:pb-0 z-10">
              <div className="flex flex-col items-center">
                <motion.div variants={scaleIn} className="w-4 h-4 rounded-full bg-surface-container border-2 border-primary mb-8 relative z-10 group-hover:bg-primary transition-colors"></motion.div>
                <div className="text-center transition-all duration-300 group-hover:translate-y-[-5px] bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl">
                  <span className="font-headline font-bold text-2xl text-on-surface-variant block mb-2 group-hover:text-primary">2019</span>
                  <h4 className="font-bold text-on-surface mb-2">Sertifikasi ISO</h4>
                  <p className="text-sm text-on-surface-variant">Mencapai standar manajemen mutu internasional.</p>
                </div>
              </div>
            </motion.div>

            {/* 2023 */}
            <motion.div variants={staggerItem} className="relative group pt-12 md:pt-0 pb-12 md:pb-0 z-10">
              <div className="flex flex-col items-center">
                <motion.div variants={scaleIn} className="w-4 h-4 rounded-full bg-surface-container border-2 border-primary mb-8 relative z-10 group-hover:bg-primary transition-colors"></motion.div>
                <div className="text-center transition-all duration-300 group-hover:translate-y-[-5px] bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl">
                  <span className="font-headline font-bold text-2xl text-on-surface-variant block mb-2 group-hover:text-primary">2023</span>
                  <h4 className="font-bold text-on-surface mb-2">Smart City Hub</h4>
                  <p className="text-sm text-on-surface-variant">Leading integrator untuk proyek pembangunan berkelanjutan.</p>
                </div>
              </div>
            </motion.div>

            {/* 2026 */}
            <motion.div variants={staggerItem} className="relative group pt-12 md:pt-0 pb-12 md:pb-0 z-10">
              <div className="flex flex-col items-center">
                <motion.div variants={scaleIn} className="w-4 h-4 rounded-full bg-surface-container border-2 border-primary mb-8 relative z-10 group-hover:bg-primary transition-colors"></motion.div>
                <div className="text-center transition-all duration-300 group-hover:translate-y-[-5px] bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl">
                  <span className="font-headline font-bold text-2xl text-on-surface-variant block mb-2 group-hover:text-primary">2026</span>
                  <h4 className="font-bold text-on-surface mb-2">Vision 2026</h4>
                  <p className="text-sm text-on-surface-variant">Menjadi kontraktor EPC nomor satu di kawasan regional.</p>
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
