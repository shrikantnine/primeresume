<script>
  import CTA from '../lib/CTA.svelte';

  const testimonials = [
    { name: 'Sarah Chen', role: 'Software Engineer at Google', image: null, initials: 'SC', quote: 'PrimeResume helped me land interviews at 3 FAANG companies. The ATS score feature is a game-changer — my resume went from 45 to 92 after using their AI suggestions.', rating: 5 },
    { name: 'Marcus Johnson', role: 'Marketing Director', image: null, initials: 'MJ', quote: 'I was skeptical about AI resume builders, but the chat-based builder understood exactly what I needed. Got my new job in 2 weeks after months of silence.', rating: 5 },
    { name: 'Priya Patel', role: 'Data Scientist at Stripe', image: null, initials: 'PP', quote: 'The job match scoring showed me exactly which skills I was missing. Added those keywords, and suddenly recruiters started reaching out. This tool is incredible.', rating: 5 }
  ];

  const featuredIn = ['Forbes', 'TechCrunch', 'Product Hunt', 'The Verge', 'Business Insider'];
</script>

<section class="testimonials section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Testimonials</span>
      <h2 class="section-title">Loved by job seekers<br>and recruiters alike</h2>
    </div>

    <div class="featured-logos">
      <span class="featured-label">Featured in</span>
      <div class="logos-row">
        {#each featuredIn as name}
          <span class="featured-name">{name}</span>
        {/each}
      </div>
    </div>

    <div class="testimonials-grid">
      {#each testimonials as t, i}
        <div class="testimonial-card animate-fade-in-up" style="animation-delay: {i * 0.1}s">
          <div class="testimonial-stars">
            {#each Array(t.rating) as _}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            {/each}
          </div>
          <blockquote class="testimonial-quote">"{t.quote}"</blockquote>
          <div class="testimonial-author">
            <div class="author-avatar">{t.initials}</div>
            <div class="author-info"><strong>{t.name}</strong><span>{t.role}</span></div>
          </div>
        </div>
      {/each}
    </div>

    <div class="testimonials-cta">
      <CTA variant="primary" size="lg">Join 100,000+ Happy Users <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></CTA>
    </div>
  </div>
</section>

<style>
  .testimonials { background: var(--gray-50); }
  .section-header { text-align: center; margin-bottom: 48px; }
  .featured-logos { text-align: center; margin-bottom: 60px; }
  .featured-label { display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gray-400); margin-bottom: 16px; }
  .logos-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 32px; }
  .featured-name { font-size: 1.35rem; font-weight: 700; color: var(--gray-300); letter-spacing: -0.01em; }
  .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
  .testimonial-card { background: var(--white); border-radius: var(--radius-lg); padding: 32px; border: 1px solid var(--gray-200); display: flex; flex-direction: column; }
  .testimonial-stars { display: flex; gap: 3px; margin-bottom: 16px; }
  .testimonial-quote { font-size: 0.95rem; color: var(--gray-600); line-height: 1.7; flex: 1; margin-bottom: 24px; font-style: italic; }
  .testimonial-author { display: flex; align-items: center; gap: 12px; }
  .author-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--brand-blue-lightest); color: var(--brand-blue); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; }
  .author-info strong { display: block; font-size: 0.925rem; color: var(--gray-800); }
  .author-info span { font-size: 0.8rem; color: var(--gray-400); }
  .testimonials-cta { text-align: center; }
  @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr; } }
</style>
