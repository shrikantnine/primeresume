<script>
  import CTA from '../lib/CTA.svelte';
  import { openSignIn } from '../stores/modal.js';
</script>

<section class="job-score section">
  <div class="container">
    <div class="section-layout">
      <div class="section-content">
        <span class="section-label">Job Score & Match</span>
        <h2 class="section-title">Know your match<br>before you apply</h2>
        <p class="section-subtitle">Upload any job description and instantly see how well your resume matches. Get a detailed score with specific suggestions to improve your match rate — before the recruiter even sees it.</p>

        <div class="score-metrics">
          <div class="score-metric">
            <div class="metric-ring">
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="var(--gray-200)" stroke-width="6"/>
                <circle cx="40" cy="40" r="34" fill="none" stroke="var(--brand-blue)" stroke-width="6" stroke-dasharray="150 64" stroke-linecap="round" transform="rotate(-90 40 40)"/>
              </svg>
              <span class="metric-value">92%</span>
            </div>
            <span class="metric-label">Match Score</span>
          </div>
          <div class="score-details">
            <div class="score-row"><span>Skills Match</span><div class="score-bar-bg"><div class="score-bar" style="width: 95%"></div></div><span class="score-pct">95%</span></div>
            <div class="score-row"><span>Experience</span><div class="score-bar-bg"><div class="score-bar" style="width: 88%"></div></div><span class="score-pct">88%</span></div>
            <div class="score-row"><span>Keywords</span><div class="score-bar-bg"><div class="score-bar" style="width: 93%"></div></div><span class="score-pct">93%</span></div>
          </div>
        </div>

        <div class="score-cta">
          <CTA variant="primary" size="default">Check Your Job Match</CTA>
        </div>
      </div>

      <div class="section-visual">
        <div class="job-card-demo">
          <div class="job-card-header">
            <div class="job-company-logo">🏢</div>
            <div>
              <div class="job-card-title">Senior Product Manager</div>
              <div class="job-card-company">TechCorp Inc. • San Francisco, CA</div>
            </div>
          </div>
          <div class="job-card-score-section">
            <div class="match-indicator">
              <div class="match-badge high">Strong Match</div>
              <span class="match-number">92%</span>
            </div>
          </div>
          <div class="job-card-insights">
            <div class="insight positive"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>8 of 8 required skills matched</span></div>
            <div class="insight positive"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Experience level aligned</span></div>
            <div class="insight suggestion"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg><span>Add "Agile methodology" for +3% boost</span></div>
          </div>
          <button class="job-card-apply" on:click={openSignIn}>Tailor Resume for This Job →</button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .job-score { background: var(--white); }
  .section-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .section-content { max-width: 560px; }
  .section-subtitle { margin-bottom: 32px; }
  .score-metrics { display: flex; gap: 32px; align-items: center; margin-bottom: 32px; flex-wrap: wrap; }
  .score-metric { text-align: center; }
  .metric-ring { position: relative; display: inline-flex; align-items: center; justify-content: center; }
  .metric-value { position: absolute; font-size: 1.35rem; font-weight: 800; color: var(--brand-blue); }
  .metric-label { display: block; font-size: 0.825rem; color: var(--gray-500); margin-top: 6px; font-weight: 600; }
  .score-details { flex: 1; display: flex; flex-direction: column; gap: 14px; min-width: 200px; }
  .score-row { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--gray-600); }
  .score-row span:first-child { width: 90px; flex-shrink: 0; }
  .score-bar-bg { flex: 1; height: 6px; background: var(--gray-200); border-radius: 3px; overflow: hidden; }
  .score-bar { height: 100%; background: var(--brand-blue); border-radius: 3px; }
  .score-pct { font-weight: 700; color: var(--brand-blue); width: 36px; text-align: right; }
  .section-visual { display: flex; justify-content: center; }
  .job-card-demo { width: 100%; max-width: 420px; background: var(--white); border-radius: var(--radius-xl); border: 1px solid var(--gray-200); box-shadow: var(--shadow-xl); padding: 24px; }
  .job-card-header { display: flex; gap: 14px; margin-bottom: 20px; }
  .job-company-logo { width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--gray-100); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
  .job-card-title { font-size: 1.05rem; font-weight: 700; color: var(--gray-800); }
  .job-card-company { font-size: 0.825rem; color: var(--gray-400); margin-top: 2px; }
  .match-indicator { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; background: var(--brand-blue-lightest); border-radius: var(--radius-md); margin-bottom: 20px; }
  .match-badge { padding: 4px 12px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
  .match-badge.high { background: #dcfce7; color: #16a34a; }
  .match-number { font-size: 1.5rem; font-weight: 900; color: var(--brand-blue); }
  .job-card-insights { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
  .insight { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--gray-600); }
  .job-card-apply { width: 100%; padding: 14px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-md); background: var(--brand-blue); color: var(--white); transition: all 0.2s; }
  .job-card-apply:hover { background: var(--brand-blue-dark); }
  @media (max-width: 900px) { .section-layout { grid-template-columns: 1fr; gap: 40px; } .section-content { max-width: 100%; } }
</style>
