import Link from 'next/link';

export default function Privacy() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: April 25, 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Introduction</h2>
            <p>The Decentralised Keiretsu ("DK", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website DAOwininan.com ("Site") or use our services.</p>
            <p>Please read this Privacy Policy carefully. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Identity Data</strong>: Full name, username, date of birth, gender</li>
              <li><strong>Contact Data</strong>: Email address, phone number, physical address</li>
              <li><strong>Financial Data</strong>: Payment information (processed securely through third-party payment processors)</li>
              <li><strong>Profile Data</strong>: Guild membership, interests, preferences, feedback, and survey responses</li>
              <li><strong>Technical Data</strong>: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
              <li><strong>Usage Data</strong>: Information about how you use our Site and services</li>
              <li><strong>Location Data</strong>: General location information derived from IP address</li>
              <li><strong>Communication Data</strong>: Communications preferences and correspondence with us</li>
            </ul>

            <h3>2.2 Data Collection Methods</h3>
            <p>We collect this information through:</p>
            <ul>
              <li>Direct interactions (when you register, subscribe, or communicate with us)</li>
              <li>Automated technologies (cookies, server logs, and similar technologies)</li>
              <li>Third parties (such as analytics providers)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>To create and manage your account</li>
              <li>To assign you to the appropriate Guild</li>
              <li>To process subscription payments</li>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing and Disclosure</h2>
            <h3>4.1 Data Monetization</h3>
            <p>With your explicit consent, we may aggregate and anonymize your data to create valuable datasets that can be monetized. As outlined in our terms, 50% of the revenue generated from such monetization will be shared with you, with 80% of your share being converted to Bitcoin and held in the DK Treasury on your behalf.</p>

            <h3>4.2 Third-Party Service Providers</h3>
            <p>We may share your information with third-party service providers to:</p>
            <ul>
              <li>Facilitate our services</li>
              <li>Provide the service on our behalf</li>
              <li>Perform service-related services</li>
              <li>Assist us in analyzing how our services are used</li>
            </ul>
            <p>These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

            <h3>4.3 Legal Requirements</h3>
            <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>6. Data Retention</h2>
            <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

            <h2>7. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Right to Access</strong>: The right to request copies of your personal information</li>
              <li><strong>Right to Rectification</strong>: The right to request that we correct inaccurate information</li>
              <li><strong>Right to Erasure</strong>: The right to request that we delete your personal information</li>
              <li><strong>Right to Restrict Processing</strong>: The right to request that we restrict the processing of your personal information</li>
              <li><strong>Right to Data Portability</strong>: The right to request that we transfer your personal information to another organization</li>
              <li><strong>Right to Object</strong>: The right to object to our processing of your personal information</li>
              <li><strong>Right to Withdraw Consent</strong>: The right to withdraw your consent at any time</li>
            </ul>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our Site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. For more information, please see our <Link href="/legal/cookies">Cookie Policy</Link>.</p>

            <h2>9. Analytics</h2>
            <p>We use Google Analytics to help us understand how our users use the Site. Google Analytics uses cookies to collect information such as how often users visit the Site, what pages they visit, and what other sites they used prior to coming to our Site.</p>

            <h2>10. Children's Privacy</h2>
            <p>Our services are not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from children under 18.</p>

            <h2>11. International Data Transfers</h2>
            <p>Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. For more information about our GDPR compliance, please see our <Link href="/legal/gdpr">GDPR Compliance Statement</Link>.</p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: privacy@daowinian.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
