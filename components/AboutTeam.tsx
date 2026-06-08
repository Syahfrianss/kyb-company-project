'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion-utils';

const AboutTeam = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Dewan Direksi</h2>
            <p className="text-on-surface-variant">Dipimpin oleh para ahli yang memiliki dedikasi seumur hidup dalam konstruksi.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Member 1 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container aspect-[3/4] shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            <img
              alt="CEO"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              data-alt="Professional portrait of a male executive in a sharp suit, black and white, dramatic studio lighting against a dark background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA30KofcErENX2d8NBLHNRe7HAE__lkjY_HxU536dmROLvUfjyOVbEz3_Ek3rydqHyWcHidLpZUQEasZdJtCzdeJTuaA4R7SFxQrVNoB2iLvTxXPv9nKofRokd6TLjJDvs4wItiKzHyipO5kQFacCMQoacKAAJcciOIaWKBVJi8vXEpqV5eHlQ1jbFjS303c3qmhRiYx9uDVik6IyEC-Pvz8D7ASBge2vIXl91wv9tc-g3wdynoLwXmd0HK5ETwvPSkMgWrd0PNxQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-primary font-headline font-bold text-xl">Ir. Achmad Ridhoi S.T</p>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest">Direktur</p>
            </div>
          </motion.div>
          
          {/* Member 2 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container aspect-[3/4] shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            <img
              alt="COO"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              data-alt="Professional portrait of a female executive with a confident expression, black and white photography, elegant business attire"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA30KofcErENX2d8NBLHNRe7HAE__lkjY_HxU536dmROLvUfjyOVbEz3_Ek3rydqHyWcHidLpZUQEasZdJtCzdeJTuaA4R7SFxQrVNoB2iLvTxXPv9nKofRokd6TLjJDvs4wItiKzHyipO5kQFacCMQoacKAAJcciOIaWKBVJi8vXEpqV5eHlQ1jbFjS303c3qmhRiYx9uDVik6IyEC-Pvz8D7ASBge2vIXl91wv9tc-g3wdynoLwXmd0HK5ETwvPSkMgWrd0PNxQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-primary font-headline font-bold text-xl">Dian Irawati</p>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest">Administrasi</p>
            </div>
          </motion.div>
          
          {/* Member 3 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container aspect-[3/4] shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            <img
              alt="CTO"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              data-alt="Male senior architect portrait, black and white, focused look, wearing glasses and a dark turtleneck"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA30KofcErENX2d8NBLHNRe7HAE__lkjY_HxU536dmROLvUfjyOVbEz3_Ek3rydqHyWcHidLpZUQEasZdJtCzdeJTuaA4R7SFxQrVNoB2iLvTxXPv9nKofRokd6TLjJDvs4wItiKzHyipO5kQFacCMQoacKAAJcciOIaWKBVJi8vXEpqV5eHlQ1jbFjS303c3qmhRiYx9uDVik6IyEC-Pvz8D7ASBge2vIXl91wv9tc-g3wdynoLwXmd0HK5ETwvPSkMgWrd0PNxQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-primary font-headline font-bold text-xl">Zuhri Nasrullah S.T</p>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest">Arsitek</p>
            </div>
          </motion.div>
          
          {/* Member 4 */}
          <motion.div 
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-xl bg-surface-container aspect-[3/4] shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            <img
              alt="CFO"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              data-alt="Middle-aged businessman portrait in black and white, subtle smile, professional corporate headshot"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA30KofcErENX2d8NBLHNRe7HAE__lkjY_HxU536dmROLvUfjyOVbEz3_Ek3rydqHyWcHidLpZUQEasZdJtCzdeJTuaA4R7SFxQrVNoB2iLvTxXPv9nKofRokd6TLjJDvs4wItiKzHyipO5kQFacCMQoacKAAJcciOIaWKBVJi8vXEpqV5eHlQ1jbFjS303c3qmhRiYx9uDVik6IyEC-Pvz8D7ASBge2vIXl91wv9tc-g3wdynoLwXmd0HK5ETwvPSkMgWrd0PNxQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-primary font-headline font-bold text-xl">Ahmad Taufiq S.T</p>
              <p className="text-on-surface-variant text-sm uppercase tracking-widest">Sipil</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
