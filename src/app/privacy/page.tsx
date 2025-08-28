import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for MyPlayerHQ, your ultimate resource for NBA 2K builds, badges, and animations.',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-text min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-text/90">
          <p className="text-text/70">Last Updated: August 28, 2025</p>

          <h2 className="text-2xl font-bold text-text mt-8">Introduction</h2>
          <p>
            Welcome to MyPlayerHQ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are
            committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website, MyPlayerHQ. Please
            read this privacy policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may
            collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when
              you access the Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly before and after
              accessing the Site.
            </li>
            <li>
              <strong>Usage Data:</strong> We use analytics tools, such as Google Analytics, to
              collect information about your use of the Site. This includes the pages you visit, the
              links you click, and other actions you take on the Site. This data is aggregated and
              anonymized and does not personally identify you.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text mt-8">Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth,
            efficient, and customized experience. Specifically, we may use information collected
            about you via the Site to:
          </p>
          <ul>
            <li>
              Analyze and monitor usage and trends to improve our website and user experience.
            </li>
            <li>
              Understand how our audience interacts with our content to help us create more relevant
              articles and guides.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text mt-8">Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and other tracking technologies to help customize the Site and
            improve your experience. When you access the Site, your personal information is not
            collected through the use of tracking technology. Most browsers are set to accept
            cookies by default. You can remove or reject cookies, but be aware that such action
            could affect the availability and functionality of the Site.
          </p>
          <p>
            Our site may use third-party services like Google Analytics and Google AdSense, which
            use cookies to serve ads based on a user&apos;s prior visits to our website or other
            websites. You may opt out of personalized advertising by visiting Google&apos;s Ad
            Settings.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">Third-Party Websites</h2>
          <p>
            The Site may contain links to third-party websites and applications of interest,
            including advertisements and external services, that are not affiliated with us. Once
            you have used these links to leave the Site, any information you provide to these third
            parties is not covered by this Privacy Policy, and we cannot guarantee the safety and
            privacy of your information.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your
            personal information. While we have taken reasonable steps to secure the personal
            information you provide to us, please be aware that despite our efforts, no security
            measures are perfect or impenetrable, and no method of data transmission can be
            guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13.
            If you become aware of any data we have collected from children under age 13, please
            contact us using the contact information provided below.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time in order to reflect, for example,
            changes to our practices or for other operational, legal, or regulatory reasons. We will
            notify you of any changes by updating the &quot;Last Updated&quot; date of this Privacy
            Policy.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us through
            the{' '}
            <Link
              href="https://onebuffalogames.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline">
              OneBuffaloGames Contact Page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
