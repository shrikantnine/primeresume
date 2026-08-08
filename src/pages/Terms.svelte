<script>
  import CTA from '../lib/CTA.svelte';
</script>

<svelte:head>
  <title>Terms of Service — PrimeResume</title>
</svelte:head>

<div class="policy-page">
  <div class="container">
    <div class="policy-content">
      <h1>Terms of Service</h1>
      <p class="last-updated">Last updated: August 8, 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using PrimeResume ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>PrimeResume provides an AI-powered resume building platform that helps users create, optimize, and manage professional resumes and cover letters. The Service includes ATS compatibility scoring, AI-generated content suggestions, job matching analysis, and related career tools.</p>
      </section>

      <section>
        <h2>3. User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account. You must be at least 16 years old to use the Service.</p>
        <p>You may create an account using Google, Facebook, LinkedIn, or email authentication. By using third-party authentication, you authorize us to access certain account information in accordance with our Privacy Policy.</p>
      </section>

      <section>
        <h2>4. Subscriptions and Payments</h2>
        <p>PrimeResume offers subscription plans at the following rates:</p>
        <ul>
          <li>1 Month Plan: $29.00</li>
          <li>3 Month Plan: $69.00 (equivalent to $23/month)</li>
          <li>6 Month Plan: $199.00 (equivalent to $33/month)</li>
        </ul>
        <p>All payments are processed securely through our payment providers. Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time through your account settings. Refund requests are handled according to our 7-day money-back guarantee policy.</p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>The PrimeResume platform, including its design, logo, branding, templates, and underlying code, is the exclusive property of PrimeResume. Users retain all rights to the content they create using the Service. By using the Service, you grant PrimeResume a limited license to store and process your content solely for the purpose of providing the Service.</p>
      </section>

      <section>
        <h2>6. Acceptable Use</h2>
        <p>You agree not to: (a) use the Service for any unlawful purpose; (b) attempt to gain unauthorized access to any part of the Service; (c) interfere with or disrupt the Service; (d) upload malicious code or content; (e) use automated means to access the Service without permission; (f) resell or redistribute the Service without authorization.</p>
      </section>

      <section>
        <h2>7. AI-Generated Content</h2>
        <p>PrimeResume uses artificial intelligence to generate resume content suggestions. While we strive for accuracy, AI-generated content should be reviewed by the user before use. PrimeResume is not responsible for factual errors in AI-generated content. Users are solely responsible for the accuracy of information in their final resumes.</p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>PrimeResume is provided on an "as is" basis. We do not guarantee specific outcomes from using the Service, including but not limited to interview invitations or job offers. To the maximum extent permitted by law, PrimeResume shall not be liable for any indirect, incidental, or consequential damages arising from the use of the Service.</p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>We reserve the right to suspend or terminate accounts that violate these Terms. Users may terminate their accounts at any time. Upon termination, your content will be deleted in accordance with our Data Policy.</p>
      </section>

      <section>
        <h2>10. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Material changes will be communicated via email or through the Service. Continued use after changes constitutes acceptance of the updated Terms.</p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:legal@primeresume.com">legal@primeresume.com</a>.</p>
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
