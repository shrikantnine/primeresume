<script>
  import { onMount } from 'svelte';

  let loading = true;
  let error = false;
  let iframeSrc = '';

  onMount(() => {
    const isDev = import.meta.env.DEV;
    iframeSrc = isDev ? 'http://localhost:3000' : '/app';
  });

  function handleIframeLoad() {
    loading = false;
    error = false;
  }

  function handleIframeError() {
    loading = false;
    error = true;
  }
</script>

<div class="dashboard-shell">
  {#if loading}
    <div class="loading-screen">
      <div class="spinner"></div>
      <p>Loading resume builder...</p>
    </div>
  {/if}

  {#if error}
    <div class="error-screen">
      <div class="error-card">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <h2>Resume Builder Not Running</h2>
        <p>The Reactive Resume builder server isn't reachable. Start it with:</p>
        <pre><code>cd reactive-resume
docker compose -f compose.dev.yml up -d
pnpm install && pnpm run dev</code></pre>
        <button class="btn btn-primary" on:click={() => { error = false; loading = true; iframeSrc = iframeSrc; }}>
          Retry Connection
        </button>
      </div>
    </div>
  {/if}

  <iframe
    src={iframeSrc}
    title="PrimeResume Builder"
    class="dashboard-iframe"
    class:loaded={!loading && !error}
    on:load={handleIframeLoad}
    on:error={handleIframeError}
    allow="clipboard-read; clipboard-write"
  />
</div>

<style>
  .dashboard-shell {
    position: fixed;
    inset: 0;
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

  .error-screen {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    z-index: 20;
    padding: 20px;
  }

  .error-card {
    text-align: center;
    max-width: 520px;
    padding: 48px;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
  }

  .error-card h2 {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--gray-900);
    margin: 16px 0 8px;
  }

  .error-card p {
    color: var(--gray-500);
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .error-card pre {
    text-align: left;
    background: var(--gray-900);
    color: #22c55e;
    padding: 20px;
    border-radius: var(--radius-md);
    font-size: 0.85rem;
    line-height: 1.7;
    margin-bottom: 24px;
    overflow-x: auto;
  }

  .error-card pre code {
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  .error-card .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
    white-space: nowrap;
    background: var(--brand-blue);
    color: var(--white);
    box-shadow: 0 4px 14px rgba(38, 101, 236, 0.35);
    cursor: pointer;
    border: none;
  }

  .error-card .btn:hover {
    background: var(--brand-blue-dark);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(38, 101, 236, 0.45);
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
