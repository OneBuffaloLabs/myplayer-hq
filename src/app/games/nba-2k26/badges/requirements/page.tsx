'use client';

import { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import badgeData from '@/data/games/nba-2k26/badges/requirements.json';
import { BadgeRequirement, BadgeRequirementCategory } from '@/types/badges';
import { formatHeight } from '@/helpers/formatters';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26/' },
  { label: 'Badges Guide', href: '/games/nba-2k26/badges/' },
  { label: 'Badge Requirements', href: '/games/nba-2k26/badges/requirements/' },
];

// Helper to group requirements by badge name
const groupRequirementsByBadge = (
  requirements: BadgeRequirement[]
): Record<string, BadgeRequirement[]> => {
  return requirements.reduce((acc, req) => {
    if (!acc[req.badge]) {
      acc[req.badge] = [];
    }
    acc[req.badge].push(req);
    return acc;
  }, {} as Record<string, BadgeRequirement[]>);
};

export default function BadgeRequirementsPage() {
  const categories = useMemo(
    () => (badgeData as BadgeRequirementCategory[]).map((c) => c.category),
    []
  );
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [activeFilter, setActiveFilter] = useState('All');

  const allAttributes = useMemo(() => {
    const attributes = new Set<string>();
    (badgeData as BadgeRequirementCategory[]).forEach((category) => {
      category.data.forEach((req) => {
        attributes.add(req.attribute);
      });
    });
    return ['All', ...Array.from(attributes).sort()];
  }, []);

  const filteredAndGroupedBadges = useMemo(() => {
    const activeCategoryData = (badgeData as BadgeRequirementCategory[]).find(
      (c) => c.category === activeTab
    );

    if (!activeCategoryData) return {};

    if (activeFilter === 'All') {
      return groupRequirementsByBadge(activeCategoryData.data);
    }

    // Find all badge names that have at least one requirement matching the filter
    const matchingBadgeNames = new Set(
      activeCategoryData.data
        .filter((req) => req.attribute === activeFilter)
        .map((req) => req.badge)
    );

    // Get ALL requirements for those matched badges
    const finalRows = activeCategoryData.data.filter((req) => matchingBadgeNames.has(req.badge));

    return groupRequirementsByBadge(finalRows);
  }, [activeTab, activeFilter]);

  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            NBA 2K26 Badge Requirements
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Find the exact attribute and height requirements for every badge. Use the filter to see
            which badges are affected by a specific attribute.
          </p>
        </header>

        {/* Filter Controls */}
        <div className="sticky top-[81px] bg-background z-10 py-4 mb-8 flex justify-center">
          <div className="flex items-center gap-4">
            <label htmlFor="attribute-filter" className="font-semibold text-lg text-text">
              Filter by Attribute:
            </label>
            <select
              id="attribute-filter"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="bg-background-secondary border-2 border-accent/30 rounded-md p-2 focus:outline-none focus:border-primary cursor-pointer">
              {allAttributes.map((attr) => (
                <option key={attr} value={attr}>
                  {attr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Guide */}
        <div className="max-w-4xl mx-auto bg-background-secondary p-6 rounded-lg border border-accent/20 mb-12">
          <h2 id="badge-requirements-guide" className="text-2xl font-bold text-text mb-4">
            How to Use This Guide
          </h2>
          <p className="text-text/80 mb-4">
            These are the attribute thresholds required to unlock each badge in NBA 2K26. This chart
            is updated as 2K provides official information.
          </p>
          <ul className="list-disc list-inside text-text/80 space-y-2">
            <li>
              <span className="w-4 h-4 inline-block rounded-sm bg-green-700/50 border border-green-500 mr-2 align-middle"></span>
              <strong>Green (AND):</strong> Both attributes are required to unlock the badge.
            </li>
            <li>
              <span className="w-4 h-4 inline-block rounded-sm bg-yellow-700/50 border border-yellow-500 mr-2 align-middle"></span>
              <strong>Yellow (OR):</strong> You only need to meet the threshold for one of the
              listed attributes.
            </li>
            <li>
              <strong>No Color:</strong> This is the only attribute required to unlock the badge.
            </li>
          </ul>
        </div>

        {/* Tab Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8 border-b-2 border-accent/20 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 cursor-pointer ${
                activeTab === category
                  ? 'bg-primary text-background'
                  : 'bg-background-secondary text-text hover:bg-accent/50'
              }`}>
              {category}
            </button>
          ))}
        </nav>

        {/* Badge Table Section */}
        <section aria-labelledby="badge-category-heading">
          <h2 id="badge-category-heading" className="sr-only">
            {activeTab} Badges
          </h2>
          {Object.keys(filteredAndGroupedBadges).length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-accent/20">
              <table className="min-w-full text-left">
                <thead className="bg-background-secondary">
                  <tr>
                    <th className="p-4 font-bold">Badge</th>
                    <th className="p-4 font-bold">Attribute</th>
                    <th className="p-4 font-bold text-center text-yellow-600">Bronze</th>
                    <th className="p-4 font-bold text-center text-slate-400">Silver</th>
                    <th className="p-4 font-bold text-center text-yellow-400">Gold</th>
                    <th className="p-4 font-bold text-center text-purple-400">HOF</th>
                    <th className="p-4 font-bold text-center text-red-500">Legend</th>
                    <th className="p-4 font-bold text-center">Min Ht</th>
                    <th className="p-4 font-bold text-center">Max Ht</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent/10">
                  {Object.entries(filteredAndGroupedBadges).map(([badgeName, requirements]) =>
                    requirements.map((req, index) => {
                      const conditionClass =
                        req.condition === 'AND'
                          ? 'bg-green-800/40'
                          : req.condition === 'OR'
                          ? 'bg-yellow-800/40'
                          : 'bg-transparent';

                      return (
                        <tr
                          key={`${badgeName}-${req.attribute}`}
                          className="bg-background-secondary/50">
                          {index === 0 && (
                            <td
                              rowSpan={requirements.length}
                              className="p-4 font-bold align-top border-r border-accent/10">
                              {badgeName}
                            </td>
                          )}
                          <td className={`p-4 font-semibold ${conditionClass}`}>{req.attribute}</td>
                          <td className="p-4 text-center">{req.bronze}</td>
                          <td className="p-4 text-center">{req.silver}</td>
                          <td className="p-4 text-center">{req.gold}</td>
                          <td className="p-4 text-center">{req.hof}</td>
                          <td className="p-4 text-center">{req.legend}</td>
                          <td className="p-4 text-center">{formatHeight(req.minHeight)}</td>
                          <td className="p-4 text-center">{formatHeight(req.maxHeight)}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-16 bg-background-secondary rounded-lg">
              <p className="text-xl text-text/80">
                No badges in {activeTab} match the attribute &quot;{activeFilter}&quot;.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
