// onebuffalolabs/myplayer-hq/myplayer-hq-fca6efcca10df1b2c79385ad5bcd394b7d045bd4/src/app/games/nba-2k26/build-specializations/page.tsx
'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import specializationsData from '@/data/games/nba-2k26/build-specializations.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26' },
  { label: 'Build Specializations', href: '/games/nba-2k26/build-specializations' },
];

const SpecializationCard = ({ specialization }: { specialization: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background-secondary rounded-lg border border-accent/20 flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center text-left p-4 cursor-pointer hover:bg-accent/10 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-primary">{specialization.name}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="text-accent h-5 w-5 transition-transform duration-300"
        />
      </button>
      {isOpen && (
        <div className="p-6 bg-background-secondary border-t border-accent/20">
          <div className="prose prose-invert max-w-none text-text/90">
            <p>{specialization.description}</p>
            <h3 className="text-xl font-bold text-text mt-4">Requirements:</h3>
            <ul>
              {specialization.requirements.map((req: string, index: number) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-text my-4">Goals & Rewards:</h3>
            <div className="overflow-x-auto rounded-lg border border-accent/20">
              <table className="min-w-full text-left">
                <thead className="bg-background">
                  <tr>
                    <th className="p-3 font-bold text-text">Goal</th>
                    <th className="p-3 font-bold text-text">Objective</th>
                    <th className="p-3 font-bold text-text">Reward</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent/10">
                  {specialization.goals.map((goal: any, index: number) => (
                    <tr key={index}>
                      <td className="p-2 font-semibold">{goal.goal}</td>
                      <td className="p-2">{goal.objective}</td>
                      <td className="p-2">{goal.reward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function BuildSpecializationsPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            NBA 2K26 Build Specializations
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            The Requirements and Rewards for each NBA 2k26 Build Specialization can be found below.
            Once you select your specialization, you cannot change it. If you make a new build, you
            will have the same progress as your older builds. Additionally, you can use your Build
            Specialization Cap Breakers on Physicals.
          </p>
        </header>

        <section
          aria-labelledby="specializations-explanation"
          className="max-w-4xl mx-auto bg-background-secondary p-6 rounded-lg border border-accent/20 mb-12">
          <h2 id="specializations-explanation" className="text-2xl font-bold text-text mb-4">
            How Build Specializations Work
          </h2>
          <div className="prose prose-invert max-w-none text-text/90">
            <h3 className="text-xl font-bold text-text mt-4">Unlocking Specializations</h3>
            <p>
              To unlock a specialization, your player must meet the specific attribute requirements
              listed for each category. These requirements are based on your current attribute
              ratings.
            </p>
            <h3 className="text-xl font-bold text-text mt-4">Benefits</h3>
            <p>
              Each specialization provides unique challenges, rewards, and gameplay bonuses that
              enhance your player's abilities in that specific area of the game.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-start">
          {specializationsData.map((specialization) => (
            <SpecializationCard key={specialization.name} specialization={specialization} />
          ))}
        </section>
      </div>
    </main>
  );
}
