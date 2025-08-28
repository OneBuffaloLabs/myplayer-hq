import { Hero } from '@/components/home/Hero';
import { ChooseYourGame } from '@/components/home/ChooseYourGame';
import { FeaturesOverview } from '@/components/home/FeaturesOverview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChooseYourGame />
      <FeaturesOverview />
    </>
  );
}
