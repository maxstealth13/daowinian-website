import Link from 'next/link';

export default function Guilds() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>The Guild System</h1>
          <p>Discover our specialized Guilds and find where your skills and interests best fit within the Decentralised Keiretsu.</p>
        </div>
      </section>

      <section id="overview" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Guild Overview</h2>
            <p>Understanding the specialized communities that form the backbone of the DK.</p>
          </div>
          <div className="content">
            <p>The Guild system is the organizational heart of the Decentralised Keiretsu. Each Guild represents a specialized community focused on a specific domain or skill set, working together toward common goals while maintaining their unique identity and expertise.</p>
            
            <p>Guilds function as semi-autonomous units within the broader DK network, with their own leadership, projects, and revenue streams. This structure allows for specialized focus and expertise while benefiting from the collective resources, support, and network effects of the entire ecosystem.</p>
            
            <p>The DK currently comprises 30 specialized Guilds, each playing a vital role in the overall network. When you join the DK, you'll be guided through a process to determine which Guild best matches your skills, experience, and interests.</p>
          </div>
        </div>
      </section>

      <section id="list" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Our 30 Specialized Guilds</h2>
            <p>Explore the diverse communities that make up the Decentralised Keiretsu.</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">💻</div>
              <h3>Technology Guild</h3>
              <p>Developing cutting-edge solutions and leveraging technology to solve complex problems.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎨</div>
              <h3>Creative Guild</h3>
              <p>Harnessing human creativity and artistic expression in the age of AI-generated content.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📊</div>
              <h3>Data Guild</h3>
              <p>Managing and monetizing data assets while ensuring privacy and ethical use.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h3>Sustainability Guild</h3>
              <p>Focusing on environmental initiatives and ensuring the DK remains carbon positive.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏛️</div>
              <h3>Governance Guild</h3>
              <p>Overseeing the democratic processes and decision-making within the DK network.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3>Research Guild</h3>
              <p>Exploring new frontiers of knowledge and innovation for the benefit of all members.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Finance Guild</h3>
              <p>Managing financial operations, treasury functions, and economic planning.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏥</div>
              <h3>Health Guild</h3>
              <p>Focusing on healthcare innovations and wellness solutions for members and beyond.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏗️</div>
              <h3>Infrastructure Guild</h3>
              <p>Building and maintaining the physical and digital infrastructure for the DK.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Security Guild</h3>
              <p>Ensuring the safety and security of the DK's digital and physical assets.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌐</div>
              <h3>Community Guild</h3>
              <p>Fostering connections, engagement, and support among DK members.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Education Guild</h3>
              <p>Developing learning resources and training programs for continuous skill development.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <p>And 18 more specialized Guilds covering domains from agriculture to manufacturing, energy to entertainment, and beyond.</p>
          </div>
        </div>
      </section>

      <section id="find" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Find Your Guild</h2>
            <p>Discover which Guild best matches your skills, experience, and interests.</p>
          </div>
          <div className="content">
            <p>When you register with the Decentralised Keiretsu, you'll be guided through a comprehensive process to determine which Guild is the best fit for you. This process considers:</p>
            
            <ul>
              <li>Your professional skills and experience</li>
              <li>Your personal interests and passions</li>
              <li>Your preferred working style and environment</li>
              <li>Your long-term goals and aspirations</li>
              <li>The current needs and opportunities within each Guild</li>
            </ul>
            
            <p>While you'll have a primary Guild affiliation, the DK's fluid structure allows you to collaborate with and contribute to projects across multiple Guilds. This creates opportunities to develop new skills, explore different domains, and maximize your contribution to the network.</p>
            
            <div className="text-center mt-10">
              <Link href="/register" className="btn btn-primary">Start the Guild Assignment Process</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="leaders" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Guild Leadership</h2>
            <p>Understanding the governance and leadership structure within Guilds.</p>
          </div>
          <div className="content">
            <p>Each Guild within the DK has its own leadership structure, typically consisting of:</p>
            
            <h3>Guild Master</h3>
            <p>The primary leader responsible for the overall direction, strategy, and performance of the Guild. Guild Masters are elected by Guild members for fixed terms.</p>
            
            <h3>Guild Council</h3>
            <p>A small group of experienced members who work with the Guild Master to govern the Guild, make key decisions, and oversee operations.</p>
            
            <h3>Project Leaders</h3>
            <p>Members who take responsibility for specific projects or initiatives within the Guild, managing teams and resources to achieve defined objectives.</p>
            
            <h3>Mentors</h3>
            <p>Experienced members who guide and support newer members, helping them develop their skills and integrate into the Guild community.</p>
            
            <p>Guild leadership positions are earned through demonstrated expertise, contribution, and the trust of fellow members. The leadership structure balances the need for effective decision-making with the DK's commitment to democratic governance and member empowerment.</p>
          </div>
        </div>
      </section>

      <section id="collaboration" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Cross-Guild Collaboration</h2>
            <p>How Guilds work together to tackle complex challenges and opportunities.</p>
          </div>
          <div className="content">
            <p>While each Guild has its specialized focus, the real power of the DK emerges through cross-Guild collaboration. Complex projects often require diverse skills and perspectives, bringing together members from multiple Guilds to form dynamic, cross-functional teams.</p>
            
            <p>The DK has established several mechanisms to facilitate this collaboration:</p>
            
            <ul>
              <li><strong>Project Marketplace:</strong> A platform where Guilds can post projects and seek collaborators from other Guilds</li>
              <li><strong>Cross-Guild Councils:</strong> Standing committees that address issues affecting multiple Guilds</li>
              <li><strong>Collaborative Workspaces:</strong> Physical and virtual environments designed for cross-Guild teamwork</li>
              <li><strong>Knowledge Exchange Programs:</strong> Structured opportunities for members to temporarily work with other Guilds</li>
              <li><strong>Network-Wide Challenges:</strong> Major initiatives that engage all Guilds in addressing significant opportunities or problems</li>
            </ul>
            
            <p>This collaborative approach ensures that the DK can leverage its full range of talent and expertise, creating solutions that no single Guild could develop alone.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Find Your Guild?</h2>
          <p>Join the Decentralised Keiretsu and discover where your skills and passions can make the greatest impact.</p>
          <Link href="/register" className="btn btn-primary">Register Now</Link>
        </div>
      </section>
    </main>
  );
}
