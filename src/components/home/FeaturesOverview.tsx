import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faGem, faBolt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Feature = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: faChartSimple,
    title: 'Max Attribute Data',
    description: 'Find the max potential for any build combination.',
  },
  {
    icon: faGem,
    title: 'Complete Badge Hub',
    description: 'All badge tiers, costs, and attribute requirements in one place.',
  },
  {
    icon: faBolt,
    title: 'Animation Unlocks',
    description: 'Know the exact requirements for every dunk and dribble move.',
  },
];

const FeatureCard = ({ icon, title, description }: Feature) => (
  <div className="bg-background-secondary  p-6 rounded-lg border border-accent/50">
    <FontAwesomeIcon icon={icon} size="3x" className="text-primary mb-4" />
    <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
    <p className="text-text/80">{description}</p>
  </div>
);

export const FeaturesOverview = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text mb-12">Your Tactical Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
