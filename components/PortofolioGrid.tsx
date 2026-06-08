'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion-utils';
import { projectsData } from '@/data/projects';

const PortofolioGrid = () => {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-16 bg-surface-container-low">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1600px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <AnimatePresence>
          {projectsData.map((project) => (
            <motion.div 
              key={project.slug}
              variants={staggerItem}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/portofolio/${project.slug}`} className="block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.image}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-sm shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                      <span className="text-on-surface-variant font-label text-xs uppercase tracking-wider">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="font-headline font-bold text-2xl group-hover:text-primary transition-colors flex-1">
                      {project.title}
                    </h3>
                    <div className="mt-6 pt-6 border-t border-surface-variant flex justify-between items-center">
                      <span className="font-label text-[10px] text-outline uppercase tracking-widest">
                        {project.categoryLabel}
                      </span>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default PortofolioGrid;
