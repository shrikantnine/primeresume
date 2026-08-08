<svelte:head>
  <title>Affiliate Program — PrimeResume</title>
</svelte:head>

<div class="affiliate-page">
  <div class="container">
    <div class="page-header">
      <span class="section-label">Affiliate Program</span>
      <h1>Earn commissions by sharing<br>PrimeResume with your audience</h1>
      <p>Join our affiliate program and earn competitive commissions for every user you refer. Perfect for career coaches, HR professionals, content creators, and educators.</p>
    </div>

    <div class="commission-section">
      <h2>Commission Structure</h2>
      <div class="commission-cards">
        <div class="commission-card">
          <div class="commission-rate">30%</div>
          <div class="commission-label">Recurring Commission</div>
          <p>Earn 30% recurring commission on every subscription payment from your referred users — for the lifetime of their account.</p>
        </div>
        <div class="commission-card">
          <div class="commission-rate">$50</div>
          <div class="commission-label">Minimum Payout</div>
          <p>Payouts are processed monthly via PayPal or direct bank transfer once you reach the $50 minimum threshold.</p>
        </div>
        <div class="commission-card">
          <div class="commission-rate">90 Days</div>
          <div class="commission-label">Cookie Duration</div>
          <p>Your referral cookies last 90 days. If a user signs up within 90 days of clicking your link, you earn the commission.</p>
        </div>
      </div>
    </div>

    <div class="benefits-section">
      <h2>Why Partner With PrimeResume?</h2>
      <div class="benefits-grid">
        <div class="benefit-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>High-converting landing page with proven 4.2% conversion rate</span>
        </div>
        <div class="benefit-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Real-time dashboard to track clicks, conversions, and earnings</span>
        </div>
        <div class="benefit-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Ready-to-use marketing materials: banners, email templates, social posts</span>
        </div>
        <div class="benefit-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Dedicated affiliate support team to help you maximize earnings</span>
        </div>
        <div class="benefit-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Monthly performance bonuses for top affiliates</span>
        </div>
        <div class="benefit-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Exclusive discount codes to share with your audience</span>
        </div>
      </div>
    </div>

    <div class="apply-section">
      <h2>Ready to Join?</h2>
      <p>We're looking for partners who are passionate about helping professionals advance their careers. Apply today and start earning within 24 hours.</p>
      <a href="mailto:affiliates@primeresume.com" class="btn btn-primary btn-lg">
        Apply to Become an Affiliate
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</div>

<style>
  .affiliate-page {
    padding: 160px 0 80px;
    background: var(--white);
  }

  .page-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 80px;
  }

  .page-header h1 {
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 900;
    color: var(--gray-900);
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .page-header p {
    font-size: 1.1rem;
    color: var(--gray-500);
    line-height: 1.75;
  }

  .commission-section { margin-bottom: 80px; }

  .commission-section h2 {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
  }

  .commission-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
  }

  .commission-card {
    text-align: center;
    padding: 32px 24px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--gray-200);
    background: var(--white);
  }

  .commission-rate {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--brand-blue);
  }

  .commission-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--gray-500);
    margin-bottom: 12px;
  }

  .commission-card p {
    font-size: 0.875rem;
    color: var(--gray-500);
    line-height: 1.6;
  }

  .benefits-section { margin-bottom: 80px; }

  .benefits-section h2 {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 700px;
    margin: 0 auto;
  }

  .benefit-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: var(--gray-600);
    padding: 16px;
    border-radius: var(--radius-md);
    background: var(--gray-50);
  }

  .apply-section {
    text-align: center;
    padding: 48px;
    background: var(--brand-blue-lightest);
    border-radius: var(--radius-xl);
    max-width: 700px;
    margin: 0 auto;
  }

  .apply-section h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .apply-section p {
    font-size: 1rem;
    color: var(--gray-500);
    margin-bottom: 28px;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    .commission-cards { grid-template-columns: 1fr; }
    .benefits-grid { grid-template-columns: 1fr; }
  }
</style>
