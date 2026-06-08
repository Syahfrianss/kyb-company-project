'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/motion-utils';

const AboutVisionMission = () => {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div 
            className="group p-12 rounded-xl bg-surface-container relative overflow-hidden transition-all duration-500 hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <motion.span variants={scaleIn} className="material-symbols-outlined text-primary text-5xl mb-8 block">visibility</motion.span>
            <h3 className="font-headline font-bold text-3xl mb-6 text-on-surface">Visi Kami</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Menjadi tolok ukur global dalam keunggulan teknik dan konstruksi yang berkelanjutan, menciptakan infrastruktur yang memberdayakan generasi mendatang di seluruh Nusantara.
            </p>
          </motion.div>
          
          {/* Mission Card */}
          <motion.div 
            className="group p-12 rounded-xl bg-surface-container relative overflow-hidden transition-all duration-500 hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            whileHover={{ y: -8 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <motion.span variants={scaleIn} className="material-symbols-outlined text-primary text-5xl mb-8 block">assignment</motion.span>
            <h3 className="font-headline font-bold text-3xl mb-6 text-on-surface">Misi Kami</h3>
            
            <motion.ul 
              className="space-y-4 text-on-surface-variant"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={staggerItem} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Mengintegrasikan teknologi mutakhir dengan praktik manajemen proyek yang disiplin.
              </motion.li>
              <motion.li variants={staggerItem} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Memastikan keselamatan kerja tanpa kompromi dalam setiap jengkal konstruksi.
              </motion.li>
              <motion.li variants={staggerItem} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Membangun kemitraan strategis yang berlandaskan transparansi dan nilai tambah.
              </motion.li>
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
