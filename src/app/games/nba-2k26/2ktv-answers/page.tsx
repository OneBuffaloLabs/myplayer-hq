import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import { TwoKTVAnswers } from '@/components/games/TwoKTVAnswers';
import twoKTVData from '@/data/2ktv-answers/nba-2k26.json';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 2KTV Answers',
  description: 'All NBA 2K26 2KTV answers will be available here as soon as the season starts.',
});

export default function NBA2k26_2KTVPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">NBA 2K26 2KTV Answers</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Get free VC by answering all of the 2KTV trivia questions correctly. Here are all the
            answers for NBA 2K26.
          </p>
        </header>
        <TwoKTVAnswers episodes={twoKTVData} />
      </div>
    </main>
  );
}
