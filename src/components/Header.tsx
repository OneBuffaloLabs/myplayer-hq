'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { href: '/games', label: 'Games' },
  { href: '/locker-codes', label: 'Locker Codes' },
  { href: '/2ktv-answers', label: '2KTV Answers' },
  { href: '/about', label: 'About' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-accent">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/images/shield.svg"
            alt="MyPlayerHQ Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-2xl font-bold text-text">MyPlayerHQ</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-text hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com/onebuffalolabs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MyPlayerHQ on Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-text hover:text-primary h-6 w-6" />
          </a>
          <button
            className="md:hidden text-text cursor-pointer"
            onClick={toggleMenu}
            aria-label="Open mobile menu">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-background flex flex-col items-center space-y-8 pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl text-text hover:text-primary"
              onClick={toggleMenu}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
