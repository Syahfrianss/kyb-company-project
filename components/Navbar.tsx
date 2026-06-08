'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInDown, staggerContainer, staggerItem } from '@/lib/motion-utils';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/portofolio', label: 'Portofolio' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
  ];

  return (
    <>
      <motion.nav 
        className="sticky top-4 z-40 px-4 md:px-8"
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full bg-surface/85 py-2 pl-4 pr-2 shadow-2xl backdrop-blur-md md:pr-3">
          <div className="text-2xl font-black tracking-tighter text-primary font-headline">
            <Link href="/">Karya Babatan</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline text-sm tracking-wider uppercase transition-colors relative group ${pathname === link.href
                  ? 'text-red-600 dark:text-red-500'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-red-600'
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/hubungi-kami"
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-headline text-sm tracking-wider uppercase hover:scale-105 transition-transform duration-300 active:scale-95 inline-block"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-surface-container-high/50 hover:bg-surface-container-high transition-colors z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMenuOpen}
            >
              <span className={`bg-on-surface block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
              <span className={`bg-on-surface block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-on-surface block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Mobile Menu Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-surface z-50 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
                <div className="text-xl font-black tracking-tighter text-primary font-headline">
                  Menu
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
                  aria-label="Tutup menu"
                >
                  <span className="material-symbols-outlined text-on-surface">close</span>
                </button>
              </div>

              <motion.div 
                className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div variants={staggerItem} key={link.href}>
                      <Link
                        href={link.href}
                        className={`font-headline text-lg py-3 px-4 rounded-lg transition-colors flex items-center gap-3 ${isActive
                          ? 'bg-primary/10 text-primary font-bold'
                          : 'text-on-surface hover:bg-surface-container'
                          }`}
                      >
                        {isActive && <span className="w-1.5 h-6 bg-primary rounded-full" />}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="p-6 border-t border-outline-variant/30">
                <Link
                  href="/hubungi-kami"
                  className="flex w-full justify-center bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-4 rounded-full font-headline text-base tracking-wider uppercase shadow-md shadow-primary/20"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
