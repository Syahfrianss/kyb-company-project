'use client';

import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/lib/motion-utils';

const AboutLocation = () => {
    return (
        <section className="mt-16 px-4 md:px-8 py-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-8">
                <motion.div 
                  className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                >
                    <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Our Location</h2>
                </motion.div>
                
                <motion.div 
                  className="mx-auto max-w-[1320px] overflow-hidden rounded-xl border border-primary/10 shadow-soft"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={scaleIn}
                >
                    <iframe
                        title="Lokasi Konstruksi"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.69560280408876!2d112.66889551493375!3d-7.94911472808811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62907dfee6573%3A0x625360b4da7fba0e!2sJl.%20Perumahan%20Mangliawan%20Permai%20No.E39%2C%20Krajan%2C%20Mangliawan%2C%20Kec.%20Pakis%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur%2065154!5e0!3m2!1sid!2sid!4v1777896311050!5m2!1sid!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default AboutLocation