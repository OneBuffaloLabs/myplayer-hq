'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-accent/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 cursor-pointer hover:bg-accent/10">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="text-primary h-5 w-5 transition-transform duration-300"
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-background-secondary ">
          <div className="prose prose-invert max-w-none text-text/90">{children}</div>
        </div>
      )}
    </div>
  );
};

export const FaqAccordion = () => {
  return (
    <section className="container mx-auto mt-16">
      <h2 className="text-3xl md:text-5xl font-bold text-text mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="rounded-lg border border-accent/20 overflow-hidden">
        <AccordionItem title="What is a Locker Code?">
          <p>
            A Locker Code is a special text code you can enter in NBA 2K to unlock free in-game
            items. Most of the time, these codes will reward you with MyTEAM players and packs, but
            2K also releases codes for MyCAREER that can give you cosmetic items or XP boosts.
          </p>
          <h4 className="font-bold text-text mt-4">Do Locker Codes expire?</h4>
          <p>
            Yes, most Locker Codes are time-sensitive and typically expire about a week after they
            are released, unless 2K specifies a different expiration date.
          </p>
          <h4 className="font-bold text-text mt-4">Where do Locker Codes come from?</h4>
          <p>
            2K typically releases new Locker Codes on their official{' '}
            <a
              href="https://x.com/NBA2K"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline">
              X (formerly Twitter) account
            </a>
            . We keep this page updated so you don&apos;t have to hunt for them!
          </p>
        </AccordionItem>
        <AccordionItem title="How to Redeem Locker Codes">
          <p>To redeem a Locker Code, you can head to either the MyTEAM or MyCAREER game modes.</p>
          <h4 className="font-bold text-text mt-4">In MyTEAM:</h4>
          <ol>
            <li>
              Navigate to the <strong>Market</strong> tab.
            </li>
            <li>
              Select the <strong>Locker Codes</strong> option.
            </li>
            <li>Enter the code exactly as it appears, including dashes.</li>
          </ol>
          <h4 className="font-bold text-text mt-4">In MyCAREER:</h4>
          <ol>
            <li>
              Navigate to the <strong>Options/Quit</strong> menu.
            </li>
            <li>
              Select the <strong>Locker Codes</strong> option.
            </li>
            <li>Enter the code, including dashes, and redeem.</li>
          </ol>
          <h4 className="font-bold text-text mt-4">Important Tips:</h4>
          <ul>
            <li>
              <strong>Dashes are crucial:</strong> Make sure to enter all hyphens exactly as they
              appear.
            </li>
            <li>
              <strong>Case Matters:</strong> Locker codes are usually in all capital letters.
            </li>
            <li>
              <strong>Be Quick:</strong> Many codes are time-sensitive and can expire, so redeem
              them as soon as you can!
            </li>
          </ul>
        </AccordionItem>
      </div>
    </section>
  );
};
