<script>
  import Logo from './Logo.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <Logo size={36} />
        <p class="footer-tagline">
          Build ATS-friendly resumes with AI. Land more interviews, faster.
        </p>
        <div class="footer-social">
          <a href="#" aria-label="Twitter" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Product</h4>
        <a href="#templates" class="footer-link">Templates</a>
        <a href="#features" class="footer-link">Features</a>
        <a href="#pricing" class="footer-link">Pricing</a>
        <a href="#comparison" class="footer-link">Compare</a>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Company</h4>
        <a href="#/about" class="footer-link">About</a>
        <a href="#/blog" class="footer-link">Blog</a>
        <a href="#/affiliate" class="footer-link affiliate-link">Affiliate Program</a>
        <a href="https://www.primeheadshots.com" target="_blank" rel="noopener" class="footer-link ph-link">PrimeHeadshots</a>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Legal</h4>
        <a href="#/terms" class="footer-link">Terms of Service</a>
        <a href="#/privacy" class="footer-link">Privacy Policy</a>
        <a href="#/data-policy" class="footer-link">Data Policy</a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {currentYear} PrimeResume. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--gray-900);
    color: var(--white);
    padding: 80px 0 32px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 48px;
  }

  .footer-tagline {
    color: var(--gray-400);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-top: 16px;
    max-width: 280px;
  }

  .footer-social {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    color: var(--gray-400);
    transition: all 0.2s;
  }

  .social-icon:hover {
    background: var(--brand-blue);
    color: var(--white);
  }

  .footer-heading {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--white);
    margin-bottom: 20px;
  }

  .footer-link {
    display: block;
    color: var(--gray-400);
    font-size: 0.95rem;
    padding: 6px 0;
    transition: color 0.2s;
  }

  .footer-link:hover {
    color: var(--white);
  }

  .affiliate-link,
  .ph-link {
    color: var(--brand-blue-light);
  }

  .affiliate-link:hover,
  .ph-link:hover {
    color: var(--brand-blue);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 24px;
    text-align: center;
    color: var(--gray-500);
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
  }

  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
