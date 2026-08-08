<svelte:head>
  <title>About — PrimeResume</title>
</svelte:head>

<div class="about-page">
  <div class="container">
    <div class="about-hero">
      <span class="section-label">About Us</span>
      <h1>We're on a mission to make<br>every resume ATS-proof</h1>
      <p>PrimeResume was born from a simple observation: talented professionals were getting rejected — not because they weren't qualified, but because their resumes couldn't pass automated screening systems.</p>
    </div>

    <div class="about-story">
      <div class="story-content">
        <h2>Our Story</h2>
        <p>Founded in 2024, PrimeResume combines cutting-edge AI technology with deep expertise in recruitment and hiring practices. Our team includes former recruiters, AI engineers, and UX designers who understand both sides of the hiring equation.</p>
        <p>We built PrimeResume to level the playing field. Whether you're a new graduate, a career changer, or a seasoned executive, your resume should showcase your true potential — not get filtered out by an algorithm.</p>
      </div>
      <div class="story-stats">
        <div class="about-stat">
          <span class="about-stat-number">100K+</span>
          <span class="about-stat-label">Resumes Built</span>
        </div>
        <div class="about-stat">
          <span class="about-stat-number">85%</span>
          <span class="about-stat-label">Interview Rate</span>
        </div>
        <div class="about-stat">
          <span class="about-stat-number">50+</span>
          <span class="about-stat-label">Countries</span>
        </div>
        <div class="about-stat">
          <span class="about-stat-number">4.9</span>
          <span class="about-stat-label">User Rating</span>
        </div>
      </div>
    </div>

    <div class="about-values">
      <h2>Our Values</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">🎯</div>
          <h3>Accuracy First</h3>
          <p>Every feature we build is designed to increase your chances of getting past ATS systems and into human hands.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🤖</div>
          <h3>AI with Purpose</h3>
          <p>We use AI not as a gimmick, but as a powerful tool to enhance your resume — always with you in control.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🔒</div>
          <h3>Privacy by Design</h3>
          <p>Your career data is yours. We protect it with enterprise-grade security and never sell your information.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .about-page {
    padding: 160px 0 80px;
    background: var(--white);
  }

  .about-hero {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 80px;
  }

  .about-hero h1 {
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 900;
    color: var(--gray-900);
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .about-hero p {
    font-size: 1.1rem;
    color: var(--gray-500);
    line-height: 1.75;
  }

  .about-story {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    margin-bottom: 80px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .story-content h2 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--gray-900);
    margin-bottom: 20px;
  }

  .story-content p {
    font-size: 0.975rem;
    color: var(--gray-500);
    line-height: 1.75;
    margin-bottom: 16px;
  }

  .story-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .about-stat {
    background: var(--brand-blue-lightest);
    border-radius: var(--radius-lg);
    padding: 24px;
    text-align: center;
  }

  .about-stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 900;
    color: var(--brand-blue);
  }

  .about-stat-label {
    font-size: 0.85rem;
    color: var(--gray-500);
    font-weight: 500;
  }

  .about-values {
    max-width: 900px;
    margin: 0 auto;
  }

  .about-values h2 {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .value-card {
    text-align: center;
    padding: 32px 24px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--gray-200);
  }

  .value-icon { font-size: 2.5rem; margin-bottom: 16px; }

  .value-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--gray-800);
    margin-bottom: 8px;
  }

  .value-card p {
    font-size: 0.9rem;
    color: var(--gray-500);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .about-story { grid-template-columns: 1fr; gap: 32px; }
    .values-grid { grid-template-columns: 1fr; }
  }
</style>
