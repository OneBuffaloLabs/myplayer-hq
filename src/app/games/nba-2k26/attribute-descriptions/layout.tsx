import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Attribute Descriptions',
  description:
    "Understand how each attribute in NBA 2K26 impacts your player's performance on the court. This guide breaks down every rating from Finishing to Defense.",
  urlPath: '/games/nba-2k26/attribute-descriptions',
});

export default function AttributeDescriptionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
