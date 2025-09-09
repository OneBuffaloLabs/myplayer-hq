import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Badge Requirements',
  description:
    'View the exact attribute and height requirements to unlock every badge in NBA 2K26. Filter by attribute to plan your MyPLAYER build.',
  urlPath: '/games/nba-2k26/badges/requirements',
});

export default function BadgeRequirementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
