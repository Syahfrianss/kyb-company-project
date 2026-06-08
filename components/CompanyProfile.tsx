'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem } from '@/lib/motion-utils';
import { useEffect } from 'react';

const AnimatedCounter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, to, { duration, ease: "easeOut" });
    return animation.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const CompanyProfile = () => {
  return (
    <section className="py-32 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          <motion.div variants={scaleIn} className="absolute -top-12 -left-12 w-48 h-48 border-t-2 border-l-2 border-primary opacity-20"></motion.div>
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img alt="Technical Mastery" className="w-full h-[600px] object-cover transition-transform duration-1000 hover:scale-105" data-alt="close-up of an engineer examining architectural blueprints with a digital caliper and technical tools on a wooden desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvf0lkARiE-qdszYIQxkKqWn66J69epF7bAuIn-F9k2s43rUXoXiYNUBhg0v52PdJy1lt80Xu2ieWf02k97GLngfPFAqxxQ0x3AYrEfvElidZfhvkUk5Zlu1K17-STl6EzhJxYfnEZu7HLUdSAHZvsDPCNeBTrUU8yYn125Q5SEcRkPyUF9TEKLTK0rftGuHn7gLCFBhUzJV3auGGsmL0I_6YbVhCvfZPDuombcehhIJx0RCumJre2tLcKnPQo9V0tn7CuyKIc9OA"/>
          </div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInRight} className="label-md font-label uppercase tracking-[0.2em] text-primary font-bold mb-6 block">Keahlian Teknik</motion.span>
          <motion.h2 variants={fadeInRight} className="font-headline text-5xl font-black mb-8 leading-tight">Presisi adalah <br/>Bahasa Kami.</motion.h2>
          <motion.p variants={fadeInRight} className="text-on-surface-variant text-lg mb-12 leading-relaxed font-light">
            Karya Babatan bukan sekadar kontraktor. Kami adalah kurator ruang yang memahami bahwa setiap garis pada blueprint membawa tanggung jawab besar terhadap keamanan dan kenyamanan jangka panjang. Dengan tim ahli berpengalaman lebih dari 15 tahun, kami mengawal setiap proyek dari konsepsi hingga serah terima dengan standar kontrol kualitas yang ketat.
          </motion.p>
          
          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-12">
            <motion.div variants={staggerItem}>
              <div className="text-4xl font-headline font-black text-primary mb-2">
                <AnimatedCounter from={0} to={150} />+
              </div>
              <div className="text-xs font-label uppercase tracking-widest font-bold opacity-60">Proyek Selesai</div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="text-4xl font-headline font-black text-primary mb-2">
                <AnimatedCounter from={10} to={0} duration={1} />
              </div>
              <div className="text-xs font-label uppercase tracking-widest font-bold opacity-60">Kegagalan Struktur</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default CompanyProfile;
