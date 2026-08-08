<script>
  import { createEventDispatcher } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import Logo from './Logo.svelte';

  const dispatch = createEventDispatcher();
  export let show = false;

  function close() {
    dispatch('close');
  }

  function signInWith(provider) {
    // In production, this redirects to the OAuth provider
    // After successful auth, user lands on the resume dashboard
    console.log(`Signing in with ${provider}`);
    window.location.href = '/dashboard';
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) close();
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') close();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if show}
  <div class="popup-backdrop" on:click={handleBackdropClick} transition:fade={{ duration: 200 }}>
    <div class="popup-modal" transition:scale={{ start: 0.95, duration: 300 }}>
      <button class="popup-close" on:click={close} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <div class="popup-header">
        <Logo size={44} showText={false} />
        <h2>Welcome to PrimeResume</h2>
        <p>Sign in to start building your ATS-optimized resume</p>
      </div>

      <div class="popup-body">
        <button class="social-btn google-btn" on:click={() => signInWith('google')}>
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continue with Google
        </button>

        <button class="social-btn facebook-btn" on:click={() => signInWith('facebook')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Continue with Facebook
        </button>

        <button class="social-btn linkedin-btn" on:click={() => signInWith('linkedin')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          Continue with LinkedIn
        </button>

        <button class="social-btn dev-btn" on:click={() => signInWith('dev')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Dev Sign In (Skip Auth)
        </button>

        <div class="divider">
          <span>or</span>
        </div>

        <div class="email-form">
          <input type="email" placeholder="Enter your email address" class="email-input" />
          <button class="btn btn-primary email-btn" on:click={() => signInWith('email')}>
            Continue with Email
          </button>
        </div>

        <p class="terms-note">
          By continuing, you agree to PrimeResume's
          <a href="#/terms">Terms of Service</a> and
          <a href="#/privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </div>
{/if}

<style>
  .popup-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    padding: 20px;
  }

  .popup-modal {
    background: var(--white);
    border-radius: var(--radius-xl);
    padding: 40px;
    max-width: 440px;
    width: 100%;
    position: relative;
    box-shadow: var(--shadow-2xl);
    max-height: 90vh;
    overflow-y: auto;
  }

  .popup-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--gray-100);
    color: var(--gray-500);
    transition: all 0.2s;
  }

  .popup-close:hover {
    background: var(--gray-200);
    color: var(--gray-800);
  }

  .popup-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .popup-header h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--gray-900);
    margin-top: 16px;
    margin-bottom: 8px;
  }

  .popup-header p {
    color: var(--gray-500);
    font-size: 0.95rem;
  }

  .popup-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    padding: 14px 20px;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    border: 2px solid var(--gray-200);
    background: var(--white);
    color: var(--gray-800);
    transition: all 0.2s;
  }

  .social-btn:hover {
    border-color: var(--gray-300);
    background: var(--gray-50);
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0;
  }

  .divider::before,
  .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--gray-200);
  }

  .divider span {
    font-size: 0.85rem;
    color: var(--gray-400);
    text-transform: uppercase;
  }

  .email-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 0.95rem;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-md);
    margin-bottom: 12px;
    transition: border-color 0.2s;
  }

  .email-input:focus {
    border-color: var(--brand-blue);
  }

  .email-btn {
    width: 100%;
  }

  .dev-btn {
    background: linear-gradient(135deg, #f9fafb, #f3f4f6);
    border: 2px dashed var(--gray-300);
    color: var(--gray-600);
  }

  .dev-btn:hover {
    background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
    border-color: var(--gray-400);
    color: var(--gray-800);
  }

  .terms-note {
    text-align: center;
    font-size: 0.8rem;
    color: var(--gray-400);
    margin-top: 16px;
    line-height: 1.5;
  }

  .terms-note a {
    color: var(--brand-blue);
    text-decoration: underline;
  }
</style>
