'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Data for links to keep the component clean
const navLinks = [
  { href: '/games', label: 'Games' },
  { href: '/locker-codes', label: 'Locker Codes' },
  { href: '/2ktv-answers', label: '2KTV Answers' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: 'https://onebuffalogames.com/contact/', label: 'Contact Us' },
];

const socialLinks = [
  { href: 'https://twitter.com/onebuffalolabs', label: 'Twitter', icon: faTwitter },
  //   { href: 'https://discord.gg/yourserver', label: 'Discord', icon: faDiscord },
  //   { href: 'https://youtube.com/yourchannel', label: 'YouTube', icon: faYoutube },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightYear = 2025 === currentYear ? '2025' : `2025 - ${currentYear}`;

  return (
    <footer className="bg-background border-t border-accent/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Image
                src="/assets/images/shield.svg"
                alt="MyPlayerHQ Logo"
                width={48}
                height={48}
                priority
              />
              <span className="text-xl font-bold text-text">MyPlayerHQ</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-text mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text/80 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-text mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => {
                const isExternal = link.href.startsWith('http');
                const linkProps = isExternal
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text/80 hover:text-primary"
                      {...linkProps}>
                      {link.label}
                      {isExternal && (
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="h-3 w-3 ml-1.5"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-text mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text/80 hover:text-primary">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mb-8">
          <p className="text-xs text-text/50 max-w-2xl mx-auto">
            MyPlayerHQ is not affiliated with, endorsed by, or sponsored by 2K Games or Take-Two
            Interactive. NBA 2K, MyPLAYER, and all related logos are trademarks of Take-Two
            Interactive Software, Inc.
          </p>
        </div>

        {/* Bottom bar with copyright and credit */}
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text/60 space-y-4 md:space-y-0">
          <p>&copy; {copyrightYear} MyPlayerHQ. All rights reserved.</p>
          <p>
            Website by{' '}
            <a
              href="https://onebuffalogames.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline">
              OneBuffaloGames
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
