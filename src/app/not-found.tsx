// src/app/not-found.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { generateMetadata } from '@/utils/metadata';

// Generate metadata for the 404 page
export const metadata: Metadata = generateMetadata({
  title: '404 - Page Not Found',
  description:
    "Oops! The page you're looking for doesn't exist. Return to the homepage to find our games and hubs.",
  // Good practice to prevent search engines from indexing the 404 page
  robots: {
    index: false,
    follow: true,
  },
});

export default function NotFound() {
  return (
    <main className="bg-background text-text">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <FontAwesomeIcon
          icon={faBasketball}
          size="4x"
          className="text-accent mb-4 animate-bounce"
        />
        <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-text mt-2 mb-4">Missed Shot!</p>
        <p className="text-lg text-text/80 max-w-md mb-8">
          Looks like you've taken a shot from way downtown and missed. The page you're looking for
          is out of bounds.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer">
          Return to Center Court
        </Link>
      </div>
    </main>
  );
}
