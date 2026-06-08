'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/motion-utils';

const Portfolio = () => {
  return (
    <section className="py-32 bg-surface" id="portfolio">
      <div className="max-w-screen-2xl mx-auto px-8">
        <motion.div 
          className="flex justify-between items-end mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-5xl font-black font-headline mt-4 inline-block relative">
              Proyek Unggulan
              <div className="absolute -bottom-4 left-0 w-24 h-2 bg-primary"></div>
            </h2>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn} className="col-span-12 md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-lowest h-[500px]">
            <img alt="Commercial Building Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="sleek modern glass and steel commercial building with reflective windows at twilight in an urban setting"
              src="/images/smalab-um.jpeg" />
            <motion.div variants={fadeInUp} className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent flex flex-col justify-end p-12">
              <h3 className="text-white text-3xl font-bold font-headline">Pemeliharaan Fasad SMA Laboratorium UM</h3>
            </motion.div>
          </motion.div>
          <motion.div variants={scaleIn} className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest h-[500px]">
            <img alt="Interior Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="minimalist modern office interior with large windows, wooden accents, and contemporary furniture"
              src="/images/sdlab-um-blitar.jpeg" />
            <motion.div variants={fadeInUp} className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent flex flex-col justify-end p-12">
              <h3 className="text-white text-3xl font-bold font-headline">Pembangunan Ruang Kelas Lantai 3 SD LAB UM Kota Blitar</h3>
            </motion.div>
          </motion.div>
          <motion.div variants={scaleIn} className="col-span-12 md:col-span-4 group relative overflow-hidden rounded-3xl bg-surface-container-lowest h-[500px]">
            <img alt="Industrial Facility" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="large industrial warehouse with clean concrete floors and steel roof structure, bright natural lighting"
              src="/images/pocarisweet-pasuruan.jpeg" />
            <motion.div variants={fadeInUp} className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent flex flex-col justify-end p-12">
              <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full w-fit mb-4 font-bold tracking-wider uppercase">Gedung</span>
              <h3 className="text-white text-3xl font-bold font-headline">PT.Amerta Indah Otsuka </h3>
            </motion.div>
          </motion.div>
          <motion.div variants={scaleIn} className="col-span-12 md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-lowest h-[500px]">
            <img alt="Urban Development" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="bird's eye view of a modern apartment complex with green courtyards and swimming pools"
              src="/images/gedung-c-fak-hukum-ub.jpeg" />
            <motion.div variants={fadeInUp} className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent flex flex-col justify-end p-12">
              <h3 className="text-white text-3xl font-bold font-headline">Renovasi Dinding Eksterior Gedung </h3>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <a className="group inline-flex items-center font-headline font-bold text-primary hover:text-primary-container transition-colors" href="/portofolio">
            Lihat Semua Portofolio <span className="ml-4 transition-transform group-hover:translate-x-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
