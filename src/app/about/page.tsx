import Link from 'next/link';

export default function About() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>About the Decentralised Keiretsu</h1>
          <p>Learn about our mission, structure, and vision for a new economic paradigm in the age of AI.</p>
        </div>
      </section>

      <section id="mission" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission</h2>
            <p>Creating a sustainable economic future for humanity in the age of AI disruption.</p>
          </div>
          <div className="content">
            <p>The Decentralised Keiretsu (DK) was founded with a clear purpose: to provide a "Plan B for Humanity" as artificial intelligence increasingly disrupts traditional employment and economic structures. We believe that by combining the best elements of decentralized autonomous organizations with the proven stability of traditional keiretsu models, we can create a new economic paradigm that works for everyone.</p>
            <p>Our mission is threefold:</p>
            <ul>
              <li>To provide economic security for millions of people displaced by AI</li>
              <li>To harness human creativity, wisdom, and collaboration in ways that AI cannot replicate</li>
              <li>To build a sustainable, equitable economic system that benefits all participants</li>
            </ul>
            <p>Through our unique Guild structure, Bitcoin Treasury system, and collaborative network approach, we're creating a resilient economic ecosystem that can thrive alongside AI rather than compete with it.</p>
          </div>
        </div>
      </section>

      <section id="structure" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>DK Structure</h2>
            <p>Understanding the organizational framework of the Decentralised Keiretsu.</p>
          </div>
          <div className="content">
            <p>The Decentralised Keiretsu operates as a "network of networks," with several key structural elements:</p>
            
            <h3>Guild System</h3>
            <p>At the heart of the DK are 30 specialized Guilds, each focused on different domains but working together toward common goals. Guilds function as semi-autonomous units with their own leadership, projects, and revenue streams, while benefiting from the collective resources and support of the broader network.</p>
            
            <h3>Bitcoin Treasury</h3>
            <p>Our unique Bitcoin Treasury serves as the financial backbone of the DK. A portion of all revenue generated within the network is converted to Bitcoin and held in the Treasury, creating long-term wealth and financial security for all members.</p>
            
            <h3>Governance Framework</h3>
            <p>The DK employs a hybrid governance model that balances decentralized decision-making with efficient coordination. Members have voting rights on major decisions, while day-to-day operations are managed by Guild leaders and specialized teams.</p>
            
            <h3>Revenue Distribution</h3>
            <p>Our transparent revenue distribution framework ensures that value is fairly allocated among individual contributors, Guild operations, and the collective Treasury. This creates alignment between individual incentives and the long-term success of the network.</p>
          </div>
        </div>
      </section>

      <section id="history" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our History</h2>
            <p>The journey of the Decentralised Keiretsu from concept to global movement.</p>
          </div>
          <div className="content">
            <p>The Decentralised Keiretsu emerged from a recognition that the accelerating pace of AI development would fundamentally transform the global economy and labor markets. As millions of jobs became vulnerable to automation and AI disruption, it became clear that a new economic model was needed—one that could harness human potential in ways that complement rather than compete with artificial intelligence.</p>
            
            <p>Drawing inspiration from both traditional Japanese keiretsu business groups and modern decentralized autonomous organizations, the DK was conceived as a hybrid model that combines the best elements of both approaches. The founding team developed the core concepts, governance framework, and economic model throughout 2024, refining the vision through extensive consultation with experts in economics, technology, governance, and social systems.</p>
            
            <p>The DAOwininan platform was launched in 2025 as the digital home of the Decentralised Keiretsu, providing a central hub for registration, Guild assignment, and community engagement. From these beginnings, the DK has grown into a global movement with members across all continents, united by a shared vision of creating a sustainable economic future for humanity in the age of AI.</p>
          </div>
        </div>
      </section>

      <section id="security" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Economic Security Model</h2>
            <p>How the DK provides financial stability in an uncertain future.</p>
          </div>
          <div className="content">
            <p>The DK's economic security model is built on several key pillars:</p>
            
            <h3>Diversified Revenue Streams</h3>
            <p>Each Guild develops multiple revenue-generating activities, creating a diversified income base that is resilient to market fluctuations and economic changes.</p>
            
            <h3>Bitcoin Treasury Accumulation</h3>
            <p>By systematically converting a portion of all revenue to Bitcoin and holding it in the Treasury, the DK builds a growing store of value that provides long-term financial security for all members.</p>
            
            <h3>Skill Development and Adaptation</h3>
            <p>The Guild system encourages continuous learning and skill development, helping members adapt to changing economic conditions and remain valuable in an AI-dominated economy.</p>
            
            <h3>Collaborative Resource Sharing</h3>
            <p>Resources, opportunities, and support are shared across the network, ensuring that all members benefit from collective success while being protected from individual setbacks.</p>
            
            <p>Together, these elements create a robust economic security system that provides both immediate income opportunities and long-term wealth building for all DK members.</p>
          </div>
        </div>
      </section>

      <section id="network" className="section">
        <div className="container">
          <div className="section-title">
            <h2>The Network Effect</h2>
            <p>How the interconnected nature of the DK creates exponential value.</p>
          </div>
          <div className="content">
            <p>The true power of the Decentralised Keiretsu lies in its network effect—the exponential value created when multiple Guilds and members collaborate and share resources. Unlike traditional organizations with rigid hierarchies, the DK operates as a fluid network where:</p>
            
            <ul>
              <li>Skills and expertise flow freely between Guilds</li>
              <li>Projects can quickly assemble cross-functional teams</li>
              <li>Information and best practices are shared throughout the network</li>
              <li>Resources can be efficiently allocated to where they create the most value</li>
              <li>Individual contributions are recognized and rewarded regardless of position</li>
            </ul>
            
            <p>This networked structure creates a whole that is far greater than the sum of its parts, enabling the DK to tackle complex challenges, adapt to changing conditions, and generate value in ways that traditional organizations cannot.</p>
            
            <p>As the network grows, so does its value and capability—creating a positive feedback loop that benefits all members and strengthens the entire ecosystem.</p>
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
