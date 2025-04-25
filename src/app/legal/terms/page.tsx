import Link from 'next/link';

export default function Terms() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last Updated: April 25, 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Introduction</h2>
            <p>Welcome to DAOwininan.com ("Site"), operated by the Decentralised Keiretsu ("DK", "we", "us", or "our"). By accessing or using our Site, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access the Site.</p>

            <h2>2. Definitions</h2>
            <ul>
              <li><strong>"User"</strong>: Any individual who accesses or uses the Site.</li>
              <li><strong>"Member"</strong>: A registered User who has created an account on the Site.</li>
              <li><strong>"Guild"</strong>: A specialized group within the Decentralised Keiretsu focused on a specific domain or skill set.</li>
              <li><strong>"Bitcoin Treasury"</strong>: The collective Bitcoin holdings managed by the Decentralised Keiretsu for the benefit of its Members.</li>
              <li><strong>"Content"</strong>: All information, text, graphics, photos, designs, trademarks, and other materials that appear on the Site.</li>
            </ul>

            <h2>3. Account Registration</h2>
            <h3>3.1 Eligibility</h3>
            <p>To create an account, you must be at least 18 years old and capable of entering into a legally binding agreement.</p>

            <h3>3.2 Account Information</h3>
            <p>You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

            <h3>3.3 Account Security</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

            <h2>4. Guild Membership</h2>
            <h3>4.1 Guild Assignment</h3>
            <p>Upon registration, you will be guided through a process to determine the most appropriate Guild for your skills, interests, and experience.</p>

            <h3>4.2 Guild Participation</h3>
            <p>As a Guild member, you agree to abide by the specific rules and guidelines established for your Guild, in addition to these Terms.</p>

            <h2>5. Bitcoin Treasury</h2>
            <h3>5.1 Contributions</h3>
            <p>Any contributions to the Bitcoin Treasury are subject to the specific terms outlined during the subscription process.</p>

            <h3>5.2 Distributions</h3>
            <p>Bitcoin Treasury distributions, if any, will be made according to the policies and procedures established by the Decentralised Keiretsu.</p>

            <h2>6. Subscription Services</h2>
            <h3>6.1 Subscription Tiers</h3>
            <p>We offer various subscription tiers with different features and benefits. The specific terms for each tier are outlined during the subscription process.</p>

            <h3>6.2 Payment</h3>
            <p>By subscribing to a paid tier, you authorize us to charge the applicable fees to your designated payment method.</p>

            <h3>6.3 Cancellation</h3>
            <p>You may cancel your subscription at any time through your account settings. Cancellation will be effective at the end of your current billing cycle.</p>

            <h2>7. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site in any way that violates any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any activity that interferes with or disrupts the Site</li>
              <li>Attempt to gain unauthorized access to any portion of the Site</li>
              <li>Use the Site for any commercial solicitation purposes without our prior written consent</li>
              <li>Collect or store personal data about other users without their consent</li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <h3>8.1 Site Content</h3>
            <p>All Content on the Site is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws.</p>

            <h3>8.2 Limited License</h3>
            <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Site for your personal, non-commercial use.</p>

            <h2>9. User Content</h2>
            <h3>9.1 Ownership</h3>
            <p>You retain ownership of any content you submit to the Site ("User Content").</p>

            <h3>9.2 License to Us</h3>
            <p>By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in any media.</p>

            <h2>10. Privacy</h2>
            <p>Your use of the Site is also governed by our <Link href="/legal/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>

            <h2>11. Disclaimers</h2>
            <p>THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>

            <h2>12. Limitation of Liability</h2>
            <p>IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>

            <h2>13. Indemnification</h2>
            <p>You agree to indemnify and hold us harmless from any claims, losses, liabilities, expenses, or demands arising out of your use of the Site or violation of these Terms.</p>

            <h2>14. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on the Site.</p>

            <h2>15. Termination</h2>
            <p>We may terminate or suspend your account and access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>

            <h2>16. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Hong Kong, without regard to its conflict of law provisions.</p>

            <h2>17. Dispute Resolution</h2>
            <p>Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration in Hong Kong.</p>

            <h2>18. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>

            <h2>19. Entire Agreement</h2>
            <p>These Terms constitute the entire agreement between you and us regarding the use of the Site.</p>

            <h2>20. Contact Information</h2>
            <p>For questions about these Terms, please contact us at: info@daowinian.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
