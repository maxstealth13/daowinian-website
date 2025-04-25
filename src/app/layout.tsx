import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAOwininan - Decentralised Keiretsu",
  description: "Plan B for Humanity in the Age of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <header>
          <div className="container header-container">
            <a href="/" className="logo">
              <div className="logo-icon">DK</div>
              DAOwininan
            </a>
            <nav>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/guilds">Guilds</a></li>
                <li><a href="/treasury">Treasury</a></li>
                <li><a href="/subscribe">Subscribe</a></li>
                <li><a href="/register">Register</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <h3>About DK</h3>
                <ul>
                  <li><a href="/about">Our Mission</a></li>
                  <li><a href="/about#structure">DK Structure</a></li>
                  <li><a href="/about#history">Our History</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Guilds</h3>
                <ul>
                  <li><a href="/guilds">Guild System</a></li>
                  <li><a href="/guilds#find">Find Your Guild</a></li>
                  <li><a href="/guilds#leaders">Guild Leaders</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Treasury</h3>
                <ul>
                  <li><a href="/treasury">Bitcoin Treasury</a></li>
                  <li><a href="/treasury#model">Economic Model</a></li>
                  <li><a href="/treasury#reports">Financial Reports</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Legal</h3>
                <ul>
                  <li><a href="/legal/terms">Terms of Service</a></li>
                  <li><a href="/legal/privacy">Privacy Policy</a></li>
                  <li><a href="/legal/gdpr">GDPR Compliance</a></li>
                  <li><a href="/legal/cookies">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="social-links">
                <a href="#" aria-label="Twitter"><span>𝕏</span></a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Telegram">T</a>
                <a href="#" aria-label="Discord">D</a>
              </div>
              <p>&copy; {new Date().getFullYear()} Decentralised Keiretsu. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
