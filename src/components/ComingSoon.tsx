import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

type ComingSoonProps = {
  title: string;
  subtitle: string;
  message: string;
};

export const ComingSoon = ({ title, subtitle, message }: ComingSoonProps) => {
  return (
    <main className="bg-background text-text">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <FontAwesomeIcon icon={faClock} size="4x" className="text-accent mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-primary">{title}</span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-text mt-2 mb-4">{subtitle}</p>
        <p className="text-lg text-text/80 max-w-xl mb-8">{message}</p>
        <Link
          href="/"
          className="inline-block bg-primary text-background font-bold py-3 px-8 rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer">
          Return Home
        </Link>
      </div>
    </main>
  );
};
