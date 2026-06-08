import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';


export const metadata = {
  title: 'CV Karya Babatan',
  description: 'CV Karya Babatan - Kontraktor sipil terpercaya. Mewujudkan visi arsitektur Anda dengan presisi tinggi.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <CTA />
    </main>
  );
}
