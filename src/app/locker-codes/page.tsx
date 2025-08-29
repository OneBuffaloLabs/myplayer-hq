import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
// import lockerCodes2k26 from '@/data/locker-codes/2k26.json';
import lockerCodes2k25 from '@/data/locker-codes/2k25.json';
import { LockerCodeList } from '@/components/locker-codes/LockerCodeList';
import { FaqAccordion } from '@/components/locker-codes/FaqAccordion';

type LockerCode = {
  releaseDate: string;
  code: string;
  reward: string;
  expiration: string;
  game: string;
};

// Combine and process codes on the server
const allLockerCodes: LockerCode[] = [
  // ...lockerCodes2k26.map((code) => ({ ...code, game: 'NBA 2K26' })),
  ...lockerCodes2k25.map((code) => ({ ...code, game: 'NBA 2K25' })),
].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K Locker Codes',
  description:
    'Find the latest NBA 2K locker codes for free in-game rewards. This page is always up to date.',
});

export default function LockerCodesPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">NBA 2K Locker Codes</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Find the list of all NBA 2K Locker Codes here. You can enter these free codes in the
            game or the app to receive in-game rewards. This page will always be kept up to date
            with the most recent codes.
          </p>
        </header>

        <LockerCodeList codes={allLockerCodes} />

        {/* Notes Section */}
        <div className="text-center mt-12 text-sm text-text/60 space-y-2">
          <p>*Locker Codes typically expire after 1 week.</p>
          <p>*Expiration time is an estimate based on the time the Locker Code was posted by 2K.</p>
        </div>

        <FaqAccordion />
      </div>
    </main>
  );
}
