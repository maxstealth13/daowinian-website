import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Join the Decentralised Keiretsu</h1>
          <p>Register today and become part of the movement building a sustainable economic future in the age of AI.</p>
        </div>
      </section>

      <section id="registration" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Registration Form</h2>
            <p>Complete the form below to begin your journey with the DK.</p>
          </div>
          
          <div className="registration-form">
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" id="age" name="age" min="18" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" name="gender" required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="other">Other</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select id="country" name="country" required>
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="IN">India</option>
                  <option value="BR">Brazil</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Mobile Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="guild">Preferred Guild (Optional)</label>
                <select id="guild" name="guild">
                  <option value="">I'm not sure yet</option>
                  <option value="technology">Technology Guild</option>
                  <option value="creative">Creative Guild</option>
                  <option value="data">Data Guild</option>
                  <option value="sustainability">Sustainability Guild</option>
                  <option value="governance">Governance Guild</option>
                  <option value="research">Research Guild</option>
                  <option value="finance">Finance Guild</option>
                  <option value="health">Health Guild</option>
                  <option value="infrastructure">Infrastructure Guild</option>
                  <option value="security">Security Guild</option>
                  <option value="community">Community Guild</option>
                  <option value="education">Education Guild</option>
                </select>
                <p className="form-help">Don't worry if you're not sure - our Guild assignment process will help you find the best fit.</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="subscription">Subscription Tier</label>
                <select id="subscription" name="subscription" required>
                  <option value="explorer">Explorer (Free)</option>
                  <option value="contributor">Contributor ($19.99/month)</option>
                  <option value="innovator">Innovator ($49.99/month)</option>
                </select>
              </div>
              
              <div className="form-group checkbox">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">I have read and agree to the <Link href="/legal/terms">Terms of Service</Link>, <Link href="/legal/privacy">Privacy Policy</Link>, and <Link href="/legal/constitution">DK Constitution</Link>.</label>
              </div>
              
              <div className="form-group checkbox">
                <input type="checkbox" id="marketing" name="marketing" />
                <label htmlFor="marketing">I would like to receive updates, newsletters, and other communications from the Decentralised Keiretsu.</label>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Complete Registration</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="process" className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Registration Process</h2>
            <p>What to expect after you submit your registration.</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">1️⃣</div>
              <h3>Submit Registration</h3>
              <p>Complete the form with your basic information and subscription preferences.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">2️⃣</div>
              <h3>Verification</h3>
              <p>Confirm your email address and verify your account.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">3️⃣</div>
              <h3>Guild Assessment</h3>
              <p>Complete our comprehensive Guild assessment to find your ideal fit.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">4️⃣</div>
              <h3>Guild Assignment</h3>
              <p>Receive your Guild recommendation and confirm your primary affiliation.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">5️⃣</div>
              <h3>Onboarding</h3>
              <p>Complete the Guild-specific onboarding process and meet your new community.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">6️⃣</div>
              <h3>Activation</h3>
              <p>Gain full access to all member benefits and begin your journey with the DK.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Questions About Registration?</h2>
          <p>Our team is here to help you through the registration process and answer any questions you may have.</p>
          <Link href="/contact?subject=registration" className="btn btn-primary">Contact Support</Link>
        </div>
      </section>
    </main>
  );
}
