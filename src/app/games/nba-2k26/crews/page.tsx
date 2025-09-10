'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import crewsData from '@/data/games/nba-2k26/crews.json';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26/' },
  { label: 'Crews', href: '/games/nba-2k26/crews/' },
];

export default function CrewsPage() {
  const [activeSeason, setActiveSeason] = useState(crewsData.seasons[0]);

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const seasonNumber = parseInt(event.target.value, 10);
    const selectedSeason = crewsData.seasons.find((s) => s.season === seasonNumber);
    if (selectedSeason) {
      setActiveSeason(selectedSeason);
    }
  };

  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">NBA 2K26 Crews</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            {crewsData.explanation.intro}
          </p>
        </header>

        <section
          aria-labelledby="crews-explanation"
          className="max-w-4xl mx-auto bg-background-secondary p-6 rounded-lg border border-accent/20 mb-12">
          <h2 id="crews-explanation" className="text-2xl font-bold text-text mb-4">
            Level Up Your Squad: How Crews Work
          </h2>
          <div className="prose prose-invert max-w-none text-text/90">
            <p>{crewsData.explanation.details}</p>
            <p>{crewsData.explanation.rewards}</p>
          </div>
        </section>

        <div className="flex justify-center mb-8">
          <select
            onChange={handleSeasonChange}
            value={activeSeason.season}
            className="bg-background-secondary border-2 border-accent/30 rounded-md p-2 focus:outline-none focus:border-primary cursor-pointer">
            {crewsData.seasons.map((season) => (
              <option key={season.season} value={season.season}>
                Season {season.season}
              </option>
            ))}
          </select>
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
              {activeSeason.rewards.map((item) => (
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
