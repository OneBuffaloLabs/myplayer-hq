import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import { ComingSoon } from '@/components/ComingSoon';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Data',
  description:
    'Get ready for NBA 2K26. Complete data on builds, badges, and animations is coming soon.',
});

export default function NBA2k26HubPage() {
  return (
    <ComingSoon
      title="NBA 2K26"
      subtitle="Data Incoming"
      message="The full breakdown of builds, badges, and animations for NBA 2K26 is being prepped for launch day. Check back soon for the most accurate data in the community!"
    />
  );
}
