import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/utils/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for MyPlayerHQ, your ultimate resource for NBA 2K builds, badges, and animations.',
});

export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-text min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-text/90">
          <p className="text-text/70">Last Updated: August 28, 2025</p>

          <h2 className="text-2xl font-bold text-text mt-8">1. Agreement to Terms</h2>
          <p>
            By accessing and using MyPlayerHQ (the "Site"), you agree to be bound by these Terms of
            Service and our Privacy Policy. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site. The materials contained in this website
            are protected by applicable copyright and trademark law.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or
            software) on MyPlayerHQ's website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license you may
            not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public display (commercial or
              non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on MyPlayerHQ's
              website;
            </li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>
              transfer the materials to another person or "mirror" the materials on any other
              server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and
            may be terminated by MyPlayerHQ at any time.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">3. Disclaimer</h2>
          <p>
            The materials on MyPlayerHQ's website are provided on an 'as is' basis. MyPlayerHQ makes
            no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>
          <p>
            MyPlayerHQ is not affiliated with, endorsed by, or sponsored by 2K Games or Take-Two
            Interactive. NBA 2K, MyPLAYER, and all related logos are trademarks of Take-Two
            Interactive Software, Inc. The data provided on this site is for informational purposes
            only and is not guaranteed to be accurate.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">4. Limitations</h2>
          <p>
            In no event shall MyPlayerHQ or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on MyPlayerHQ's website, even
            if MyPlayerHQ or a MyPlayerHQ authorized representative has been notified orally or in
            writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on MyPlayerHQ's website could include technical, typographical,
            or photographic errors. MyPlayerHQ does not warrant that any of the materials on its
            website are accurate, complete or current. MyPlayerHQ may make changes to the materials
            contained on its website at any time without notice. However, MyPlayerHQ does not make
            any commitment to update the materials.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">6. Links</h2>
          <p>
            MyPlayerHQ has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion of any link does not
            imply endorsement by MyPlayerHQ of the site. Use of any such linked website is at the
            user's own risk.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">7. Modifications</h2>
          <p>
            MyPlayerHQ may revise these terms of service for its website at any time without notice.
            By using this website you are agreeing to be bound by the then current version of these
            terms of service.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of
            New York and you irrevocably submit to the exclusive jurisdiction of the courts in that
            State or location.
          </p>

          <h2 className="text-2xl font-bold text-text mt-8">Contact Us</h2>
          <p>
            If you have questions or comments about these Terms of Service, please contact us
            through the{' '}
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
