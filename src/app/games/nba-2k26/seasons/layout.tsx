import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Season Rewards',
  description:
    'Track all seasonal rewards for NBA 2K26, including the Free, Pro Pass, and Hall of Fame Pass items.',
  urlPath: '/games/nba-2k26/seasons',
});

export default function SeasonsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
