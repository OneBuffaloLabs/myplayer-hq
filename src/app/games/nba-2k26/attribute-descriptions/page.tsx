'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import attributeData from '@/data/games/nba-2k26/attributes.json';

type Attribute = {
  name: string;
  description: string;
};

type AttributeCategory = {
  category: string;
  attributes: Attribute[];
};

const AttributeAccordionItem = ({ category, attributes }: AttributeCategory) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open for better initial visibility

  return (
    <div className="border-b border-accent/20">
      <h2 id={`category-header-${category.replace(/\s+/g, '-')}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`category-panel-${category.replace(/\s+/g, '-')}`}
          className="w-full flex justify-between items-center text-left p-4 cursor-pointer hover:bg-accent/10 transition-colors duration-300">
          <span className="text-2xl font-bold text-primary">{category}</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="text-accent h-5 w-5 transition-transform duration-300"
          />
        </button>
      </h2>
      {isOpen && (
        <div
          id={`category-panel-${category.replace(/\s+/g, '-')}`}
          role="region"
          aria-labelledby={`category-header-${category.replace(/\s+/g, '-')}`}
          className="p-6 bg-background-secondary">
          <dl>
            {attributes.map((attr) => (
              <div key={attr.name} className="mb-4">
                <dt className="text-lg font-semibold text-text">{attr.name}</dt>
                <dd className="text-text/80 mt-1">{attr.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
};

export default function AttributeDescriptionsPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            NBA 2K26 Attribute Descriptions
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-text/80">
            Understand how each attribute in NBA 2K26 impacts your player's performance on the
            court. This guide breaks down every rating from Finishing to Defense.
          </p>
        </header>

        <section
          aria-label="Attribute Categories"
          className="max-w-4xl mx-auto rounded-lg border border-accent/20 overflow-hidden">
          {attributeData.map((category) => (
            <AttributeAccordionItem key={category.category} {...category} />
          ))}
        </section>
      </div>
    </main>
  );
}
