'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInDown, heroTextReveal, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion-utils';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="bg-hero -mt-20 relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Parallax */}
      <motion.div 
        className="absolute inset-0 bg-hero" 
        style={{ y, zIndex: -1, backgroundPosition: 'center', backgroundSize: 'cover' }} 
      />
      <div className="absolute inset-0 bg-background/80" style={{ zIndex: -1 }} />

      <div className="max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="z-10 space-y-8"
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={fadeInDown}
            className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
          >
            Expertise &amp; Precision
          </motion.span>
          <motion.h1 
            variants={heroTextReveal}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-tight tracking-tight"
          >
            KONTRAKTOR SIPIL TERPERCAYA
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-on-surface-variant max-w-xl leading-relaxed"
          >
            Jasa Konstruksi yang bergerak dibidang Arsitektur dan Sipil berupaya untuk dapat memberikan yang terbaik bagi pemerintah maupun client dengan melalui kerjasama yang saling menguntungkan.
          </motion.p>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.div variants={staggerItem}>
              <Link href="/tentang-kami" className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-headline font-bold tracking-wide hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Tentang Kami
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link href="/portofolio" className="inline-block bg-surface-container-high text-primary px-8 py-4 rounded-xl font-headline font-bold tracking-wide hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Lihat Proyek
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
