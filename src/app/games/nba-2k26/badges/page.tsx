import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/utils/metadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faListCheck,
  faLayerGroup,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Badges Guide',
  description:
    'The central hub for all NBA 2K26 badge information. Find detailed descriptions, attribute requirements, and the new badge tier system.',
  urlPath: '/games/nba-2k26/badges',
});

// --- Data for Navigation Cards ---
const badgeSections: {
  icon: IconDefinition;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: faBookOpen,
    title: 'Badge Descriptions',
    description: 'A complete encyclopedia of every badge, detailing what each does at every level.',
    href: '/games/nba-2k26/badges/descriptions',
  },
  {
    icon: faListCheck,
    title: 'Badge Requirements',
    description:
      'Find the exact attribute thresholds needed to unlock each badge for your MyPLAYER.',
    href: '/games/nba-2k26/badges/requirements',
  },
  {
    icon: faLayerGroup,
    title: 'Badge Tiers',
    description:
      'Learn about the new two-tier badge system and how height impacts your badge costs.',
    href: '/games/nba-2k26/badges/tiers',
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26' },
  { label: 'Badges Guide', href: '/games/nba-2k26/badges' },
];

// --- Card Component for Navigation ---
const BadgeHubCard = ({ icon, title, description, href }: (typeof badgeSections)[0]) => (
  <Link
    href={href}
    className="group bg-background-secondary p-8 rounded-lg border-2 border-accent/30 hover:border-primary hover:-translate-y-2 transition-all duration-300 flex flex-col items-start cursor-pointer">
    <div className="flex-grow">
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        className="text-primary mb-4 group-hover:text-accent transition-colors duration-300"
      />
      <h2 className="text-2xl font-bold text-text mb-2">{title}</h2>
      <p className="text-text/80">{description}</p>
    </div>
    <div className="mt-6 text-primary font-semibold flex items-center group-hover:text-accent transition-colors duration-300">
      View Section <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
    </div>
  </Link>
);

// --- Main Page Component ---
export default function BadgesHubPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">NBA 2K26 Badges Guide</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Welcome to the central hub for all NBA 2K26 badge information. Select a section below to
            find detailed descriptions, attribute requirements, and an explanation of the new badge
            tier system.
          </p>
        </header>

        <section aria-labelledby="badge-sections-heading">
          <h2 id="badge-sections-heading" className="sr-only">
            Badge Information Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {badgeSections.map((card) => (
              <BadgeHubCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
