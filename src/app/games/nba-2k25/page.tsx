import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import { ComingSoon } from '@/components/ComingSoon';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K25 Data',
  description:
    'Archived data and information for NBA 2K25. Complete data on builds, badges, and animations is coming soon.',
});

export default function NBA2k25HubPage() {
  return (
    <ComingSoon
      title="NBA 2K25"
      subtitle="Data Archive"
      message="We're currently building out the complete data archive for NBA 2K25. Check back soon for builds, badge information, and more."
    />
  );
}
