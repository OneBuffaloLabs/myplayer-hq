'use client';

import { useState } from 'react';
import { Takeover } from '@/types/takeover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type TakeoverAccordionItemProps = {
  takeover: Takeover;
};

export const TakeoverAccordionItem = ({ takeover }: TakeoverAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Replaced the wrapper div with a Fragment to make the component more modular
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 cursor-pointer hover:bg-accent/10 transition-colors duration-300"
        aria-expanded={isOpen}
        aria-controls={`takeover-panel-${takeover.name.replace(/\s+/g, '-')}`}>
        <div>
          <h3 className="text-xl font-bold text-text">{takeover.name}</h3>
          <p className="font-semibold text-primary text-sm">{takeover.takeoverAbility}</p>
        </div>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="text-accent h-5 w-5 transition-transform duration-300"
        />
      </button>
      {isOpen && (
        <div
          id={`takeover-panel-${takeover.name.replace(/\s+/g, '-')}`}
          role="region"
          className="p-4 bg-background-secondary border-t border-accent/20">
          <p className="text-text/80 mb-6 text-sm">{takeover.description}</p>
          <div className="overflow-x-auto rounded-lg border border-accent/20">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-background">
                <tr>
                  <th className="p-3 font-bold text-text">Attribute</th>
                  <th className="p-3 font-bold text-center text-text">Rating</th>
                  <th className="p-3 font-bold text-center text-text">L1</th>
                  <th className="p-3 font-bold text-center text-text">L2</th>
                  <th className="p-3 font-bold text-center text-text">L3</th>
                  <th className="p-3 font-bold text-center text-text">L4</th>
                  <th className="p-3 font-bold text-center text-text">L5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent/10">
                {takeover.attributes.map((attr) => (
                  <tr key={attr.name} className="[&:nth-child(even)]:bg-background-secondary/40">
                    <td
                      className={`p-2 font-semibold ${
                        attr.isRequirement
                          ? 'bg-green-800/40 text-green-300'
                          : 'bg-blue-800/40 text-blue-300'
                      }`}>
                      {attr.name}
                    </td>
                    <td className="p-2 text-center font-mono text-text">
                      {attr.rating === 25 ? '—' : attr.rating}
                    </td>
                    {attr.boosts.map((boost, i) => (
                      <td key={i} className="p-2 text-center font-mono text-text">
                        {boost > 0 ? `+${boost}` : boost}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
