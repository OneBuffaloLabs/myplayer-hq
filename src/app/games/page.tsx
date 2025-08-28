import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata } from '@/utils/metadata';
import gamesData from '@/data/games.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Define the type for a single game
type Game = {
  title: string;
  slug: string;
  status: 'active' | 'legacy' | 'future';
  logoUrl: string;
  subtitle?: string;
};

// Cast the imported JSON data to the correct type
const games: Game[] = gamesData as Game[];

export const metadata: Metadata = generateMetadata({
  title: 'All Games',
  description: 'Select your game and dive into the most detailed NBA 2K data available.',
});

export default function GamesPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">All Games</h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-text/80">
            Select a game to access our comprehensive database of builds, badges, and animations.
          </p>
        </header>

        <div className="space-y-8">
          {games.map((game) => (
            <GameListItem key={game.slug} {...game} />
          ))}
        </div>
      </div>
    </main>
  );
}

const GameListItem = ({ title, slug, status, logoUrl, subtitle }: Game) => {
  const isClickable = status === 'active';

  const content = (
    <div
      className={`
      flex flex-col md:flex-row items-center rounded-lg p-6 border-2 transition-all duration-300 min-h-[160px] mb-5
      ${
        status === 'active'
          ? 'bg-primary/5 border-primary/50 hover:border-primary cursor-pointer'
          : ''
      }
      ${status === 'legacy' ? 'bg-gray-900/50 border-gray-700 opacity-60 cursor-not-allowed' : ''}
      ${
        status === 'future'
          ? 'bg-transparent border-dashed border-accent opacity-70 cursor-not-allowed'
          : ''
      }
    `}>
      <Image
        src={logoUrl}
        alt={`${title} Logo`}
        width={160}
        height={90}
        className="mb-4 md:mb-0 md:mr-6 flex-shrink-0"
      />
      <div className="flex-grow text-center md:text-left">
        <h2 className="text-2xl font-bold text-text">{title}</h2>
        {subtitle && <p className="text-accent text-md mt-1">{subtitle}</p>}
      </div>
      {isClickable && (
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-primary h-6 w-6 mt-4 md:mt-0 md:ml-auto flex-shrink-0"
        />
      )}
    </div>
  );

  if (isClickable) {
    return <Link href={`/games/${slug}`}>{content}</Link>;
  }

  return content;
};
