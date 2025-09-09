'use client';

import { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import tierData from '@/data/games/nba-2k26/badges/tiers.json';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26/' },
  { label: 'Badges Guide', href: '/games/nba-2k26/badges/' },
  { label: 'Badge Tiers', href: '/games/nba-2k26/badges/tiers/' },
];

export default function BadgeTiersPage() {
  const [visibleHeights, setVisibleHeights] = useState<string[]>(tierData.heights);
  const [summaryHeight, setSummaryHeight] = useState<string>(tierData.heights[8]); // Default to 6'5"

  const handleHeightToggle = (height: string, isChecked: boolean) => {
    setVisibleHeights((prev) => {
      const newHeights = isChecked ? [...prev, height] : prev.filter((h) => h !== height);
      // Sort the heights to maintain order
      return tierData.heights.filter((h) => newHeights.includes(h));
    });
  };

  const tierCounts = useMemo(() => {
    if (!summaryHeight) return { tier1: 0, tier2: 0 };
    let tier1 = 0;
    let tier2 = 0;
    tierData.badges.forEach((badge) => {
      const tier = badge.tiers[summaryHeight as keyof typeof badge.tiers];
      if (tier === 1) tier1++;
      if (tier === 2) tier2++;
    });
    return { tier1, tier2 };
  }, [summaryHeight]);

  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            NBA 2K26 Badge Tier Unlocks
          </h1>
        </header>

        {/* Informational Section */}
        <section
          aria-labelledby="tier-system-explanation"
          className="max-w-4xl mx-auto bg-background-secondary p-6 rounded-lg border border-accent/20 mb-8">
          <h2 id="tier-system-explanation" className="text-2xl font-bold text-text mb-4">
            Understanding the New Badge Tiers
          </h2>
          <p className="text-text/80">
            In 2K26, badges are organized into two tiers, and your player's height determines which
            tier each badge falls into. This is critical for build-making because the new{' '}
            <strong className="text-primary">+1 and +2 Max Badge Level perks</strong> can only be
            applied to a limited number of badges in each tier.
          </p>
        </section>

        {/* Interactive Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Height Summary */}
          <section
            aria-labelledby="height-summary-tool"
            className="bg-background-secondary p-6 rounded-lg border border-accent/20">
            <h2 id="height-summary-tool" className="text-xl font-bold text-text mb-4">
              "At a Glance" Height Summary
            </h2>
            <p className="text-sm text-text/80 mb-4">
              Select a height to see the total number of badges available in each tier.
            </p>
            <div className="flex items-center gap-4">
              <select
                value={summaryHeight}
                onChange={(e) => setSummaryHeight(e.target.value)}
                className="w-full bg-background border-2 border-accent/30 rounded-md p-2 focus:outline-none focus:border-primary cursor-pointer">
                {tierData.heights.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <div className="flex-shrink-0 text-center bg-background p-2 rounded-md">
                <p>
                  <span className="font-bold text-primary">{tierCounts.tier1}</span> Tier 1
                </p>
                <p>
                  <span className="font-bold text-text/90">{tierCounts.tier2}</span> Tier 2
                </p>
              </div>
            </div>
          </section>

          {/* Height Filter */}
          <section
            aria-labelledby="height-filter"
            className="bg-background-secondary p-6 rounded-lg border border-accent/20">
            <h2 id="height-filter" className="text-xl font-bold text-text mb-4">
              Show/Hide Heights in Table
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-x-4 gap-y-2">
              {tierData.heights.map((h) => (
                <label key={h} className="flex items-center space-x-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={visibleHeights.includes(h)}
                    onChange={(e) => handleHeightToggle(h, e.target.checked)}
                    className="form-checkbox h-4 w-4 rounded bg-background-secondary border-accent/50 text-primary focus:ring-primary cursor-pointer"
                  />
                  <span>{h}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* Badge Tier Table */}
        <section aria-labelledby="badge-tier-table">
          <h2 id="badge-tier-table" className="sr-only">
            Badge Tiers by Height
          </h2>
          <div className="overflow-x-auto rounded-lg border border-accent/20">
            <table className="min-w-full text-sm text-center border-collapse">
              <thead className="bg-background-secondary">
                <tr>
                  <th className="p-2 font-bold text-left sticky left-0 bg-background-secondary z-10 w-40 min-w-[160px] border-b border-accent/10">
                    Badge
                  </th>
                  {visibleHeights.map((h) => (
                    <th
                      key={h}
                      className="p-2 font-bold w-16 min-w-[64px] border-b border-accent/10">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tierData.badges.map((badge, index) => (
                  <tr
                    key={badge.name}
                    className="[&:nth-child(even)]:bg-background-secondary/40 hover:bg-primary/5">
                    <td className="p-2 font-semibold text-left sticky left-0 z-10 w-40 min-w-[160px] bg-inherit border-r border-accent/10">
                      {badge.name}
                    </td>
                    {visibleHeights.map((h) => {
                      const tier = badge.tiers[h as keyof typeof badge.tiers];
                      const tierClass =
                        tier === 1
                          ? 'bg-primary/20 text-primary font-bold'
                          : tier === 2
                          ? 'bg-accent/10 text-text/80'
                          : 'text-text/30';
                      return (
                        <td
                          key={h}
                          className={`p-2 transition-colors w-16 min-w-[64px] ${tierClass}`}>
                          {tier ?? '—'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
