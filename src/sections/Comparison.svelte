<script>
  import CTA from '../lib/CTA.svelte';

  const comparisons = [
    { feature: 'ATS-Optimized Templates', prime: true, reactive: true, enhancv: false, zety: true },
    { feature: 'AI Resume Writing', prime: true, reactive: true, enhancv: true, zety: false },
    { feature: 'Chat-Based Builder', prime: true, reactive: false, enhancv: false, zety: false },
    { feature: 'Job Match Scoring', prime: true, reactive: false, enhancv: false, zety: false },
    { feature: 'Real-Time ATS Analysis', prime: true, reactive: false, enhancv: false, zety: true },
    { feature: 'Multi-Language Support', prime: true, reactive: true, enhancv: false, zety: false },
    { feature: 'LinkedIn Optimizer', prime: true, reactive: false, enhancv: false, zety: false },
    { feature: 'Cover Letter AI', prime: true, reactive: true, enhancv: true, zety: true },
    { feature: 'Interview Prep AI', prime: true, reactive: false, enhancv: false, zety: false },
    { feature: 'Career Coach AI', prime: true, reactive: false, enhancv: false, zety: false },
    { feature: 'Unlimited Resumes', prime: true, reactive: true, enhancv: false, zety: true },
    { feature: 'PDF/DOCX/TXT Export', prime: true, reactive: true, enhancv: true, zety: true },
  ];
</script>

<section id="comparison" class="comparison section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Comparison</span>
      <h2 class="section-title">See why PrimeResume<br>is the clear choice</h2>
      <p class="section-subtitle">We've compared PrimeResume against the leading alternatives. Here's how we stack up.</p>
    </div>

    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th class="feature-col">Feature</th>
            <th class="prime-col"><span class="table-logo">PrimeResume</span></th>
            <th>Reactive Resume</th>
            <th>Enhancv</th>
            <th>Zety</th>
          </tr>
        </thead>
        <tbody>
          {#each comparisons as row}
            <tr>
              <td class="feature-name">{row.feature}</td>
              <td class="prime-cell">
                {#if row.prime}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>{:else}<span class="cross">—</span>{/if}
              </td>
              <td>{#if row.reactive}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>{:else}<span class="cross">—</span>{/if}</td>
              <td>{#if row.enhancv}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>{:else}<span class="cross">—</span>{/if}</td>
              <td>{#if row.zety}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>{:else}<span class="cross">—</span>{/if}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="comparison-cta"><CTA variant="primary" size="lg">Try PrimeResume Free</CTA></div>
  </div>
</section>

<style>
  .comparison { background: var(--gray-50); }
  .section-header { text-align: center; margin-bottom: 48px; }
  .section-header .section-subtitle { margin: 0 auto; }
  .comparison-table-wrapper { overflow-x: auto; margin-bottom: 40px; border-radius: var(--radius-lg); border: 1px solid var(--gray-200); background: var(--white); box-shadow: var(--shadow-md); }
  .comparison-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
  .comparison-table thead { background: var(--brand-blue); color: var(--white); }
  .comparison-table th { padding: 16px 20px; text-align: center; font-weight: 700; font-size: 0.85rem; white-space: nowrap; }
  .comparison-table th.feature-col { text-align: left; min-width: 200px; }
  .prime-col { background: var(--brand-blue-dark); }
  .table-logo { color: var(--white); letter-spacing: -0.01em; }
  .comparison-table td { padding: 14px 20px; text-align: center; border-bottom: 1px solid var(--gray-100); }
  .comparison-table td.feature-name { text-align: left; font-weight: 500; color: var(--gray-700); }
  .prime-cell { background: var(--brand-blue-lightest); }
  .cross { color: var(--gray-300); font-size: 1.1rem; }
  .comparison-table tbody tr:last-child td { border-bottom: none; }
  .comparison-cta { text-align: center; }
</style>
