<svelte:head>
  <title>Data Policy — PrimeResume</title>
</svelte:head>

<div class="policy-page">
  <div class="container">
    <div class="policy-content">
      <h1>Data Policy</h1>
      <p class="last-updated">Last updated: August 8, 2025</p>

      <section>
        <h2>1. Data Collection Overview</h2>
        <p>This Data Policy explains how PrimeResume collects, processes, stores, and deletes your data. It complements our Privacy Policy by providing detailed technical information about data handling practices.</p>
      </section>

      <section>
        <h2>2. Types of Data Stored</h2>
        <ul>
          <li><strong>Profile Data:</strong> Name, email, profile picture, authentication provider</li>
          <li><strong>Resume Data:</strong> All resume content including personal details, work history, education, skills, summaries, and custom sections</li>
          <li><strong>Generated Content:</strong> AI-generated suggestions, ATS scores, job match analyses</li>
          <li><strong>Subscription Data:</strong> Plan type, payment history (payment details are stored by our payment processor, not by PrimeResume)</li>
          <li><strong>Usage Analytics:</strong> Feature usage, session duration, feature adoption metrics</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Retention</h2>
        <p>We retain your data for as long as your account is active. Upon account deletion:</p>
        <ul>
          <li>Resume content is permanently deleted within 30 days</li>
          <li>Account information is retained for 90 days for legal compliance</li>
          <li>Anonymized usage data may be retained indefinitely for analytics</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Encryption</h2>
        <p>All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Database backups are also encrypted.</p>
      </section>

      <section>
        <h2>5. AI Data Processing</h2>
        <p>When using AI features:</p>
        <ul>
          <li>Resume data is transmitted to our AI providers solely for generating suggestions</li>
          <li>Data is processed in real-time and not stored by AI providers for training</li>
          <li>We maintain data processing agreements with all AI service providers</li>
        </ul>
      </section>

      <section>
        <h2>6. Data Portability</h2>
        <p>You can export all your resume data at any time in PDF, DOCX, JSON, or plain text formats through your account dashboard.</p>
      </section>

      <section>
        <h2>7. Third-Party Integrations</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li>Authentication: Google, Facebook, LinkedIn OAuth</li>
          <li>Payment Processing: Stripe</li>
          <li>Cloud Infrastructure: AWS</li>
          <li>AI Services: OpenAI API</li>
        </ul>
        <p>Each provider processes data according to their respective privacy policies and our data processing agreements.</p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>For data-related requests, including data deletion or export, contact <a href="mailto:data@primeresume.com">data@primeresume.com</a>.</p>
      </section>
    </div>
  </div>
</div>

<style>
  .policy-page {
    padding: 160px 0 80px;
    background: var(--white);
  }
  .policy-content {
    max-width: 780px;
    margin: 0 auto;
  }
  .policy-content h1 {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--gray-900);
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .last-updated {
    color: var(--gray-400);
    font-size: 0.9rem;
    margin-bottom: 40px;
  }
  .policy-content section {
    margin-bottom: 32px;
  }
  .policy-content h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray-800);
    margin-bottom: 12px;
  }
  .policy-content p {
    font-size: 0.95rem;
    color: var(--gray-600);
    line-height: 1.75;
    margin-bottom: 12px;
  }
  .policy-content ul {
    padding-left: 24px;
    margin-bottom: 12px;
  }
  .policy-content li {
    font-size: 0.95rem;
    color: var(--gray-600);
    line-height: 1.75;
  }
  .policy-content a {
    color: var(--brand-blue);
    text-decoration: underline;
  }
</style>
