'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/motion-utils';

const Footer = () => {
  return (
    <footer className="bg-footer w-full py-16 px-8">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={staggerItem} className="space-y-6">
          <div className="text-xl font-bold font-space-grotesk text-primary">Karya Babatan</div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            Precise construction and architectural excellence based in Surabaya. We build for the future with technical mastery.
          </p>
        </motion.div>
        
        <motion.div variants={staggerItem} className="space-y-4">
          <h4 className="font-headline font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs">Navigasi</h4>
          <ul className="space-y-2">
            <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 transition-colors text-sm block" href="/">Beranda</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 transition-colors text-sm block" href="/layanan">Layanan</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 transition-colors text-sm block" href="/portofolio">Portofolio</Link></li>
            <li><Link className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 transition-colors text-sm block" href="/tentang-kami">Tentang Kami</Link></li>
          </ul>
        </motion.div>
        
        <motion.div variants={staggerItem} className="space-y-4">
          <h4 className="font-headline font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs">Sektor</h4>
          <ul className="space-y-2">
            <li><a className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 transition-colors text-sm block" href="#">Gedung</a></li>
            <li><a className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 transition-colors text-sm block" href="#">Infrastruktur</a></li>
            <li><a className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 transition-colors text-sm block" href="#">Interior</a></li>
          </ul>
        </motion.div>
        
        <motion.div variants={staggerItem} className="space-y-4">
          <h4 className="font-headline font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs">Kontak</h4>
          <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li>Email: karya_babatan@yahoo.co.id</li>
            <li className="mt-4">Perum Mangliawan Permai E-39, Kec.Pakis, Kab.Malang</li>
          </ul>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-inter leading-relaxed">
          © 2026 CV Karya Babatan. Precision in Architecture.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
