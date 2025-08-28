import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    <section className="bg-background text-text">
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          The Ultimate <span className="text-primary">NBA 2K</span> Build Headquarters
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Access the most accurate attribute data, badge requirements, and animation unlocks for NBA
          2K26 and beyond.
        </p>
        <Link
          href="/games/nba-2k26"
          className="inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer">
          Explore NBA 2K26 Data <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};
