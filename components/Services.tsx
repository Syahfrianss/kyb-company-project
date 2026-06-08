'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/motion-utils';

const Services = () => {
  return (
    <section className="py-32 bg-surface-container-low" id="services">
      <div className="max-w-screen-2xl mx-auto px-8">
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-primary font-headline text-sm font-bold tracking-widest uppercase">What We Do</span>
          <h2 className="text-5xl font-black font-headline mt-4">Layanan Unggulan</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Card 1 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="group bg-surface-container-lowest p-10 rounded-3xl hover:bg-primary transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
          >
            <motion.span variants={scaleIn} className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors duration-500" data-icon="architecture">architecture</motion.span>
            <h3 className="text-2xl font-bold font-headline mt-8 group-hover:text-white transition-colors duration-500">Konstruksi Sipil</h3>
            <p className="mt-4 text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-relaxed">Pengerjaan struktur beton dan baja dengan standar keamanan internasional.</p>
            <a className="inline-flex items-center mt-8 text-primary group-hover:text-white font-bold transition-colors duration-500" href="#">
              Pelajari <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="group bg-surface-container-lowest p-10 rounded-3xl hover:bg-primary transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
          >
            <motion.span variants={scaleIn} className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors duration-500" data-icon="design_services">design_services</motion.span>
            <h3 className="text-2xl font-bold font-headline mt-8 group-hover:text-white transition-colors duration-500">Desain &amp; Arsitektur</h3>
            <p className="mt-4 text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-relaxed">Perancangan estetika bangunan yang fungsional dan berkelanjutan.</p>
            <a className="inline-flex items-center mt-8 text-primary group-hover:text-white font-bold transition-colors duration-500" href="#">
              Pelajari <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="group bg-surface-container-lowest p-10 rounded-3xl hover:bg-primary transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
          >
            <motion.span variants={scaleIn} className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors duration-500" data-icon="engineering">engineering</motion.span>
            <h3 className="text-2xl font-bold font-headline mt-8 group-hover:text-white transition-colors duration-500">MEP</h3>
            <p className="mt-4 text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-relaxed">Instalasi mekanikal, elektrikal, dan plumbing terintegrasi untuk gedung.</p>
            <a className="inline-flex items-center mt-8 text-primary group-hover:text-white font-bold transition-colors duration-500" href="#">
              Pelajari <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="group bg-surface-container-lowest p-10 rounded-3xl hover:bg-primary transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
          >
            <motion.span variants={scaleIn} className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors duration-500" data-icon="foundation">foundation</motion.span>
            <h3 className="text-2xl font-bold font-headline mt-8 group-hover:text-white transition-colors duration-500">Renovasi</h3>
            <p className="mt-4 text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-relaxed">Transformasi ruang lama menjadi fasilitas modern tanpa mengorbankan integritas.</p>
            <a className="inline-flex items-center mt-8 text-primary group-hover:text-white font-bold transition-colors duration-500" href="#">
              Pelajari <span className="ml-2">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
