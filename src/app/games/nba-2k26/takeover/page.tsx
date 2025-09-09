import { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import takeoverData from '@/data/games/nba-2k26/takeover.json';
import { Takeover } from '@/types/takeover';

export const metadata: Metadata = generateMetadata({
  title: 'NBA 2K26 Takeover Guide',
  description:
    'A complete guide to the NBA 2K26 Takeover system. Find all abilities, attribute requirements, and boosts to elevate your game.',
  urlPath: '/games/nba-2k26/takeover/',
});

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'NBA 2K26', href: '/games/nba-2k26/' },
  { label: 'Takeover Guide', href: '/games/nba-2k26/takeover/' },
];

export default function TakeoverPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">NBA 2K26 Takeover Guide</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Explore every Takeover in NBA 2K26. This guide details the attribute thresholds required
            to unlock each ability and the boosts you receive at every level.
          </p>
        </header>

        {/* Custom Takeover Section */}
        <section
          aria-labelledby="custom-takeover-heading"
          className="max-w-4xl mx-auto bg-primary/10 p-6 rounded-lg border border-primary/50 mb-12 text-center">
          <h2 id="custom-takeover-heading" className="text-2xl font-bold text-primary mb-4">
            Unlocking Custom Takeovers
          </h2>
          <p className="text-text/90">
            To unlock the ability to create custom Takeover combinations in MyCAREER, you must first
            unlock all 44 standard Takeovers on a single player. Once you achieve this, fill your
            Takeover progression meter one final time to permanently unlock the custom Takeover
            feature for your entire account.
          </p>
        </section>

        {/* Guide Section */}
        <section
          aria-labelledby="takeover-guide-heading"
          className="max-w-4xl mx-auto bg-background-secondary p-6 rounded-lg border border-accent/20 mb-12">
          <h2 id="takeover-guide-heading" className="text-2xl font-bold text-text mb-4">
            How This Guide Works
          </h2>
          <p className="text-text/80">
            Each Takeover is unlocked by meeting specific attribute thresholds. As your Takeover
            meter fills from Level 1 to 5, your player receives increasing attribute boosts.
          </p>
          <ul className="list-disc list-inside text-text/80 space-y-2 mt-4">
            <li>
              <span className="p-1 w-24 inline-block text-center rounded-md bg-green-800/60 text-green-300 font-bold border border-green-600 mr-2">
                Required
              </span>
              You must meet this attribute rating to unlock the Takeover.
            </li>
            <li>
              <span className="p-1 w-24 inline-block text-center rounded-md bg-blue-800/60 text-blue-300 font-bold border border-blue-600 mr-2">
                Boost Only
              </span>
              This attribute receives a boost but is not required to unlock the Takeover.
            </li>
          </ul>
        </section>

        {/* Takeover Table */}
        <section aria-labelledby="takeover-table-heading">
          <h2 id="takeover-table-heading" className="sr-only">
            Takeover Requirements and Boosts
          </h2>
          <div className="overflow-x-auto rounded-lg border border-accent/20">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-background-secondary">
                <tr>
                  <th className="p-3 font-bold">Takeover</th>
                  <th className="p-3 font-bold">Attribute</th>
                  <th className="p-3 font-bold text-center">Rating</th>
                  <th className="p-3 font-bold text-center">L1</th>
                  <th className="p-3 font-bold text-center">L2</th>
                  <th className="p-3 font-bold text-center">L3</th>
                  <th className="p-3 font-bold text-center">L4</th>
                  <th className="p-3 font-bold text-center">L5</th>
                  <th className="p-3 font-bold">Takeover Ability</th>
                  <th className="p-3 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {(takeoverData as Takeover[]).map((takeover, takeoverIndex) =>
                  takeover.attributes.map((attr, attrIndex) => (
                    <tr
                      key={`${takeover.name}-${attr.name}`}
                      className="[&:nth-child(even)]:bg-background-secondary/40 border-t border-accent/10">
                      {attrIndex === 0 && (
                        <td
                          rowSpan={takeover.attributes.length}
                          className="p-3 font-bold align-top bg-background-secondary/30 border-r border-accent/10 w-40">
                          {takeover.name}
                        </td>
                      )}
                      <td
                        className={`p-2 font-semibold ${
                          attr.isRequirement
                            ? 'bg-green-800/40 text-green-300'
                            : 'bg-blue-800/40 text-blue-300'
                        }`}>
                        {attr.name}
                      </td>
                      <td className="p-2 text-center font-mono">{attr.rating}</td>
                      {attr.boosts.map((boost, i) => (
                        <td key={i} className="p-2 text-center font-mono">
                          {boost > 0 ? `+${boost}` : boost}
                        </td>
                      ))}
                      {attrIndex === 0 && (
                        <td
                          rowSpan={takeover.attributes.length}
                          className="p-3 align-top border-l border-accent/10">
                          <span className="font-bold text-primary">{takeover.takeoverAbility}</span>
                        </td>
                      )}
                      {attrIndex === 0 && (
                        <td
                          rowSpan={takeover.attributes.length}
                          className="p-3 text-text/80 align-top text-sm border-l border-accent/10 max-w-xs">
                          {takeover.description}
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
