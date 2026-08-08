<script>
  import { onMount, onDestroy } from 'svelte';
  import { openSignIn } from '../stores/modal.js';

  let timer;
  let scrollHandler;
  let hasTriggered = false;

  onMount(() => {
    timer = setTimeout(() => {
      if (!hasTriggered) {
        hasTriggered = true;
        openSignIn();
      }
    }, 15000);

    scrollHandler = () => {
      if (hasTriggered) return;
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5) {
        hasTriggered = true;
        clearTimeout(timer);
        openSignIn();
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
  });

  onDestroy(() => {
    clearTimeout(timer);
    window.removeEventListener('scroll', scrollHandler);
  });
</script>
