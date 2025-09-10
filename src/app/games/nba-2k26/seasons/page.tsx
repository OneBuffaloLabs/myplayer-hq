'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import season1Data from '@/data/games/nba-2k26/season-rewards/1.json';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26' },
  { label: 'Seasons', href: '/games/nba-2k26/seasons' },
];

type Reward = {
  level: number;
  reward: string;
};

type SeasonData = {
  season: number;
  mycareer: Reward[];
  pro: Reward[];
  myteam: Reward[];
};

const seasons: SeasonData[] = [season1Data];

export default function SeasonsPage() {
  const [activeSeason, setActiveSeason] = useState<SeasonData>(seasons[0]);
  const [activeTab, setActiveTab] = useState<'mycareer' | 'pro' | 'myteam'>('mycareer');

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const seasonNumber = parseInt(event.target.value, 10);
    const selectedSeason = seasons.find((s) => s.season === seasonNumber);
    if (selectedSeason) {
      setActiveSeason(selectedSeason);
    }
  };

  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">NBA 2K26 Season Rewards</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Track all seasonal rewards, including the MyCareer, Pro Pass, and MyTeam pass items.
          </p>
        </header>

        <section
          aria-labelledby="season-rewards-explanation"
          className="max-w-4xl mx-auto bg-background-secondary p-6 rounded-lg border border-accent/20 mb-12">
          <h2 id="season-rewards-explanation" className="text-2xl font-bold text-text mb-4">
            The Grind is Back: How Season Rewards Work
          </h2>
          <div className="prose prose-invert max-w-none text-text/90">
            <p className="mb-4">
              NBA 2K26 is doubling down on the grind, bringing back a huge collection of season
              rewards that run parallel to your rep grind. This season, you&apos;re on two free
              reward tracks simultaneously, leveling up your MyCAREER and MyTEAM just by playing the
              game.
            </p>
            <p>
              Want to unlock even more gear and boosts? A third premium track is available if you
              grab the <strong className="text-primary">Pro Pass</strong>. For the ultimate
              grinders, the <strong className="text-primary">Hall of Fame Pass</strong> gives you
              everything in the Pro Pass, plus an instant 10-level skip and a 15% season-long XP
              boost to leave the competition in the dust. You can also skip individual levels for
              $1.99 USD anytime.
            </p>
          </div>
        </section>

        <div className="flex justify-center mb-8">
          <select
            onChange={handleSeasonChange}
            value={activeSeason.season}
            className="bg-background-secondary border-2 border-accent/30 rounded-md p-2 focus:outline-none focus:border-primary cursor-pointer">
            {seasons.map((season) => (
              <option key={season.season} value={season.season}>
                Season {season.season}
              </option>
            ))}
          </select>
        </div>

        <div className="sticky top-[81px] bg-background z-10 py-4 mb-8 flex justify-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('mycareer')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 cursor-pointer ${
                activeTab === 'mycareer'
                  ? 'bg-primary text-background'
                  : 'bg-background-secondary text-text hover:bg-accent/50'
              }`}>
              MyCareer
            </button>
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 cursor-pointer ${
                activeTab === 'pro'
                  ? 'bg-primary text-background'
                  : 'bg-background-secondary text-text hover:bg-accent/50'
              }`}>
              Pro Pass
            </button>
            <button
              onClick={() => setActiveTab('myteam')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 cursor-pointer ${
                activeTab === 'myteam'
                  ? 'bg-primary text-background'
                  : 'bg-background-secondary text-text hover:bg-accent/50'
              }`}>
              MyTeam
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-accent/20">
          <table className="min-w-full text-left">
            <thead className="bg-background-secondary">
              <tr>
                <th className="p-4 font-bold text-center">Level</th>
                <th className="p-4 font-bold">Reward</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent/10">
              {activeSeason[activeTab].map((item) => (
                <tr key={item.level} className="bg-background-secondary/50">
                  <td className="p-4 font-bold text-center">{item.level}</td>
                  <td className="p-4">{item.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
