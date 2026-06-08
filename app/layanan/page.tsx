import LayananHeader from '@/components/LayananHeader';
import DetailedServices from '@/components/DetailedServices';
import CompanyProfile from '@/components/CompanyProfile';
import ClosingCTA from '@/components/ClosingCTA';

export const metadata = {
  title: 'Layanan Konstruksi',
  description: 'Layanan konstruksi sipil, desain arsitektur, MEP, dan renovasi modern dari CV Karya Babatan.',
};

export default function Layanan() {
  return (
    <main className="pt-20 min-h-screen">
      <LayananHeader />
      <DetailedServices />
      <CompanyProfile />
      <ClosingCTA />
    </main>
  );
}
