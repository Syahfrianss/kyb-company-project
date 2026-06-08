'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, fadeInLeft, scaleIn, blurIn } from '@/lib/motion-utils';

const DetailedServices = () => {
  return (
    <section className="px-8 pb-32">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 rounded-3xl overflow-hidden border border-outline-variant/10">
          
          {/* Service Card: Konstruksi Sipil */}
          <motion.div 
            className="bg-surface-container-lowest p-12 flex flex-col gap-8 hover:bg-surface-bright transition-colors group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="architecture">architecture</span>
              <motion.span variants={blurIn} className="text-outline-variant font-headline text-6xl font-bold opacity-30">01</motion.span>
            </div>
            <div>
              <motion.h3 variants={fadeInUp} className="font-headline text-3xl font-bold mb-4">Konstruksi Sipil</motion.h3>
              <motion.p variants={fadeInUp} className="text-on-surface-variant mb-6 leading-relaxed">Fokus pada integritas struktural skala besar, pembangunan jembatan, dan infrastruktur berat dengan akurasi matematis tinggi.</motion.p>
              <ul className="space-y-3 mb-8">
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Struktur Beton Bertulang</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Infrastruktur Jembatan &amp; Jalan</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Manajemen Alat Berat</motion.li>
              </ul>
            </div>
            <motion.div variants={scaleIn} className="mt-auto overflow-hidden rounded-xl h-64">
              <img alt="Civil Construction" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="dramatic wide angle shot of a massive concrete bridge under construction with heavy cranes and steel reinforcements at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx0kfnBDushwDRBaH5PG4CrFlPp1g406gmbx2l9eBWbEVNOmvSZakyPaNpanJMzJoO8mIRmBu2mCxyJBj8QIzG_JFD2thAXJn6ey4dq6La-sV9O6e-pVirDEbcvufMJBPXn8Mpr4foMsoxiGnklsJExQ7H_-JKHnv_luM02Boe0-4pGhSVxPYmBzXF_F_9ByAvV8TAhsvNS_4lh2jIVU93CoF3VAtSxj0LIaIHKRnPs-0dKzi8JS8sTnCqxOKZbAoNyJBVr0S0Qcs"/>
            </motion.div>
          </motion.div>

          {/* Service Card: Desain & Arsitektur */}
          <motion.div 
            className="bg-surface-container-lowest p-12 flex flex-col gap-8 hover:bg-surface-bright transition-colors group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="draw">draw</span>
              <motion.span variants={blurIn} className="text-outline-variant font-headline text-6xl font-bold opacity-30">02</motion.span>
            </div>
            <div>
              <motion.h3 variants={fadeInUp} className="font-headline text-3xl font-bold mb-4">Desain &amp; Arsitektur</motion.h3>
              <motion.p variants={fadeInUp} className="text-on-surface-variant mb-6 leading-relaxed">Menciptakan ruang yang estetik namun tetap fungsional melalui pendekatan desain berbasis riset dan kenyamanan penghuni.</motion.p>
              <ul className="space-y-3 mb-8">
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Desain Konseptual 3D</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Perencanaan Tata Ruang</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Visualisasi Arsitektur</motion.li>
              </ul>
            </div>
            <motion.div variants={scaleIn} className="mt-auto overflow-hidden rounded-xl h-64">
              <img alt="Architectural Design" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="minimalist modern building exterior with glass walls and clean concrete lines reflecting a clear blue sky and soft sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5yvvMUo1H6gmYFLpdAlPLAVfXe1qaGwxW-RuLL1IQSId1HGMBr9SOZ0dHZR5LWF-ZYBcmmJ9kbc6MQrJXEKi4Eq5eWF9kg-Oug9R3Uok4k8Wvb9Vmb7jEgQklKtIp2GfWRr_KaKWcO19XkWOqDDJC3uC4Ttj_VOHmXWd3QaMl8Hgn9Tk29ShmYyzf9aDjlYsoNrVEu-bXnDLw4p-yqISRgyU_zC_5xKJGTka6s_mO2P_KWa7sNal6PjoiH9AkxieCvHwGHY0BTE"/>
            </motion.div>
          </motion.div>

          {/* Service Card: MEP */}
          <motion.div 
            className="bg-surface-container-lowest p-12 flex flex-col gap-8 hover:bg-surface-bright transition-colors group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="precision_manufacturing">precision_manufacturing</span>
              <motion.span variants={blurIn} className="text-outline-variant font-headline text-6xl font-bold opacity-30">03</motion.span>
            </div>
            <div>
              <motion.h3 variants={fadeInUp} className="font-headline text-3xl font-bold mb-4">MEP Systems</motion.h3>
              <motion.p variants={fadeInUp} className="text-on-surface-variant mb-6 leading-relaxed">Integrasi sistem mekanikal, elektrikal, dan pemipaan modern untuk efisiensi energi dan kenyamanan gedung pintar.</motion.p>
              <ul className="space-y-3 mb-8">
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Instalasi Listrik Industri</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Sistem HVAC Terintegrasi</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Plumbing &amp; Fire Fighting</motion.li>
              </ul>
            </div>
            <motion.div variants={scaleIn} className="mt-auto overflow-hidden rounded-xl h-64">
              <img alt="MEP Systems" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="intricate network of steel pipes and electrical conduits in a modern industrial building with bright studio lighting and metallic textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABL-IbPSYrFHEw72zMBQ41zSUfWsm-pd7jJUKyMSt7HfENdnm-5HOdI8PGijudOvyuGxd7ANuS4YUVfPeCrjcIBWWBCnqGaCPDTpJBizIqpjc9alcxVs_vbH_kf3YI-CIcIQO_Q_3OZUhzq7BWCtf6dcvc6g5XlCIjtkLkwMOBeIP7E0WrfUukD_XpOjtsjRz-g21ede9k7eyRUCrV2sa6POPwEv1EWtDx5w7zEaLzQXyLvd6ZdAbXrhEA4_gzP_opOAYlSQLYt8o"/>
            </motion.div>
          </motion.div>

          {/* Service Card: Renovasi */}
          <motion.div 
            className="bg-surface-container-lowest p-12 flex flex-col gap-8 hover:bg-surface-bright transition-colors group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="handyman">handyman</span>
              <motion.span variants={blurIn} className="text-outline-variant font-headline text-6xl font-bold opacity-30">04</motion.span>
            </div>
            <div>
              <motion.h3 variants={fadeInUp} className="font-headline text-3xl font-bold mb-4">Renovasi Modern</motion.h3>
              <motion.p variants={fadeInUp} className="text-on-surface-variant mb-6 leading-relaxed">Transformasi struktur lama menjadi ruang modern yang relevan tanpa mengorbankan fondasi dasar bangunan.</motion.p>
              <ul className="space-y-3 mb-8">
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Penguatan Struktur</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Refurbishment Interior</motion.li>
                <motion.li variants={fadeInLeft} className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Ekstensi Bangunan</motion.li>
              </ul>
            </div>
            <motion.div variants={scaleIn} className="mt-auto overflow-hidden rounded-xl h-64">
              <img alt="Renovation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-alt="industrial loft interior under renovation with exposed brick walls, timber beams, and modern scaffolding in warm sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBVZhlPbgMt73XxH2znaFuum9tvY49TYTn3ncPRjheak06v7f0xludQWSjPQhlms3N8AMnIQsF62HjGOJI5oYiR8whe-znRkv4batmgiSHc3oY4Dbs664xj6C6AegaMIoy7Dmr9suai0SW8kvhwtY3P9qwzr6pwh-NfYW_rRT5IPcvLoRz9KxM2ZR_SZaUrTos5ICfoF6pJdLCzSVwr702sFniJgNiitGEO-6hGeGHn0ytYcURsKxBJy6_Nv7cg94TrBtIpXKsTrg"/>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
