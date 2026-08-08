<script>
  import CTA from '../lib/CTA.svelte';
  import { openSignIn } from '../stores/modal.js';

  const plans = [
    {
      name: '1 Month', price: '$29', period: 'per month',
      description: 'Perfect for active job seekers who need results fast.',
      features: ['All premium templates', 'AI resume builder', 'Chat-resume assistant', 'ATS score & optimization', 'Job match scoring', 'Export to PDF & DOCX', 'Basic cover letters'],
      highlighted: false
    },
    {
      name: '3 Months', price: '$69', period: '$23/month',
      description: 'Most popular — gives you time to land the right role.',
      features: ['Everything in 1 Month', 'Priority AI processing', 'Unlimited resume versions', 'Advanced job matching', 'Multi-language resumes', 'LinkedIn profile optimizer', 'Premium cover letters', 'Interview question prep'],
      highlighted: true, badge: 'Best Value'
    },
    {
      name: '6 Months', price: '$199', period: '$33/month',
      description: 'For career changers and those who want full support.',
      features: ['Everything in 3 Months', 'Career coach AI', 'Salary negotiation tips', 'Personal branding kit', 'Networking message templates', 'Unlimited everything', 'Priority support', 'Early access to new features', 'Custom resume review'],
      highlighted: false
    }
  ];
</script>

<section id="pricing" class="pricing section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Pricing</span>
      <h2 class="section-title">Simple, transparent pricing</h2>
      <p class="section-subtitle">Choose the plan that fits your job search timeline. No hidden fees. Cancel anytime. All plans include a 7-day money-back guarantee.</p>
    </div>

    <div class="pricing-grid">
      {#each plans as plan, i}
        <div class="pricing-card animate-fade-in-up" class:highlighted={plan.highlighted} style="animation-delay: {i * 0.1}s">
          {#if plan.badge}<div class="pricing-badge">{plan.badge}</div>{/if}
          <div class="pricing-header">
            <h3 class="plan-name">{plan.name}</h3>
            <div class="plan-price"><span class="price-amount">{plan.price}</span><span class="price-period">{plan.period}</span></div>
            <p class="plan-description">{plan.description}</p>
          </div>
          <div class="pricing-features">
            {#each plan.features as feature}
              <div class="feature-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{feature}</span>
              </div>
            {/each}
          </div>
          <button class="pricing-btn" class:highlighted={plan.highlighted} on:click={openSignIn}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      {/each}
    </div>

    <div class="pricing-guarantee">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <span>7-day money-back guarantee on all plans. No questions asked.</span>
    </div>
  </div>
</section>

<style>
  .pricing { background: var(--white); }
  .section-header { text-align: center; margin-bottom: 60px; }
  .section-header .section-subtitle { margin: 0 auto; }
  .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto 40px; }
  .pricing-card { position: relative; background: var(--white); border-radius: var(--radius-xl); border: 2px solid var(--gray-200); padding: 40px 32px; display: flex; flex-direction: column; transition: all 0.3s ease; }
  .pricing-card.highlighted { border-color: var(--brand-blue); box-shadow: 0 0 0 4px rgba(38,101,236,0.1), var(--shadow-xl); transform: scale(1.03); z-index: 1; }
  .pricing-card:hover { box-shadow: var(--shadow-xl); }
  .pricing-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--brand-blue); color: var(--white); padding: 6px 20px; border-radius: 100px; font-size: 0.8rem; font-weight: 700; }
  .pricing-header { text-align: center; margin-bottom: 32px; }
  .plan-name { font-size: 1.15rem; font-weight: 700; color: var(--gray-700); margin-bottom: 16px; }
  .plan-price { margin-bottom: 12px; }
  .price-amount { font-size: 3rem; font-weight: 900; color: var(--gray-900); letter-spacing: -0.03em; }
  .price-period { font-size: 0.9rem; color: var(--gray-400); display: block; margin-top: 4px; }
  .plan-description { font-size: 0.9rem; color: var(--gray-500); line-height: 1.5; }
  .pricing-features { flex: 1; margin-bottom: 32px; display: flex; flex-direction: column; gap: 12px; }
  .feature-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: var(--gray-600); line-height: 1.4; }
  .feature-item svg { color: #22c55e; flex-shrink: 0; margin-top: 1px; }
  .pricing-btn { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 16px 24px; font-size: 1rem; font-weight: 700; border-radius: var(--radius-md); border: 2px solid var(--gray-200); background: var(--white); color: var(--gray-800); transition: all 0.2s; }
  .pricing-btn:hover { border-color: var(--brand-blue); color: var(--brand-blue); }
  .pricing-btn.highlighted { background: var(--brand-blue); color: var(--white); border-color: var(--brand-blue); box-shadow: 0 4px 14px rgba(38,101,236,0.35); }
  .pricing-btn.highlighted:hover { background: var(--brand-blue-dark); box-shadow: 0 6px 20px rgba(38,101,236,0.45); }
  .pricing-guarantee { display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 0.925rem; color: var(--gray-500); font-weight: 500; }
  @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr; max-width: 450px; } .pricing-card.highlighted { transform: none; } }
</style>
