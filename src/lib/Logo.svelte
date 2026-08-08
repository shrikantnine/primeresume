<script>
  export let size = 40;
  export let showText = true;
</script>

<a href="/" class="logo-link" aria-label="PrimeResume Home">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 375 375"
    width={size}
    height={size}
    class="logo-icon"
  >
    <path fill="#2665ec" d="M 176.43 0 C 199.45 11.48 223.82 20.56 249.18 26.93 C 194.93 54.41 156.14 83.22 131.74 133.71 C 133.77 77.18 161.29 24.83 176.43 0 Z" fill-opacity="1" fill-rule="nonzero"/>
    <path fill="#2665ec" d="M 198.57 375 C 175.55 363.52 151.18 354.45 125.82 348.07 C 180.08 320.59 218.86 291.78 243.26 241.29 C 241.23 297.82 213.72 350.18 198.57 375 Z" fill-opacity="1" fill-rule="nonzero"/>
    <path fill="#2665ec" d="M 312.25 47.09 C 320.42 71.49 331.23 95.14 344.66 117.57 C 286.86 98.64 239.07 91.59 186.11 110.04 C 227.51 71.5 283.99 53.94 312.25 47.09 Z" fill-opacity="1" fill-rule="nonzero"/>
    <path fill="#2665ec" d="M 62.75 327.91 C 54.58 303.52 43.77 279.86 30.34 257.43 C 88.14 276.36 135.93 283.41 188.89 264.96 C 147.49 303.5 91.01 321.07 62.75 327.91 Z" fill-opacity="1" fill-rule="nonzero"/>
    <path fill="#2665ec" d="M 375 176.43 C 363.52 199.46 354.45 223.82 348.07 249.18 C 320.59 194.92 291.78 156.14 241.29 131.74 C 297.82 133.77 350.18 161.29 375 176.43 Z" fill-opacity="1" fill-rule="nonzero"/>
    <path fill="#2665ec" d="M 0 198.57 C 11.48 175.55 20.56 151.18 26.93 125.82 C 54.41 180.08 83.22 218.86 133.71 243.26 C 77.18 241.23 24.83 213.72 0 198.57 Z" fill-opacity="1" fill-rule="nonzero"/>
    <path fill="#2665ec" d="M 327.91 312.26 C 303.51 320.42 279.87 331.23 257.43 344.66 C 276.36 286.86 283.41 239.07 264.96 186.11 C 303.5 227.52 321.07 283.99 327.91 312.26 Z" fill-opacity="1" fill-rule="nonzero"/>
    <path fill="#2665ec" d="M 47.09 62.75 C 71.49 54.58 95.14 43.77 117.57 30.34 C 98.64 88.14 91.59 135.93 110.04 188.89 C 71.5 147.49 53.94 91.01 47.09 62.75 Z" fill-opacity="1" fill-rule="nonzero"/>
  </svg>
  {#if showText}
    <span class="logo-text">
      <span class="logo-prime">Prime</span><span class="logo-resume">Resume</span>
    </span>
  {/if}
</a>

<style>
  .logo-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .logo-icon { flex-shrink: 0; }
  .logo-text {
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }
  .logo-prime { color: var(--gray-900); }
  .logo-resume { color: var(--brand-blue); }
</style>
