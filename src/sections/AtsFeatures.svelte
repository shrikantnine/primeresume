<script>
  import CTA from '../lib/CTA.svelte';

  const features = [
    { icon: 'scan', title: 'Real-Time ATS Scanning', description: 'Our AI scans your resume against the most popular ATS systems including Greenhouse, Lever, Workday, and Taleo. Get instant feedback on what passes and what gets filtered out.' },
    { icon: 'keywords', title: 'Smart Keyword Optimization', description: 'Automatically identifies missing keywords from job descriptions and seamlessly integrates them without keyword stuffing — maintaining natural readability.' },
    { icon: 'format', title: 'ATS-Safe Formatting', description: 'Eliminates problematic elements like tables, columns, images, and complex formatting that confuse ATS parsers. Clean, parseable layouts guaranteed.' },
    { icon: 'score', title: 'Comprehensive ATS Score', description: 'Get a detailed ATS compatibility score (0-100) with specific, actionable recommendations. See exactly what to fix and how to fix it.' },
    { icon: 'sections', title: 'Section-by-Section Analysis', description: 'Each resume section is individually analyzed for ATS compliance — from contact info and summary to skills, experience, and education.' },
    { icon: 'export', title: 'Multi-Format Export', description: 'Export your ATS-optimized resume in PDF, DOCX, and plain-text formats. All formats maintain 100% ATS readability across every platform.' }
  ];

  const icons = {
    scan: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
    keywords: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/>',
    format: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    score: '<path d="M12 20V10M18 20V4M6 20v-4"/>',
    sections: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    export: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
  };
</script>

<section id="features" class="ats-features section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">ATS System Pro</span>
      <h2 class="section-title">Beat the bots.<br>Get your resume seen by humans.</h2>
      <p class="section-subtitle">75% of resumes are rejected by ATS before a human ever sees them. PrimeResume ensures yours lands in the "yes" pile — every single time.</p>
    </div>

    <div class="features-grid">
      {#each features as feature, i}
        <div class="feature-card animate-fade-in-up" style="animation-delay: {i * 0.08}s">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{@html icons[feature.icon]}</svg>
          </div>
          <h3 class="feature-title">{feature.title}</h3>
          <p class="feature-description">{feature.description}</p>
        </div>
      {/each}
    </div>

    <div class="ats-cta">
      <CTA variant="primary" size="lg">Optimize Your Resume Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></CTA>
    </div>
  </div>
</section>

<style>
  .ats-features { background: var(--brand-blue-lightest); }
  .section-header { text-align: center; margin-bottom: 60px; }
  .section-header .section-subtitle { margin: 0 auto; }
  .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
  .feature-card { background: var(--white); border-radius: var(--radius-lg); padding: 32px; border: 1px solid var(--gray-200); transition: all 0.3s ease; }
  .feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--brand-blue-lighter); }
  .feature-icon { width: 52px; height: 52px; border-radius: var(--radius-md); background: var(--brand-blue-lightest); color: var(--brand-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
  .feature-title { font-size: 1.05rem; font-weight: 700; color: var(--gray-800); margin-bottom: 10px; }
  .feature-description { font-size: 0.9rem; color: var(--gray-500); line-height: 1.65; }
  .ats-cta { text-align: center; }
  @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr; } }
</style>
