import Link from 'next/link';

export default function Treasury() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Bitcoin Treasury</h1>
          <p>Understanding the financial backbone of the Decentralised Keiretsu and how it creates long-term wealth for all members.</p>
        </div>
      </section>

      <section id="overview" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Treasury Overview</h2>
            <p>The innovative financial system that powers the DK economy.</p>
          </div>
          <div className="content">
            <p>The Bitcoin Treasury is the financial foundation of the Decentralised Keiretsu, designed to create long-term wealth and economic security for all members. Unlike traditional organizations that focus solely on immediate revenue, the DK systematically builds a collective store of value through Bitcoin accumulation.</p>
            
            <p>The core principle is simple yet powerful: a portion of all revenue generated within the DK network is converted to Bitcoin and held in the Treasury. This creates a growing reserve of value that benefits all members and provides resilience against economic uncertainty.</p>
            
            <p>The Treasury operates with complete transparency, with real-time tracking of holdings, contributions, and distributions available to all members. This ensures accountability and builds trust in the system.</p>
          </div>
        </div>
      </section>

      <section id="model" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Economic Model</h2>
            <p>How the Treasury creates and distributes value throughout the network.</p>
          </div>
          <div className="content">
            <h3>Revenue Allocation</h3>
            <p>When revenue is generated within the DK network, it is allocated according to a transparent formula:</p>
            
            <ul>
              <li><strong>50-70%:</strong> To the individual members who directly contributed to generating the revenue</li>
              <li><strong>10-20%:</strong> To the Guild(s) involved, for operational costs and development</li>
              <li><strong>10-15%:</strong> To the Bitcoin Treasury, converted and held for long-term value</li>
              <li><strong>5-10%:</strong> To the DK operations fund, supporting network-wide functions</li>
              <li><strong>5-10%:</strong> To the innovation fund, investing in new projects and opportunities</li>
            </ul>
            
            <p>These percentages may vary slightly based on the specific revenue stream and Guild policies, but the principle of balanced allocation remains consistent.</p>
            
            <h3>Bitcoin Accumulation Strategy</h3>
            <p>The Treasury employs a systematic Bitcoin accumulation strategy:</p>
            
            <ul>
              <li>Regular conversion of fiat revenue to Bitcoin on a predetermined schedule</li>
              <li>Dollar-cost averaging to mitigate market volatility</li>
              <li>Strategic reserve management to balance growth and security</li>
              <li>Multi-signature security protocols to protect Treasury assets</li>
            </ul>
            
            <h3>Member Attribution</h3>
            <p>Each member's contribution to the Treasury is meticulously tracked, creating a transparent record of their stake in the collective holdings. This attribution system ensures that members benefit proportionally to their contributions over time.</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Treasury Benefits</h2>
            <p>How members gain from the Bitcoin Treasury system.</p>
          </div>
          <div className="content">
            <p>The Bitcoin Treasury provides several key benefits to DK members:</p>
            
            <h3>Long-Term Wealth Building</h3>
            <p>By systematically accumulating Bitcoin, the Treasury creates a growing store of value that appreciates over time, building wealth for all members regardless of market fluctuations.</p>
            
            <h3>Economic Security</h3>
            <p>The Treasury provides a financial safety net for members, offering protection against economic uncertainty and creating a source of future income independent of active work.</p>
            
            <h3>Collective Bargaining Power</h3>
            <p>As the Treasury grows, so does the DK's financial strength and influence, enhancing its ability to negotiate favorable terms, secure resources, and create opportunities for members.</p>
            
            <h3>Intergenerational Wealth Transfer</h3>
            <p>The Treasury is designed to create value not just for current members but for future generations, establishing a legacy that extends beyond individual lifespans.</p>
            
            <h3>Network Resilience</h3>
            <p>By maintaining substantial reserves, the Treasury enhances the DK's ability to weather economic downturns, invest in new opportunities, and support members during challenging times.</p>
          </div>
        </div>
      </section>

      <section id="reports" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Financial Transparency</h2>
            <p>How the DK maintains accountability and trust through open reporting.</p>
          </div>
          <div className="content">
            <p>Transparency is a core principle of the DK's financial operations. All members have access to:</p>
            
            <h3>Real-Time Treasury Dashboard</h3>
            <p>A live dashboard showing current Treasury holdings, recent transactions, and key metrics, providing immediate visibility into the financial state of the network.</p>
            
            <h3>Quarterly Financial Reports</h3>
            <p>Comprehensive reports detailing revenue, expenses, Treasury growth, and other financial metrics across all Guilds and the broader network.</p>
            
            <h3>Annual Audits</h3>
            <p>Independent audits of the DK's financial systems and Treasury holdings, ensuring accuracy and compliance with established policies.</p>
            
            <h3>Member Attribution Statements</h3>
            <p>Personalized reports showing each member's contributions to the Treasury and their proportional stake in the collective holdings.</p>
            
            <p>This commitment to transparency ensures that all members can verify the proper management of collective resources and builds trust in the DK's financial systems.</p>
          </div>
        </div>
      </section>

      <section id="future" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Future Treasury Development</h2>
            <p>The evolving vision for the DK's financial backbone.</p>
          </div>
          <div className="content">
            <p>As the DK grows, the Bitcoin Treasury will continue to evolve with several planned developments:</p>
            
            <h3>Enhanced Yield Strategies</h3>
            <p>Exploring responsible ways to generate yield on Treasury holdings while maintaining security and alignment with DK values.</p>
            
            <h3>Member Borrowing Program</h3>
            <p>Developing systems for members to borrow against their Treasury attribution for education, entrepreneurship, or other productive purposes.</p>
            
            <h3>Expanded Asset Diversification</h3>
            <p>Strategically diversifying a portion of Treasury holdings into other asset classes to enhance stability and returns.</p>
            
            <h3>Community Investment Fund</h3>
            <p>Creating mechanisms for the Treasury to invest in member-led projects and initiatives that benefit the broader DK community.</p>
            
            <h3>Intergenerational Transfer Mechanisms</h3>
            <p>Developing formal systems for members to pass their Treasury attribution to future generations or designated beneficiaries.</p>
            
            <p>These developments will be implemented gradually and with extensive member consultation, ensuring that the Treasury continues to serve the long-term interests of all DK participants.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Build Your Future with the Bitcoin Treasury</h2>
          <p>Join the Decentralised Keiretsu and start building long-term wealth through our unique Treasury system.</p>
          <Link href="/register" className="btn btn-primary">Register Now</Link>
        </div>
      </section>
    </main>
  );
}
