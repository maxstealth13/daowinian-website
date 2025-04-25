import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Plan B for Humanity in the Age of AI</h1>
          <p>The Decentralised Keiretsu (DK) is a revolutionary network designed to provide economic security and purpose for millions of people displaced by AI disruption.</p>
          <div className="hero-buttons">
            <Link href="/register" className="btn btn-primary">Join the Movement</Link>
            <Link href="/about" className="btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Introducing the Decentralised Keiretsu</h2>
            <p>A revolutionary network structure that combines the best of decentralized autonomous organizations with the proven stability of traditional keiretsu models.</p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img">🌐</div>
              <div className="card-content">
                <h3>Network of Networks</h3>
                <p>The DK creates a powerful interconnected ecosystem of specialized Guilds, each focused on different domains but working together toward common goals.</p>
                <Link href="/about#network" className="btn">Explore the Network</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img">₿</div>
              <div className="card-content">
                <h3>Bitcoin Treasury</h3>
                <p>Build long-term wealth through our unique Bitcoin Treasury system, creating financial security for you and future generations.</p>
                <Link href="/treasury" className="btn">Learn About the Treasury</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img">🛡️</div>
              <div className="card-content">
                <h3>Economic Security</h3>
                <p>In an age where AI is disrupting traditional employment, the DK provides a sustainable alternative economic model focused on human value.</p>
                <Link href="/about#security" className="btn">Discover the Model</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guilds" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Specialized Guilds</h2>
            <p>Find your place in one of our 30 specialized Guilds, each focused on different domains but working together toward common goals.</p>
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
          </div>
          <div className="text-center mt-10">
            <Link href="/guilds" className="btn btn-primary">Explore All Guilds</Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Join the Movement Today</h2>
          <p>Become part of the solution in the age of AI disruption. The Decentralised Keiretsu offers economic security, purpose, and community.</p>
          <Link href="/register" className="btn btn-primary">Register Now</Link>
        </div>
      </section>
    </main>
  );
}
