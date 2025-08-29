import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import { ComingSoon } from '@/components/ComingSoon';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 2KTV Answers',
  description: 'All NBA 2K26 2KTV answers will be available here as soon as the season starts.',
});

export default function NBA2k26_2KTVPage() {
  return (
    <ComingSoon
      title="NBA 2K26"
      subtitle="2KTV Answers"
      message="We're gearing up for the new season! All 2KTV answers for NBA 2K26 will be posted here as soon as the first episode airs. Get ready to earn that free VC!"
    />
  );
}
