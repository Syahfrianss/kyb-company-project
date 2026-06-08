import AboutHero from '@/components/AboutHero';
import AboutStory from '@/components/AboutStory';
import AboutVisionMission from '@/components/AboutVisionMission';
import AboutTimeline from '@/components/AboutTimeline';
import AboutTeam from '@/components/AboutTeam';
import AboutCertifications from '@/components/AboutCertifications';
import AboutLocation from '@/components/AboutLocation';

export const metadata = {
  title: 'Tentang Kami',
  description: 'Tentang CV Karya Babatan - Membangun masa depan Indonesia melalui presisi teknik dan komitmen arsitektural.',
};

export default function TentangKami() {
  return (
    <main className="relative">
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />

      <AboutTeam />

      <AboutLocation />
    </main>
  );
}
