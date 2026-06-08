'use client';

import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/motion-utils';

const AboutStory = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          className="relative group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-2xl transition-all duration-500 group-hover:bg-primary/10"></div>
          <img
            alt="Karya Babatan HQ"
            className="relative rounded-xl w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            data-alt="Modern architectural headquarters building with glass facade at twilight, reflecting warm golden interior lights and technical precision"
            src="/images/logocv.png"
          />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInRight} className="font-headline font-bold text-4xl mb-8 text-on-surface tracking-tight">Kekuatan dalam <span className="text-primary italic">Presisi</span></motion.h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <motion.p variants={fadeInRight}>
              Keberhasilan pembangunan suatu daerah selain ditentukan oleh pemerintah daerah
              setempat juga ditentukan oleh peran sertanya pihak swasta. Pihak swasta dengan berbagai
              dunia usaha yang melingkupinya tidak akan lepas dari bantuan pemerintah, pemerintah
              sebagai lokomotif usaha akan menentukan arah pembangunan sedangkan pihak swasta
              sebagai motor penggerak pembangunan membantu pemerintah untuk mewujudkan rencana
              yang telah disusun dan ditetapkan. Kemitraan yang dijalin antara pihak swasta dan
              pemerintah akan memberikan pondasi yang kuat bagi terwujudnya pembangunan daerah
              yang berencana dan berkelanjutan.
            </motion.p>
            <motion.p variants={fadeInRight}>
              Salah satu dunia usaha yang menjadi mitra pemerintah dalam pembangunan disektor
              pekerjaan umum adalah Konsultan. Konsultan bekerja sama dengan pemerintah berusaha
              untuk mengimplementasikan rencana yang telah disusun, guna memenuhi kepentingan
              masyarakat. Kerjasama yang baik, saling menguntungkan antara pihak pemerintah dengan
              pihak swasta, dalam hal ini konsultan, merupakan kunci pokok dalam keberhasilan suatu
              proyek.
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutStory;
