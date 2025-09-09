'use client';

import { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TakeoverDetailModal } from '@/components/games/TakeoverDetailModal';
import takeoverData from '@/data/games/nba-2k26/takeover.json';
import { Takeover } from '@/types/takeover';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26/' },
  { label: 'Takeover Guide', href: '/games/nba-2k26/takeover/' },
];

const allTakeovers = takeoverData as Takeover[];
const allAbilities = ['All', ...Array.from(new Set(allTakeovers.map((t) => t.takeoverAbility)))];
const allAttributes = [
  'All',
  ...Array.from(new Set(allTakeovers.flatMap((t) => t.attributes.map((a) => a.name)))),
].sort();

export default function TakeoverPage() {
  const [selectedTakeover, setSelectedTakeover] = useState<Takeover | null>(null);
  const [abilityFilter, setAbilityFilter] = useState('All');
  const [attributeFilter, setAttributeFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTakeovers = useMemo(() => {
    return allTakeovers.filter((takeover) => {
      const nameMatch = takeover.name.toLowerCase().includes(searchTerm.toLowerCase());
      const abilityMatch = abilityFilter === 'All' || takeover.takeoverAbility === abilityFilter;
      const attributeMatch =
        attributeFilter === 'All' ||
        takeover.attributes.some((attr) => attr.name === attributeFilter);
      return nameMatch && abilityMatch && attributeMatch;
    });
  }, [searchTerm, abilityFilter, attributeFilter]);

  return (
    <>
      <TakeoverDetailModal takeover={selectedTakeover} onClose={() => setSelectedTakeover(null)} />
      <main className="bg-background text-text">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} />
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">NBA 2K26 Takeover Guide</h1>
          </header>

          <section
            aria-labelledby="custom-takeover-heading"
            className="max-w-4xl mx-auto bg-primary/10 p-6 rounded-lg border border-primary/50 mb-12 text-center">
            <h2 id="custom-takeover-heading" className="text-2xl font-bold text-primary mb-4">
              Unlocking Custom Takeovers
            </h2>
            <p className="text-text/90">
              To unlock the ability to create custom Takeover combinations in MyCAREER, you must
              first unlock all 44 standard Takeovers on a single player. Once you achieve this, fill
              your Takeover progression meter one final time to permanently unlock the custom
              Takeover feature for your entire account.
            </p>
          </section>

          {/* Filter Controls */}
          <section
            aria-labelledby="filter-controls"
            className="bg-background-secondary p-6 rounded-lg border border-accent/20 mb-12">
            <h2 id="filter-controls" className="text-xl font-bold text-text mb-4">
              Filter Takeovers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="search-takeover-name"
                  className="block text-sm font-medium text-text/80 mb-1">
                  Search by Name
                </label>
                <input
                  id="search-takeover-name"
                  type="search"
                  placeholder="e.g., Finisher"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-background border-2 border-accent/30 rounded-md p-2 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="filter-ability"
                  className="block text-sm font-medium text-text/80 mb-1">
                  Filter by Ability
                </label>
                <select
                  id="filter-ability"
                  value={abilityFilter}
                  onChange={(e) => setAbilityFilter(e.target.value)}
                  className="w-full bg-background border-2 border-accent/30 rounded-md p-2 focus:outline-none focus:border-primary cursor-pointer">
                  {allAbilities.map((ability) => (
                    <option key={ability} value={ability}>
                      {ability}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="filter-attribute"
                  className="block text-sm font-medium text-text/80 mb-1">
                  Filter by Attribute
                </label>
                <select
                  id="filter-attribute"
                  value={attributeFilter}
                  onChange={(e) => setAttributeFilter(e.target.value)}
                  className="w-full bg-background border-2 border-accent/30 rounded-md p-2 focus:outline-none focus:border-primary cursor-pointer">
                  {allAttributes.map((attr) => (
                    <option key={attr} value={attr}>
                      {attr}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Takeover Cards Grid */}
          <section aria-labelledby="takeover-list">
            <h2 id="takeover-list" className="sr-only">
              List of Takeovers
            </h2>
            {filteredTakeovers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTakeovers.map((takeover) => (
                  <div
                    key={takeover.name}
                    className="bg-background-secondary p-6 rounded-lg border border-accent/20 flex flex-col items-start hover:border-primary transition-colors duration-300">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-text mb-1">{takeover.name}</h3>
                      <p className="font-semibold text-primary text-sm">
                        {takeover.takeoverAbility}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedTakeover(takeover)}
                      className="mt-4 w-full bg-primary text-background font-bold py-2 px-4 rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-background-secondary rounded-lg">
                <p className="text-xl text-text/80">No Takeovers match your filters.</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
