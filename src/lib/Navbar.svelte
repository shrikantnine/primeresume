<script>
  import Logo from './Logo.svelte';
  import { openSignIn } from '../stores/modal.js';

  export let scrolled = false;
</script>

<nav class="navbar" class:scrolled>
  <div class="navbar-inner container">
    <Logo size={36} />

    <div class="nav-links">
      <a href="#templates" class="nav-link">Templates</a>
      <a href="#features" class="nav-link">Features</a>
      <a href="#pricing" class="nav-link">Pricing</a>
      <a href="#/blog" class="nav-link">Blog</a>
    </div>

    <div class="nav-actions">
      <button class="btn btn-primary" on:click={openSignIn}>
        Get Started Free
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 16px 0;
    transition: all 0.3s ease;
    background: transparent;
  }

  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: var(--shadow-sm);
    padding: 10px 0;
  }

  .navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .nav-link {
    font-size: 0.925rem;
    font-weight: 500;
    color: var(--gray-600);
    transition: color 0.2s;
  }

  .nav-link:hover {
    color: var(--brand-blue);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style>
