import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Badge Descriptions',
  description:
    'A complete encyclopedia of every badge in NBA 2K26, detailing what each does at every level, from Finishing to Defense.',
  urlPath: '/games/nba-2k26/badges/descriptions/',
});

export default function BadgeDescriptionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
