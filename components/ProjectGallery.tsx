'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion-utils';

interface GalleryItem {
    src: string;
    caption?: string;
}

interface ProjectGalleryProps {
    gallery: GalleryItem[];
}

const ProjectGallery = ({ gallery }: ProjectGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Jangan render section jika tidak ada foto
    if (!gallery || gallery.length === 0) return null;

    return (
        <motion.section 
          className="py-16 px-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
            <h2 className="font-headline font-black text-3xl mb-8">
                Dokumentasi Proyek
                <div className="w-16 h-1.5 bg-primary mt-3 rounded-full"></div>
            </h2>

            {/* Foto Utama */}
            <div className="relative w-full max-h-[420px] aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container-highest mb-4">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeIndex}
                        src={gallery[activeIndex].src}
                        alt={gallery[activeIndex].caption || `Foto ${activeIndex + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
                
                {/* Counter Badge */}
                <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm z-10">
                    {activeIndex + 1} / {gallery.length}
                </div>
                
                {/* Caption */}
                <AnimatePresence mode="wait">
                    {gallery[activeIndex].caption && (
                        <motion.div 
                          key={`caption-${activeIndex}`}
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-12 z-10"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                            <p className="text-white text-sm font-label">{gallery[activeIndex].caption}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Thumbnail Strip */}
            <motion.div 
              className="flex gap-3 overflow-x-auto pb-2 no-scrollbar"
              variants={staggerContainer}
            >
                {gallery.map((item, index) => (
                    <motion.button
                        key={index}
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setActiveIndex(index)}
                        className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:opacity-100 ${index === activeIndex
                                ? 'border-primary shadow-lg shadow-primary/20 opacity-100'
                                : 'border-transparent opacity-60 hover:border-outline-variant'
                            }`}
                    >
                        <img
                            src={item.src}
                            alt={item.caption || `Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.button>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default ProjectGallery;
