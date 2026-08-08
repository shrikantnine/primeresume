<script>
  import { openSignIn } from '../stores/modal.js';

  const blogs = [
    { title: 'How to Beat Applicant Tracking Systems in 2025', excerpt: 'Learn the latest strategies to ensure your resume passes ATS filters.', category: 'ATS & Job Search', readTime: '8 min read', date: 'Aug 5, 2025', color: '#2665ec' },
    { title: 'AI Resume Builders vs. Human Writers: Which One Gets More Interviews?', excerpt: 'We tested AI-powered resume builders against professional human writers. The results might surprise you.', category: 'AI & Technology', readTime: '6 min read', date: 'Jul 28, 2025', color: '#7c3aed' },
    { title: 'The Ultimate Career Change Resume Guide', excerpt: 'Changing careers? Discover how to position your transferable skills.', category: 'Career Advice', readTime: '10 min read', date: 'Jul 20, 2025', color: '#059669' }
  ];
</script>

<section id="blog" class="blogs section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Blog</span>
      <h2 class="section-title">Career insights &<br>resume expertise</h2>
      <p class="section-subtitle">Expert advice to help you navigate your career journey.</p>
    </div>

    <div class="blogs-grid">
      {#each blogs as blog, i}
        <article class="blog-card animate-fade-in-up" style="animation-delay: {i * 0.1}s">
          <div class="blog-image" style="background: linear-gradient(135deg, {blog.color}15, {blog.color}05)">
            <div class="blog-image-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                {#if i === 0}<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                {:else if i === 1}<path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5"/><path d="M8.5 8.5v.01"/>
                {:else}<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 100 4h4a2 2 0 010 4H8"/><path d="M12 18V6"/>{/if}
              </svg>
            </div>
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <span class="blog-category" style="color: {blog.color}; background: {blog.color}12">{blog.category}</span>
              <span class="blog-readtime">{blog.readTime}</span>
            </div>
            <h3 class="blog-title">{blog.title}</h3>
            <p class="blog-excerpt">{blog.excerpt}</p>
            <div class="blog-footer">
              <span class="blog-date">{blog.date}</span>
              <a href="#/blog" class="blog-read-more">Read More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="blogs-cta">
      <a href="#/blog" class="btn btn-secondary btn-lg">View All Articles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>

<style>
  .blogs { background: var(--white); }
  .section-header { text-align: center; margin-bottom: 60px; }
  .section-header .section-subtitle { margin: 0 auto; }
  .blogs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
  .blog-card { background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--gray-200); overflow: hidden; transition: all 0.3s ease; }
  .blog-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-xl); border-color: var(--brand-blue-lighter); }
  .blog-image { height: 160px; display: flex; align-items: center; justify-content: center; }
  .blog-image-icon { color: var(--gray-400); opacity: 0.6; }
  .blog-content { padding: 24px; }
  .blog-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .blog-category { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 100px; }
  .blog-readtime { font-size: 0.8rem; color: var(--gray-400); }
  .blog-title { font-size: 1.05rem; font-weight: 700; color: var(--gray-800); line-height: 1.4; margin-bottom: 10px; }
  .blog-excerpt { font-size: 0.875rem; color: var(--gray-500); line-height: 1.6; margin-bottom: 16px; }
  .blog-footer { display: flex; align-items: center; justify-content: space-between; }
  .blog-date { font-size: 0.8rem; color: var(--gray-400); }
  .blog-read-more { display: flex; align-items: center; gap: 4px; font-size: 0.85rem; font-weight: 600; color: var(--brand-blue); transition: gap 0.2s; }
  .blog-read-more:hover { gap: 8px; }
  .blogs-cta { text-align: center; }
  @media (max-width: 900px) { .blogs-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .blogs-grid { grid-template-columns: 1fr; } }
</style>
