'use client';

import { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import badgeData from '@/data/games/nba-2k26/badges/descriptions.json';

type Badge = {
  name: string;
  description: string;
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26' },
  { label: 'Badges Guide', href: '/games/nba-2k26/badges' },
  { label: 'Badge Descriptions', href: '/games/nba-2k26/badges/descriptions' },
];

const allCategories = ['All', ...badgeData.map((cat) => cat.category)];

export default function BadgeDescriptionsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBadges = useMemo(() => {
    let categories = badgeData;

    if (activeCategory !== 'All') {
      categories = categories.filter((cat) => cat.category === activeCategory);
    }

    if (searchTerm) {
      categories = categories
        .map((cat) => ({
          ...cat,
          badges: cat.badges.filter((badge) =>
            badge.name.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((cat) => cat.badges.length > 0);
    }

    return categories;
  }, [activeCategory, searchTerm]);

  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            NBA 2K26 Badge Descriptions
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            View all the badge descriptions for all 40 new and returning badges in NBA 2K26. A new
            badge level, Legend, has been introduced above Hall of Fame.
          </p>
        </header>

        {/* Filters */}
        <div className="sticky top-20 bg-background z-10 py-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex flex-wrap justify-center gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-primary text-background'
                    : 'bg-background-secondary text-text hover:bg-accent/50'
                }`}>
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto md:flex-grow max-w-xs">
            <input
              type="text"
              placeholder="Search badges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background-secondary border-2 border-accent/20 rounded-md p-2 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Badge List */}
        <section aria-label="Badge descriptions list">
          {filteredBadges.length > 0 ? (
            filteredBadges.map(({ category, badges }) => (
              <div key={category} className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent/20 pb-2">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {badges.map((badge) => (
                    <div
                      key={badge.name}
                      className="bg-background-secondary p-6 rounded-lg border border-accent/10">
                      <h3 className="text-xl font-bold text-text mb-2">{badge.name}</h3>
                      <p className="text-text/80">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-text/80">No badges found matching your criteria.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
