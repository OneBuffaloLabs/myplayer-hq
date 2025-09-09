import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Badge Tiers by Height',
  description:
    'Explore the new two-tier badge system in NBA 2K26. Filter by height and compare badges to see which tier they fall into for your MyPLAYER build.',
  urlPath: '/games/nba-2k26/badges/tiers',
});

export default function BadgeTiersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
