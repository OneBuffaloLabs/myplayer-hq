import { Metadata } from 'next';
import Image from 'next/image';
import { generateMetadata } from '@/utils/metadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBullseye, faUsers, faBolt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description:
    'Learn about the team and mission behind MyPlayerHQ, a community-driven resource for NBA 2K.',
});

type TeamMember = {
  role: string;
  name: string;
  bio: string;
  imageUrl: string;
  links: {
    href: string;
    icon: IconDefinition;
    label: string;
  }[];
};

const teamMembers: TeamMember[] = [
  {
    role: 'The Architect',
    name: 'Bana0615',
    bio: 'The developer and coding force behind MyPlayerHQ. With a passion for clean code and accurate data, he built the technical foundation to ensure the site is fast, reliable, and easy to use.',
    imageUrl: '/assets/images/shield.png', // Placeholder image
    links: [{ href: 'https://github.com/Bana0615', icon: faGithub, label: 'GitHub' }],
  },
  // {
  //   role: 'The Playmaker',
  //   name: 'Your Name Here',
  //   bio: "The voice of the community and content creator for MyPlayerHQ. He translates the data into engaging content and ensures the community's feedback shapes the future of the site.",
  //   imageUrl: '/assets/images/shield.png', // Placeholder image
  //   links: [
  //     { href: '#Youtube', icon: faYoutube, label: 'YouTube' },
  //     { href: '#Twitch', icon: faTwitch, label: 'Twitch' },
  //   ],
  // },
];

type Philosophy = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const philosophies: Philosophy[] = [
  {
    icon: faBullseye,
    title: 'Data Accuracy',
    description:
      "We're obsessed with precision. Our data is constantly updated to ensure you have the most reliable information.",
  },
  {
    icon: faUsers,
    title: 'Community Focused',
    description:
      "This site is for you. We're always listening to feedback to build the features the community needs.",
  },
  {
    icon: faBolt,
    title: 'Clean and Fast',
    description:
      'No clutter, no nonsense. Just the data you need, presented in a clean, fast, and accessible way.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-text">
      <div className="container mx-auto px-4 py-16">
        {/* Section 1: Our Mission */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Built for <span className="text-primary">Ballers</span>, By{' '}
            <span className="text-primary">Ballers</span>.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text/80">
            MyPlayerHQ was born from a passion for NBA 2K and a desire to create the most accurate,
            reliable, and user-friendly resource for the community. We were tired of inaccurate data
            and cluttered websites, so we decided to build the solution ourselves. This is a passion
            project from the team at{' '}
            <a
              href="https://onebuffalogames.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-accent">
              One Buffalo Games
            </a>
            .
          </p>
        </section>

        {/* Section 2: Meet the Team */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-text mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-background-secondary p-8 rounded-lg border border-accent/30 text-center">
                <Image
                  src={member.imageUrl}
                  alt={`${member.name}'s profile picture`}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-2 border-accent"
                />
                <h3 className="text-2xl font-bold text-primary">{member.role}</h3>
                <p className="text-xl font-semibold text-text mb-2">{member.name}</p>
                <p className="text-text/80 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-text/80 hover:text-primary">
                      <FontAwesomeIcon icon={link.icon} size="2x" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Our Game Plan */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-text mb-12">
            Our Game Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item) => (
              <div
                key={item.title}
                className="bg-background-secondary p-6 rounded-lg border border-accent/30 text-center">
                <FontAwesomeIcon icon={item.icon} size="3x" className="text-primary mb-4" />
                <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                <p className="text-text/80">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
