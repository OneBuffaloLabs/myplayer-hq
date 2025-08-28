// --- Next ---
import type { Metadata } from 'next';

// Define the structure for page-specific metadata
interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  urlPath?: string;
  imageUrl?: string;
  robots?: Metadata['robots'];
}

// --- Base Metadata ---
const BASE_URL = 'https://2k.onebuffalogames.com';
const SITE_NAME = 'MyPlayerHQ';
const TWITTER_CREATOR = '@onebuffalolabs';
const GOOGLE_ADSENSE_ACCOUNT = '';
const DEFAULT_TITLE = 'MyPlayerHQ | The Ultimate NBA 2K Companion & Build Resource';
const DEFAULT_DESCRIPTION =
  'Your headquarters for the best NBA 2K builds, badge data, animation requirements, and more. Dominate the court with MyPlayerHQ.';
const DEFAULT_OG_IMAGE = ``;
const DEFAULT_KEYWORDS = [
  'NBA 2K',
  'NBA 2K26',
  'MyPlayer',
  '2K Builds',
  '2K Badges',
  '2K Animations',
  'MyPlayerHQ',
  '2K Companion',
  'Locker Codes',
  '2KTV Answers',
];

/**
 * Generates metadata for a page, merging with site-wide defaults.
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  urlPath = '',
  imageUrl,
  robots,
}: PageMetadata = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageUrl = `${BASE_URL}${urlPath}`;
  const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])];
  const ogImageUrl = imageUrl ? `${BASE_URL}${imageUrl}` : DEFAULT_OG_IMAGE;
  const otherMetadata: Metadata['other'] = {};
  if (GOOGLE_ADSENSE_ACCOUNT) {
    otherMetadata['google-adsense-account'] = GOOGLE_ADSENSE_ACCOUNT;
  }

  const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: pageUrl,
    },
    title: {
      template: `%s | ${SITE_NAME}`,
      default: DEFAULT_TITLE,
    },
    ...(title && { title: title }),
    description: pageDescription,
    keywords: allKeywords,
    ...(robots && { robots: robots }),
    manifest: '/manifest.json',
    icons: {
      icon: [
        // SVG icon for modern browsers
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
        // PNG icon as a fallback
        { url: '/icon.png', type: 'image/png' },
      ],
      // Apple touch icon for iOS devices
      apple: '/apple-icon.png',
    },
    appleWebApp: {
      title: SITE_NAME,
      capable: true,
      statusBarStyle: 'black-translucent',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title || 'REPLACE'} - ME`,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    ...(Object.keys(otherMetadata).length > 0 && { other: otherMetadata }),
  };

  if (TWITTER_CREATOR) {
    metadata.twitter = {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: TWITTER_CREATOR,
      images: [ogImageUrl],
    };
  }

  return metadata;
}
