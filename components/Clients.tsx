'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion-utils';

const clients = [
  { name: "Adhi Karya", logo: "/images/logo-klien/klien-ub.png" },
  { name: "Waskita", logo: "/images/logo-klien/klien-ub.png" },
  { name: "Wijaya Karya", logo: "/images/logo-klien/klien-ub.png" },
  { name: "Pengembang Jaya", logo: "/images/logo-klien/klien-ub.png" },
  { name: "Ciputra", logo: "/images/logo-klien/klien-ub.png" },
  { name: "Sinar Mas Land", logo: "/images/logo-klien/klien-ub.png" },
];

const Clients = () => {
  return (
    <motion.section 
      className="py-20 bg-zinc-100 overflow-hidden border-y border-zinc-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
    >
      <div className="flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center justify-around min-w-full gap-8 px-4">
          {clients.map((client, i) => (
            <img
              key={`client-1-${i}`}
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            />
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center justify-around min-w-full gap-8 px-4" aria-hidden="true">
          {clients.map((client, i) => (
            <img
              key={`client-2-${i}`}
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Clients;
