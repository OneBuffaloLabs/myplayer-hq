import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Takeover Guide',
  description:
    'A complete guide to the NBA 2K26 Takeover system. Find all abilities, attribute requirements, and boosts to elevate your game.',
  urlPath: '/games/nba-2k26/takeover/',
});

export default function TakeoverLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
