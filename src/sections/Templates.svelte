<script>
  import CTA from '../lib/CTA.svelte';
  import { openSignIn } from '../stores/modal.js';

  const templates = [
    { name: 'Modern Professional', color: '#1a1a2e', accent: '#2665ec', tag: 'Most Popular' },
    { name: 'Minimal Clean', color: '#ffffff', accent: '#111827', tag: 'ATS-Optimized' },
    { name: 'Creative Bold', color: '#f8fafc', accent: '#7c3aed', tag: 'New' },
    { name: 'Executive', color: '#0f172a', accent: '#38bdf8', tag: 'Executive Pick' },
    { name: 'Academic CV', color: '#fefce8', accent: '#ca8a04', tag: 'Academic' },
    { name: 'Tech Startup', color: '#ecfdf5', accent: '#059669', tag: 'Trending' },
  ];
</script>

<section id="templates" class="templates section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Resume Templates</span>
      <h2 class="section-title">Stunning templates designed<br>to beat ATS systems</h2>
      <p class="section-subtitle">
        Choose from dozens of professionally designed templates. Every template is
        ATS-compliant, customizable, and optimized for maximum readability.
      </p>
    </div>

    <div class="templates-grid">
      {#each templates as template, i}
        <div class="template-card animate-fade-in-up" style="animation-delay: {i * 0.08}s">
          <div class="template-preview" style="background: {template.color}">
            <div class="template-mock">
              <div class="mock-header" style="background: {template.accent}"></div>
              <div class="mock-line w-50" style="background: {template.accent}; opacity: 0.3;"></div>
              <div class="mock-line w-30"></div>
              <div class="mock-line w-80"></div>
              <div class="mock-line w-60"></div>
              <div class="mock-line w-70"></div>
              <div class="mock-section" style="background: {template.accent}; opacity: 0.15;"></div>
              <div class="mock-line w-75"></div>
              <div class="mock-line w-55"></div>
            </div>
          </div>
          <div class="template-info">
            <div class="template-name-row">
              <h3>{template.name}</h3>
              <span class="template-tag">{template.tag}</span>
            </div>
            <button class="template-use-btn" on:click={openSignIn}>
              Use Template
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      {/each}
    </div>

    <div class="templates-cta">
      <CTA variant="primary" size="lg">
        Browse All Templates
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </CTA>
    </div>
  </div>
</section>

<style>
  .templates { background: var(--white); }
  .section-header { text-align: center; margin-bottom: 60px; }
  .section-header .section-subtitle { margin: 0 auto; }
  .templates-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
  .template-card { background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--gray-200); overflow: hidden; transition: all 0.3s ease; }
  .template-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); border-color: var(--brand-blue-lighter); }
  .template-preview { height: 200px; padding: 20px; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid var(--gray-100); }
  .template-mock { width: 140px; }
  .mock-header { height: 6px; border-radius: 3px; margin-bottom: 12px; }
  .mock-line { height: 4px; background: var(--gray-300); border-radius: 2px; margin-bottom: 6px; }
  .mock-line.w-50 { width: 50%; } .mock-line.w-30 { width: 30%; } .mock-line.w-80 { width: 80%; }
  .mock-line.w-60 { width: 60%; } .mock-line.w-70 { width: 70%; } .mock-line.w-75 { width: 75%; } .mock-line.w-55 { width: 55%; }
  .mock-section { height: 4px; border-radius: 2px; margin: 10px 0 8px; width: 40%; }
  .template-info { padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; }
  .template-name-row { display: flex; align-items: center; gap: 8px; }
  .template-name-row h3 { font-size: 0.925rem; font-weight: 600; color: var(--gray-800); }
  .template-tag { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 100px; background: var(--brand-blue-lightest); color: var(--brand-blue); }
  .template-use-btn { display: flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 0.85rem; font-weight: 600; color: var(--brand-blue); background: var(--brand-blue-lightest); border-radius: var(--radius-sm); transition: all 0.2s; }
  .template-use-btn:hover { background: var(--brand-blue); color: var(--white); }
  .templates-cta { text-align: center; }
  @media (max-width: 900px) { .templates-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .templates-grid { grid-template-columns: 1fr; } }
</style>
