import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Build Specializations',
  description:
    'Learn about the new Build Specializations in NBA 2K26, including requirements, goals, and rewards for Finishing, Shooting, Playmaking, Defense, and Rebounding.',
  urlPath: '/games/nba-2k26/build-specializations',
});

export default function BuildSpecializationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
