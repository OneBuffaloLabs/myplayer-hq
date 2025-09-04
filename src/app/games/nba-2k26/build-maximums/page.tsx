import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import { ComingSoon } from '@/components/ComingSoon';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26',
  description: '',
});

export default function NBA2k26BuildMaximumsPage() {
  return (
    <ComingSoon
      title="NBA 2K26"
      subtitle="Build Maximums"
      message="We're currently building out the complete data archive for NBA 2K26. Check back soon for builds, badge information, and more."
    />
  );
}
