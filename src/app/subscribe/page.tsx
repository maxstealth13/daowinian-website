import Link from 'next/link';

export default function Subscribe() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Subscription Options</h1>
          <p>Choose the membership tier that best fits your needs and start your journey with the Decentralised Keiretsu.</p>
        </div>
      </section>

      <section id="tiers" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Membership Tiers</h2>
            <p>Flexible options designed for individuals at every stage of their journey.</p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img">🌱</div>
              <div className="card-content">
                <h3>Explorer</h3>
                <p className="price">Free</p>
                <ul className="features-list">
                  <li>Basic Guild membership</li>
                  <li>Access to community forums</li>
                  <li>Weekly newsletter</li>
                  <li>Public events access</li>
                  <li>Basic skills assessment</li>
                </ul>
                <p>Perfect for those new to the DK who want to explore the community before committing.</p>
                <Link href="/register?tier=explorer" className="btn">Join as Explorer</Link>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">🚀</div>
              <div className="card-content">
                <h3>Contributor</h3>
                <p className="price">$19.99/month</p>
                <ul className="features-list">
                  <li>Full Guild membership</li>
                  <li>Project participation</li>
                  <li>Revenue sharing eligibility</li>
                  <li>Bitcoin Treasury attribution</li>
                  <li>Skills development resources</li>
                  <li>Member-only events</li>
                </ul>
                <p>Ideal for active participants who want to contribute to projects and build long-term wealth.</p>
                <Link href="/register?tier=contributor" className="btn btn-primary">Join as Contributor</Link>
              </div>
            </div>
            
            <div className="card">
              <div className="card-img">⭐</div>
              <div className="card-content">
                <h3>Innovator</h3>
                <p className="price">$49.99/month</p>
                <ul className="features-list">
                  <li>All Contributor benefits</li>
                  <li>Priority project selection</li>
                  <li>Enhanced revenue share</li>
                  <li>Advanced skills training</li>
                  <li>Leadership opportunities</li>
                  <li>Cross-Guild collaboration</li>
                  <li>Mentorship program</li>
                </ul>
                <p>For committed members ready to take a leadership role and maximize their impact.</p>
                <Link href="/register?tier=innovator" className="btn">Join as Innovator</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="corporate" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Corporate Partnerships</h2>
            <p>Tailored solutions for organizations looking to engage with the DK network.</p>
          </div>
          <div className="content">
            <p>The Decentralised Keiretsu offers specialized partnership opportunities for corporations, nonprofits, and other organizations. These partnerships provide:</p>
            
            <ul>
              <li><strong>Talent Access:</strong> Connect with skilled professionals across all 30 Guilds</li>
              <li><strong>Innovation Partnerships:</strong> Collaborate on research and development initiatives</li>
              <li><strong>Digital Transformation:</strong> Leverage DK expertise to navigate technological change</li>
              <li><strong>ESG Initiatives:</strong> Partner on sustainability and social impact projects</li>
              <li><strong>Strategic Consulting:</strong> Gain insights from diverse domain experts</li>
            </ul>
            
            <p>Corporate partnerships are customized based on your organization's specific needs and objectives. Our team will work with you to design a partnership structure that creates value for both your organization and the DK network.</p>
            
            <div className="text-center mt-10">
              <Link href="/contact?subject=corporate" className="btn btn-primary">Inquire About Corporate Partnerships</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Membership Benefits</h2>
            <p>The value you receive as a member of the Decentralised Keiretsu.</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Economic Security</h3>
              <p>Build long-term wealth through revenue sharing and Bitcoin Treasury attribution.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h3>Community</h3>
              <p>Connect with like-minded individuals and build meaningful professional relationships.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Skill Development</h3>
              <p>Access training, mentorship, and hands-on experience to grow your capabilities.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💼</div>
              <h3>Work Opportunities</h3>
              <p>Participate in projects that match your skills and interests, earning income and recognition.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🧠</div>
              <h3>Purpose & Meaning</h3>
              <p>Contribute to something larger than yourself and help build a better economic future.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Resilience</h3>
              <p>Gain protection against economic uncertainty and AI disruption through collective strength.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about DK membership and subscriptions.</p>
          </div>
          <div className="content">
            <div className="faq-item">
              <h3>Can I change my membership tier later?</h3>
              <p>Yes, you can upgrade or downgrade your membership tier at any time. Changes will take effect at the start of your next billing cycle.</p>
            </div>
            
            <div className="faq-item">
              <h3>How is the Bitcoin Treasury attribution calculated?</h3>
              <p>Your Treasury attribution is based on your subscription tier, duration of membership, and contributions to revenue-generating projects. The specific formula is transparent and available to all members.</p>
            </div>
            
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and various cryptocurrencies including Bitcoin, Ethereum, and USDC.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is there a minimum commitment period?</h3>
              <p>No, all memberships are month-to-month with no long-term commitment required. You can cancel at any time.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I participate in projects?</h3>
              <p>Once you join as a Contributor or Innovator, you'll gain access to the Project Marketplace where you can browse and apply for projects that match your skills and interests.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I be a member of multiple Guilds?</h3>
              <p>You'll have one primary Guild affiliation, but you can collaborate on projects across multiple Guilds and even transfer your primary affiliation if your interests evolve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Join the Movement?</h2>
          <p>Become part of the Decentralised Keiretsu and help build a sustainable economic future for humanity.</p>
          <Link href="/register" className="btn btn-primary">Register Now</Link>
        </div>
      </section>
    </main>
  );
}
