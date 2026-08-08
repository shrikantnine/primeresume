<script>
  import CTA from '../lib/CTA.svelte';

  const aiFeatures = [
    { title: 'AI Content Generation', description: 'Struggling with bullet points? Our AI generates powerful, achievement-oriented descriptions from simple input.', icon: 'sparkles' },
    { title: 'Grammar & Tone Enhancement', description: 'Beyond spell check — our AI analyzes your tone, suggests more impactful verbs, and fixes passive voice.', icon: 'pen' },
    { title: 'Smart Summarization', description: 'AI automatically generates a compelling professional summary tailored to your industry and experience level.', icon: 'brain' },
    { title: 'Industry-Specific Optimization', description: 'Tech, healthcare, finance — our AI tailors your resume language to your field\'s norms and keywords.', icon: 'target' }
  ];
</script>

<section class="ai-features section">
  <div class="container">
    <div class="section-layout">
      <div class="section-content">
        <span class="section-label">AI Features</span>
        <h2 class="section-title">AI that understands<br>what recruiters want</h2>
        <p class="section-subtitle">Our AI has been trained on millions of successful resumes and recruiter feedback. It knows exactly what hiring managers look for.</p>

        <div class="ai-features-list">
          {#each aiFeatures as feature, i}
            <div class="ai-feature-item animate-fade-in-up" style="animation-delay: {i * 0.1}s">
              <div class="ai-feature-icon">
                {#if feature.icon === 'sparkles'}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/></svg>
                {:else if feature.icon === 'pen'}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                {:else if feature.icon === 'brain'}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.03-3.36 2.5 2.5 0 01-.83-3.36 2.5 2.5 0 01.82-3.36A2.5 2.5 0 017.5 2h2z"/><path d="M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 012.03-3.36 2.5 2.5 0 01.83-3.36 2.5 2.5 0 01-.82-3.36A2.5 2.5 0 0016.5 2h-2z"/></svg>
                {:else}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                {/if}
              </div>
              <div><h3>{feature.title}</h3><p>{feature.description}</p></div>
            </div>
          {/each}
        </div>

        <div class="ai-cta-inline">
          <CTA variant="primary" size="default">Try AI Features Free</CTA>
        </div>
      </div>

      <div class="section-visual">
        <div class="ai-demo-window">
          <div class="demo-toolbar">
            <div class="demo-dots"><span></span><span></span><span></span></div>
            <span class="demo-label">AI Assistant</span>
          </div>
          <div class="demo-conversation">
            <div class="demo-msg user"><span>I managed a team of 5 at my last job</span></div>
            <div class="demo-msg ai">
              <div class="ai-thinking"><span>✨ Enhancing...</span></div>
              <div class="ai-result">
                <span class="ai-badge">AI Suggestion</span>
                <p>"Led a cross-functional team of 5 engineers, delivering 3 major product launches that increased user engagement by 34% within 6 months."</p>
              </div>
              <div class="ai-actions">
                <button class="ai-accept">✓ Accept</button>
                <button class="ai-retry">↻ Regenerate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ai-features { background: var(--white); }
  .section-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .section-content { max-width: 560px; }
  .section-subtitle { margin-bottom: 32px; }
  .ai-features-list { display: flex; flex-direction: column; gap: 24px; }
  .ai-feature-item { display: flex; gap: 16px; }
  .ai-feature-icon { width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--brand-blue-lightest); color: var(--brand-blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .ai-feature-item h3 { font-size: 0.975rem; font-weight: 700; color: var(--gray-800); margin-bottom: 4px; }
  .ai-feature-item p { font-size: 0.875rem; color: var(--gray-500); line-height: 1.6; }
  .ai-cta-inline { margin-top: 32px; }
  .section-visual { display: flex; justify-content: center; }
  .ai-demo-window { width: 100%; max-width: 440px; background: var(--white); border-radius: var(--radius-xl); border: 1px solid var(--gray-200); box-shadow: var(--shadow-xl); overflow: hidden; }
  .demo-toolbar { display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: var(--gray-50); border-bottom: 1px solid var(--gray-100); }
  .demo-dots { display: flex; gap: 5px; } .demo-dots span { width: 8px; height: 8px; border-radius: 50%; background: var(--gray-300); }
  .demo-label { font-size: 0.75rem; color: var(--gray-400); margin-left: 8px; }
  .demo-conversation { padding: 20px; display: flex; flex-direction: column; gap: 16px; }
  .demo-msg { max-width: 85%; padding: 12px 16px; border-radius: var(--radius-md); font-size: 0.875rem; line-height: 1.5; }
  .demo-msg.user { background: var(--gray-100); color: var(--gray-800); align-self: flex-end; }
  .demo-msg.ai { background: var(--brand-blue-lightest); align-self: flex-start; padding: 16px; }
  .ai-thinking { font-size: 0.8rem; color: var(--brand-blue); margin-bottom: 8px; font-weight: 600; }
  .ai-badge { display: inline-block; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: var(--brand-blue); color: var(--white); padding: 2px 8px; border-radius: 4px; margin-bottom: 8px; }
  .ai-result p { color: var(--gray-700); margin-bottom: 12px; }
  .ai-actions { display: flex; gap: 8px; }
  .ai-accept, .ai-retry { padding: 6px 14px; font-size: 0.8rem; font-weight: 600; border-radius: var(--radius-sm); }
  .ai-accept { background: var(--brand-blue); color: var(--white); }
  .ai-retry { background: var(--white); color: var(--brand-blue); border: 1px solid var(--brand-blue-lighter); }
  @media (max-width: 900px) { .section-layout { grid-template-columns: 1fr; gap: 40px; } .section-content { max-width: 100%; } }
</style>
