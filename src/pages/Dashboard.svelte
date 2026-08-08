<script>
  import { onMount } from 'svelte';

  let loading = true;
  let iframeSrc = '';

  onMount(() => {
    // In development, reactive-resume runs on port 3000
    // In production, it would be served at the same origin under /app or similar
    const isDev = import.meta.env.DEV;
    iframeSrc = isDev ? 'http://localhost:3000' : '/app';
    loading = false;
  });

  function handleIframeLoad() {
    loading = false;
  }
</script>

<div class="dashboard-shell">
  {#if loading}
    <div class="loading-screen">
      <div class="spinner"></div>
      <p>Loading resume builder...</p>
    </div>
  {/if}

  <iframe
    src={iframeSrc}
    title="PrimeResume Builder"
    class="dashboard-iframe"
    class:loaded={!loading}
    on:load={handleIframeLoad}
    allow="clipboard-read; clipboard-write"
  />
</div>

<style>
  .dashboard-shell {
    position: fixed;
    inset: 0;
    top: 0;
    z-index: 100;
    background: #fff;
  }

  .loading-screen {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: #fff;
    z-index: 10;
  }

  .loading-screen p {
    font-size: 1.1rem;
    color: var(--gray-500);
    font-weight: 500;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid var(--gray-200);
    border-top-color: var(--brand-blue);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .dashboard-iframe {
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .dashboard-iframe.loaded {
    opacity: 1;
  }
</style>
