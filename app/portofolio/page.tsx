import PortofolioHeader from '@/components/PortofolioHeader';
import PortofolioFilter from '@/components/PortofolioFilter';
import PortofolioGrid from '@/components/PortofolioGrid';
import PortofolioCTA from '@/components/PortofolioCTA';

export const metadata = {
  title: 'Portofolio Proyek',
  description: 'Portofolio proyek konstruksi dan infrastruktur CV Karya Babatan di seluruh Indonesia.',
};

export default function Portofolio() {
  return (
    <main className="pt-20">
      <PortofolioHeader />

      <PortofolioGrid />
      <PortofolioCTA />
    </main>
  );
}
