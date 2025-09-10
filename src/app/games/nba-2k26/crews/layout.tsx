import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Crew Information',
  description:
    'Learn how the new Crews feature works in NBA 2K26, including rewards, limitations, and how to level up your squad.',
  urlPath: '/games/nba-2k26/crews',
});

export default function CrewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
