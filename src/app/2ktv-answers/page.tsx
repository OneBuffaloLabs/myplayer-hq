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
  title: 'NBA 2KTV Answers',
  description:
    'Find all the answers for NBA 2KTV to earn free VC. Select your game to see the answers for every episode.',
});

export default function TwoKTVHubPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">2KTV Answers</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Earn free VC by answering trivia questions during the in-game 2KTV show. Select a game
            below to find all the correct answers for every episode.
          </p>
        </header>

        <div className="space-y-8 max-w-4xl mx-auto">
          {games
            .filter((g) => g.status !== 'future')
            .map((game) => (
              <Link href={`/games/${game.slug}/2ktv-answers`} key={game.slug}>
                <div className="mb-5 flex items-center rounded-lg p-6 border-2 border-primary/50 bg-primary/5 hover:border-primary transition-all duration-300 cursor-pointer min-h-[160px]">
                  <Image
                    src={game.logoUrl}
                    alt={`${game.title} Logo`}
                    width={160}
                    height={90}
                    className="mr-6 flex-shrink-0"
                  />
                  <div className="flex-grow text-left">
                    <h2 className="text-2xl font-bold text-text">{game.title} 2KTV Answers</h2>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-primary h-6 w-6 ml-auto flex-shrink-0"
                  />
                </div>
              </Link>
            ))}
        </div>

        {/* What is 2KTV Section */}
        <section className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-8">What is 2KTV?</h2>
          <div className="prose prose-invert max-w-none text-text/90 mx-auto">
            <p>
              2KTV is the official in-game show of NBA 2K, hosted by Alexis Morgan and Chris
              Manning. Each episode features interviews with NBA stars, members of the 2K
              development team, and community influencers.
            </p>
            <p>
              Throughout the show, trivia questions will pop up on the screen. Answering them
              correctly rewards you with free VC (Virtual Currency) that you can spend in any game
              mode. It&apos;s one of the easiest ways to earn VC just by watching!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
