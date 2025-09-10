import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/utils/metadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartSimple,
  faCircleInfo,
  faGem,
  faPersonRunning,
  faFire,
  faTrophy,
  faUsers,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Hub',
  description:
    'Your central hub for NBA 2K26. Find the most accurate data on builds, badges, animations, seasons, and more to dominate the court.',
  urlPath: '/games/nba-2k26',
});

// --- Data for Feature Cards ---
const featureCards: {
  icon: IconDefinition;
  title: string;
  description: string;
  href: string;
  isComingSoon?: boolean;
}[] = [
  {
    icon: faChartSimple,
    title: 'Build Maximums',
    description:
      'Explore the max attribute ratings for any position, height, weight, and wingspan.',
    href: '/games/nba-2k26/build-maximums',
    isComingSoon: true,
  },
  {
    icon: faCircleInfo,
    title: 'Attribute Descriptions',
    description: 'Understand what every in-game attribute does and how it impacts gameplay.',
    href: '/games/nba-2k26/attribute-descriptions',
  },
  {
    icon: faGem,
    title: 'Badges Guide',
    description: 'A complete breakdown of badge tiers, requirements, and effects.',
    href: '/games/nba-2k26/badges',
  },
  {
    icon: faPersonRunning,
    title: 'Animation Requirements',
    description: 'Find the exact attribute and height unlocks for every dunk and dribble move.',
    href: '/games/nba-2k26/animation-requirements',
    isComingSoon: true,
  },
  {
    icon: faFire,
    title: 'Takeover Guide',
    description: 'Learn about all Takeover abilities, their boosts, and how to unlock them.',
    href: '/games/nba-2k26/takeover',
  },
  {
    icon: faTrophy,
    title: 'Seasons & Rewards',
    description: 'Track all seasonal rewards, including the Pro and Hall of Fame pass items.',
    href: '/games/nba-2k26/seasons',
  },
  {
    icon: faUsers,
    title: 'Crew Information',
    description: 'Get the details on the new Crews feature and how to earn exclusive rewards.',
    href: '/games/nba-2k26/crews',
  },
  {
    icon: faStar,
    title: 'Build Specializations',
    description: 'Discover the new Build Specializations and their unique rewards.',
    href: '/games/nba-2k26/build-specializations',
  },
];

// --- Feature Card Component ---
const FeatureCard = ({
  icon,
  title,
  description,
  href,
  isComingSoon,
}: (typeof featureCards)[0]) => (
  <Link
    href={href}
    className="group bg-background-secondary p-6 rounded-lg border-2 border-accent/30 hover:border-primary hover:-translate-y-1 transition-all duration-300 flex flex-col items-start cursor-pointer">
    {/* Top section for icon and badge */}
    <div className="w-full flex justify-between items-start mb-4">
      <FontAwesomeIcon
        icon={icon}
        className="text-primary group-hover:text-accent transition-colors duration-300"
        size="2x"
      />
      {isComingSoon && (
        <div className="bg-accent text-background text-xs font-bold px-2 py-1 rounded-full">
          Coming Soon
        </div>
      )}
    </div>

    {/* Middle section for text content, which grows to fill space */}
    <div className="flex-grow">
      <h2 className="text-2xl font-bold text-text mb-2">{title}</h2>
      <p className="text-text/80">{description}</p>
    </div>

    {/* Bottom section for the link */}
    <div className="mt-auto pt-4 text-primary font-semibold flex items-center group-hover:text-accent transition-colors duration-300">
      Explore Section <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
    </div>
  </Link>
);

// --- Main Page Component ---
export default function NBA2k26HubPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            NBA 2K26 Hub: Builds, Badges, Seasons & More
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Welcome to the definitive resource for NBA 2K26. With the introduction of Crews, a new
            two-tier badge system, and the &quot;Out of Bounds&quot; MyCAREER story, this year is
            bigger than ever. Dive into our detailed guides to get the competitive edge.
          </p>
        </header>

        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            NBA 2K26 Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
