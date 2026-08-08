<script>
  import CTA from '../lib/CTA.svelte';
  import { openSignIn } from '../stores/modal.js';
</script>

<section class="hero">
  <div class="hero-bg">
    <div class="bg-blob bg-blob-1"></div>
    <div class="bg-blob bg-blob-2"></div>
    <div class="bg-grid"></div>
  </div>

  <div class="container hero-content">
    <div class="hero-badge animate-fade-in-up">
      <span class="badge-dot"></span>
      Powered by AI • Trusted by 100,000+ professionals
    </div>

    <h1 class="hero-title animate-fade-in-up" style="animation-delay: 0.1s">
      Build ATS-Friendly Resumes<br>
      <span class="text-gradient">With AI Precision</span>
    </h1>

    <p class="hero-subtitle animate-fade-in-up" style="animation-delay: 0.2s">
      PrimeResume combines advanced AI with industry-best templates to create
      resumes that beat applicant tracking systems. Chat with AI, score your resume
      against job descriptions, and land more interviews — all in minutes.
    </p>

    <div class="hero-ctas animate-fade-in-up" style="animation-delay: 0.3s">
      <CTA variant="primary" size="xl">
        Get Started Free
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </CTA>
      <CTA variant="secondary" size="xl">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Watch Demo
      </CTA>
    </div>

    <div class="hero-stats animate-fade-in-up" style="animation-delay: 0.4s">
      <div class="stat">
        <span class="stat-number">100K+</span>
        <span class="stat-label">Resumes Built</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">85%</span>
        <span class="stat-label">Interview Rate</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">4.9</span>
        <span class="stat-label">User Rating</span>
        <div class="stat-stars">
          {#each Array(5) as _, i}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          {/each}
        </div>
      </div>
    </div>

    <div class="hero-preview animate-fade-in-up" style="animation-delay: 0.5s">
      <div class="preview-window">
        <div class="preview-toolbar">
          <div class="toolbar-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="toolbar-title">PrimeResume Builder</span>
        </div>
        <div class="preview-body">
          <div class="preview-sidebar">
            <div class="sidebar-item active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              <span>Personal</span>
            </div>
            <div class="sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
              <span>Skills</span>
            </div>
            <div class="sidebar-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
              <span>Experience</span>
            </div>
          </div>
          <div class="preview-main">
            <div class="preview-resume">
              <div class="resume-line resume-name"></div>
              <div class="resume-line resume-role"></div>
              <div class="resume-line resume-text w-80"></div>
              <div class="resume-line resume-text w-60"></div>
              <div class="resume-line resume-text w-90"></div>
              <div class="resume-line resume-text w-70"></div>
              <div class="resume-section-title"></div>
              <div class="resume-line resume-text w-85"></div>
              <div class="resume-line resume-text w-75"></div>
              <div class="resume-line resume-text w-65"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 140px 0 80px;
    overflow: hidden;
    background: linear-gradient(180deg, var(--white) 0%, var(--brand-blue-lightest) 100%);
  }
  .hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .bg-blob { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.15; }
  .bg-blob-1 { width: 600px; height: 600px; background: var(--brand-blue); top: -200px; right: -100px; }
  .bg-blob-2 { width: 400px; height: 400px; background: var(--brand-blue-light); bottom: -100px; left: -100px; }
  .bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(38,101,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(38,101,236,0.03) 1px, transparent 1px); background-size: 60px 60px; }
  .hero-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; text-align: center; }
  .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; background: var(--white); border: 1px solid var(--gray-200); border-radius: 100px; font-size: 0.875rem; font-weight: 500; color: var(--gray-600); margin-bottom: 32px; box-shadow: var(--shadow-sm); }
  .badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; animation: pulse-glow 2s infinite; }
  .hero-title { font-size: clamp(2.75rem, 6vw, 4.5rem); font-weight: 900; line-height: 1.1; color: var(--gray-900); letter-spacing: -0.03em; max-width: 900px; margin-bottom: 24px; }
  .text-gradient { background: linear-gradient(135deg, var(--brand-blue) 0%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hero-subtitle { font-size: 1.15rem; color: var(--gray-500); max-width: 640px; line-height: 1.75; margin-bottom: 36px; }
  .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin-bottom: 56px; }
  .hero-stats { display: flex; align-items: center; gap: 40px; margin-bottom: 64px; }
  .stat { text-align: center; }
  .stat-number { display: block; font-size: 2rem; font-weight: 800; color: var(--gray-900); letter-spacing: -0.02em; }
  .stat-label { display: block; font-size: 0.875rem; color: var(--gray-500); margin-top: 4px; }
  .stat-stars { display: flex; gap: 2px; justify-content: center; margin-top: 4px; }
  .stat-divider { width: 1px; height: 40px; background: var(--gray-200); }
  .hero-preview { width: 100%; max-width: 800px; }
  .preview-window { background: var(--white); border-radius: var(--radius-lg); box-shadow: var(--shadow-2xl); border: 1px solid var(--gray-200); overflow: hidden; }
  .preview-toolbar { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: var(--gray-50); border-bottom: 1px solid var(--gray-200); }
  .toolbar-dots { display: flex; gap: 6px; }
  .toolbar-dots .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.red { background: #ef4444; } .dot.yellow { background: #f59e0b; } .dot.green { background: #22c55e; }
  .toolbar-title { font-size: 0.8rem; color: var(--gray-400); flex: 1; text-align: center; }
  .preview-body { display: flex; min-height: 300px; }
  .preview-sidebar { width: 180px; padding: 16px; border-right: 1px solid var(--gray-100); display: flex; flex-direction: column; gap: 4px; }
  .sidebar-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--gray-500); transition: all 0.2s; }
  .sidebar-item.active { background: var(--brand-blue-lightest); color: var(--brand-blue); font-weight: 600; }
  .preview-main { flex: 1; padding: 24px; display: flex; justify-content: center; }
  .preview-resume { width: 100%; max-width: 380px; }
  .resume-line { height: 8px; background: var(--gray-200); border-radius: 4px; margin-bottom: 10px; }
  .resume-name { height: 14px; width: 50%; background: var(--gray-800); margin-bottom: 8px; }
  .resume-role { height: 10px; width: 35%; background: var(--brand-blue); opacity: 0.5; margin-bottom: 18px; }
  .resume-text.w-80 { width: 80%; } .resume-text.w-70 { width: 70%; } .resume-text.w-60 { width: 60%; }
  .resume-text.w-90 { width: 90%; } .resume-text.w-85 { width: 85%; } .resume-text.w-75 { width: 75%; } .resume-text.w-65 { width: 65%; }
  .resume-section-title { height: 10px; width: 30%; background: var(--gray-800); border-radius: 4px; margin: 18px 0 10px; }
  @media (max-width: 768px) {
    .hero-stats { gap: 24px; }
    .stat-number { font-size: 1.5rem; }
    .preview-body { flex-direction: column; }
    .preview-sidebar { width: 100%; flex-direction: row; border-right: none; border-bottom: 1px solid var(--gray-100); overflow-x: auto; }
    .hero-ctas { flex-direction: column; width: 100%; }
  }
</style>
