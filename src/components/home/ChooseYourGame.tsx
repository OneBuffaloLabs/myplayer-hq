import Link from 'next/link';
import Image from 'next/image';
import gamesData from '@/data/games.json';

// Define the type for a single game
type Game = {
  title: string;
  slug: string;
  status: 'active' | 'legacy' | 'future';
  logoUrl: string;
  subtitle?: string; // Subtitle is optional
};

// Cast the imported JSON data to the correct type
const games: Game[] = gamesData as Game[];

const GameCard = ({ title, slug, status, logoUrl, subtitle }: Game) => {
  const isClickable = status === 'active';
  const cardContent = (
    <div
      className={`
        h-full border-2 rounded-lg p-8 text-center transition-all duration-300 transform
        ${
          status === 'active'
            ? 'border-primary bg-primary/10 hover:bg-primary/20 hover:-translate-y-2'
            : ''
        }
        ${status === 'legacy' ? 'border-gray-700 bg-gray-900/50 cursor-not-allowed opacity-50' : ''}
        ${
          status === 'future'
            ? 'border-dashed border-accent bg-transparent cursor-not-allowed opacity-60'
            : ''
        }
      `}>
      <div className="flex flex-col justify-center items-center h-full">
        <Image
          src={logoUrl}
          alt={`${title} Logo`}
          width={160}
          height={90}
          className="mx-auto mb-4"
        />
        <h3 className="text-2xl font-bold text-text">{title}</h3>
        {subtitle && <p className="text-accent text-sm mt-2">{subtitle}</p>}
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <Link href={`/games/${slug}`} className="cursor-pointer">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export const ChooseYourGame = () => {
  return (
    <section className="bg-background-secondary  py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text mb-12">Choose Your Game</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.slug} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};
