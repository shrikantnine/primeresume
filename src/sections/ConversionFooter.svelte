<script>
  import CTA from '../lib/CTA.svelte';
</script>

<section class="conversion-footer">
  <div class="conversion-bg"></div>
  <div class="container">
    <div class="conversion-content">
      <h2 class="conversion-title">Ready to land your<br>dream job?</h2>
      <p class="conversion-subtitle">Join 100,000+ professionals who have built ATS-optimized resumes with PrimeResume. Start free, upgrade when you're ready.</p>

      <div class="conversion-ctas">
        <CTA variant="white" size="xl">Get Started Free <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></CTA>
      </div>

      <div class="conversion-features">
        <div class="conv-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>No credit card required</span></div>
        <div class="conv-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>ATS-optimized templates</span></div>
        <div class="conv-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>AI-powered builder</span></div>
        <div class="conv-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>7-day money-back guarantee</span></div>
      </div>
    </div>
  </div>
</section>

<style>
  .conversion-footer { position: relative; background: linear-gradient(135deg, var(--brand-blue) 0%, var(--brand-blue-dark) 100%); padding: 100px 0; overflow: hidden; }
  .conversion-bg { position: absolute; inset: 0; background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 50%); pointer-events: none; }
  .conversion-content { position: relative; z-index: 1; text-align: center; }
  .conversion-title { font-size: clamp(2.25rem, 5vw, 3.5rem); font-weight: 900; color: var(--white); line-height: 1.15; margin-bottom: 20px; letter-spacing: -0.02em; }
  .conversion-subtitle { font-size: 1.15rem; color: rgba(255,255,255,0.75); max-width: 560px; margin: 0 auto 40px; line-height: 1.7; }
  .conversion-ctas { display: flex; justify-content: center; gap: 16px; margin-bottom: 40px; }
  .conversion-features { display: flex; justify-content: center; flex-wrap: wrap; gap: 24px; }
  .conv-feature { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.65); font-size: 0.9rem; font-weight: 500; }
  .conv-feature svg { color: rgba(255,255,255,0.5); }
</style>
