'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: June 22, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-lg leading-relaxed">
                By accessing and using the ProSports website, you accept and agree to be bound by and comply with these Terms of Service and our Privacy Policy. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Use License</h2>
              <p className="text-lg leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on ProSports for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the site</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-lg leading-relaxed">
                The materials on ProSports are provided on an 'as is' basis. ProSports makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Limitations</h2>
              <p className="text-lg leading-relaxed">
                In no event shall ProSports or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ProSports, even if ProSports or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-lg leading-relaxed">
                The materials appearing on ProSports could include technical, typographical, or photographic errors. ProSports does not warrant that any of the materials on its website are accurate, complete, or current. ProSports may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Links</h2>
              <p className="text-lg leading-relaxed">
                ProSports has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ProSports of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Modifications</h2>
              <p className="text-lg leading-relaxed">
                ProSports may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-lg leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ProSports operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card rounded-lg">
                <p className="text-lg">ProSports</p>
                <p className="text-lg">Email: legal@prosports.com</p>
              </div>
            </section>
            
<section>
  <h2 className="text-3xl font-bold mb-4">10. User Accounts</h2>
  <p className="text-lg leading-relaxed">
    Certain features of ProSports may require users to create an account.
    Users are responsible for maintaining the confidentiality of their
    account credentials and for all activities that occur under their
    account. We reserve the right to suspend or terminate accounts that
    violate these Terms of Service.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">11. User Generated Content</h2>
  <p className="text-lg leading-relaxed">
    Users may have the ability to submit comments, feedback, or other
    content. By submitting content, you grant ProSports a worldwide,
    non-exclusive, royalty-free license to use, reproduce, modify,
    publish, and distribute such content in connection with our services.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">12. Intellectual Property Rights</h2>
  <p className="text-lg leading-relaxed">
    All content, trademarks, logos, graphics, articles, and other
    materials displayed on ProSports are the property of ProSports or its
    licensors and are protected by applicable intellectual property laws.
    Unauthorized use of any content is strictly prohibited.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">13. Prohibited Activities</h2>
  <p className="text-lg leading-relaxed mb-4">
    Users agree not to engage in any activity that may interfere with the
    operation of the website, including but not limited to:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-lg">
    <li>Posting false or misleading information</li>
    <li>Uploading malicious software or harmful code</li>
    <li>Attempting unauthorized access to systems or accounts</li>
    <li>Using automated tools to scrape website content</li>
    <li>Violating applicable laws or regulations</li>
  </ul>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">14. Third-Party Services</h2>
  <p className="text-lg leading-relaxed">
    Our website may contain links, advertisements, or integrations with
    third-party services. ProSports is not responsible for the content,
    policies, or practices of any third-party websites or services.
    Users should review the applicable terms and privacy policies of those
    providers before interacting with them.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">15. Advertising and Sponsorships</h2>
  <p className="text-lg leading-relaxed">
    ProSports may display advertisements, sponsored content, affiliate
    links, or promotional materials. Such content may be provided by
    third-party advertisers. We do not guarantee the accuracy of any
    advertisement and are not responsible for transactions conducted with
    third-party advertisers.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">16. Indemnification</h2>
  <p className="text-lg leading-relaxed">
    You agree to indemnify and hold harmless ProSports, its affiliates,
    officers, employees, and partners from any claims, damages,
    liabilities, costs, or expenses arising from your use of the website
    or violation of these Terms of Service.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">17. Termination</h2>
  <p className="text-lg leading-relaxed">
    We reserve the right to suspend or terminate access to our services at
    any time, without prior notice, for conduct that we believe violates
    these Terms of Service or is harmful to other users or the website.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">18. Changes to These Terms</h2>
  <p className="text-lg leading-relaxed">
    We may update these Terms of Service from time to time. Any changes
    will become effective immediately upon posting on this page. Continued
    use of the website following the publication of revised terms
    constitutes acceptance of those changes.
  </p>
</section>

<section>
  <h2 className="text-3xl font-bold mb-4">19. Entire Agreement</h2>
  <p className="text-lg leading-relaxed">
    These Terms of Service constitute the entire agreement between you and
    ProSports regarding your use of the website and supersede all prior
    agreements, understandings, and communications relating to the
    subject matter herein.
  </p>
</section>


          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
