import Link from 'next/link';

export default function Cookies() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p>Last Updated: April 25, 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Introduction</h2>
            <p>This Cookie Policy explains how the Decentralised Keiretsu ("DK", "we", "us", or "our") uses cookies and similar technologies on our website DAOwininan.com ("Site"). This policy is designed to help you understand what cookies are, how we use them, and the choices you have regarding their use.</p>

            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>

            <h2>Types of Cookies We Use</h2>
            <p>We use the following types of cookies on our Site:</p>

            <h3>1. Essential Cookies</h3>
            <p>These cookies are necessary for the Site to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.</p>

            <h3>2. Performance and Analytics Cookies</h3>
            <p>These cookies collect information about how visitors use our Site, such as which pages visitors go to most often and if they receive error messages. All information collected by these cookies is aggregated and anonymous.</p>

            <h3>3. Functionality Cookies</h3>
            <p>These cookies allow the Site to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.</p>

            <h3>4. Targeting and Advertising Cookies</h3>
            <p>These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</p>

            <h2>Specific Cookies We Use</h2>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Essential</td>
                  <td>Maintains your session</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>auth_token</td>
                  <td>Essential</td>
                  <td>Authenticates your account</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>guild_pref</td>
                  <td>Functionality</td>
                  <td>Remembers your Guild preferences</td>
                  <td>90 days</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Analytics</td>
                  <td>Used by Google Analytics to distinguish users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Analytics</td>
                  <td>Used by Google Analytics to distinguish users</td>
                  <td>24 hours</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>Analytics</td>
                  <td>Used by Google Analytics to throttle request rate</td>
                  <td>1 minute</td>
                </tr>
              </tbody>
            </table>

            <h2>Third-Party Cookies</h2>
            <p>Some cookies are placed by third parties on our behalf. We use the following third-party services that may place cookies on your device:</p>
            <ol>
              <li><strong>Google Analytics</strong>: For website analytics</li>
              <li><strong>Stripe</strong>: For payment processing</li>
              <li><strong>Intercom</strong>: For customer support chat functionality</li>
            </ol>

            <h2>Your Cookie Choices</h2>
            <p>Most web browsers allow you to control cookies through their settings. You can:</p>
            <ol>
              <li><strong>Block cookies</strong>: You can activate settings on your browser to refuse all or some cookies.</li>
              <li><strong>Delete cookies</strong>: You can delete cookies that have already been set.</li>
              <li><strong>Allow cookies</strong>: You can set your browser to notify you when you receive a cookie, giving you the chance to decide whether to accept it.</li>
            </ol>
            <p>Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our Site, and some services may not function properly.</p>

            <h3>Browser-Specific Instructions</h3>
            <ul>
              <li><strong>Chrome</strong>: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong>Firefox</strong>: Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong>Safari</strong>: Preferences &gt; Privacy &gt; Cookies and website data</li>
              <li><strong>Edge</strong>: Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
            </ul>

            <h2>Do Not Track Signals</h2>
            <p>Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activities tracked. Our Site currently does not respond to "Do Not Track" signals.</p>

            <h2>Changes to This Cookie Policy</h2>
            <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at: privacy@daowinian.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
