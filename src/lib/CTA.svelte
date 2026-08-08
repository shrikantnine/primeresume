<script>
  import { openSignIn } from '../stores/modal.js';

  export let variant = 'primary';
  export let size = 'default';
  export let href = null;
</script>

{#if href}
  <a {href} class="cta cta-{variant} cta-{size}" on:click|preventDefault={openSignIn}>
    <slot />
  </a>
{:else}
  <button class="cta cta-{variant} cta-{size}" on:click={openSignIn}>
    <slot />
  </button>
{/if}

<style>
  .cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
    cursor: pointer;
    text-decoration: none;
    border: none;
    font-family: var(--font-inter);
  }

  .cta-default {
    padding: 14px 32px;
    font-size: 1rem;
  }

  .cta-lg {
    padding: 18px 40px;
    font-size: 1.125rem;
    border-radius: var(--radius-lg);
  }

  .cta-xl {
    padding: 20px 48px;
    font-size: 1.25rem;
    border-radius: var(--radius-lg);
  }

  .cta-primary {
    background: var(--brand-blue);
    color: var(--white);
    box-shadow: 0 4px 14px rgba(38, 101, 236, 0.35);
  }

  .cta-primary:hover {
    background: var(--brand-blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(38, 101, 236, 0.45);
  }

  .cta-secondary {
    background: var(--white);
    color: var(--brand-blue);
    border: 2px solid var(--brand-blue);
  }

  .cta-secondary:hover {
    background: var(--brand-blue-lightest);
  }

  .cta-white {
    background: var(--white);
    color: var(--gray-900);
    box-shadow: var(--shadow-md);
  }

  .cta-white:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-1px);
  }

  .cta-outline-white {
    background: transparent;
    color: var(--white);
    border: 2px solid rgba(255, 255, 255, 0.4);
  }

  .cta-outline-white:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--white);
  }
</style>
