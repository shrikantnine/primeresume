<script>
  import Router, { location } from 'svelte-spa-router';
  import Navbar from './lib/Navbar.svelte';
  import Footer from './lib/Footer.svelte';
  import SignInPopup from './lib/SignInPopup.svelte';
  import ScrollPopup from './lib/ScrollPopup.svelte';
  import Home from './pages/Home.svelte';
  import Terms from './pages/Terms.svelte';
  import Privacy from './pages/Privacy.svelte';
  import DataPolicy from './pages/DataPolicy.svelte';
  import PricingPage from './pages/PricingPage.svelte';
  import About from './pages/About.svelte';
  import Affiliate from './pages/Affiliate.svelte';
  import Blog from './pages/Blog.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import { signInOpen, closeSignIn } from './stores/modal.js';

  let scrolled = false;
  $: isDashboard = $location === '/dashboard';

  const routes = {
    '/': Home,
    '/terms': Terms,
    '/privacy': Privacy,
    '/data-policy': DataPolicy,
    '/pricing': PricingPage,
    '/about': About,
    '/affiliate': Affiliate,
    '/blog': Blog,
    '/dashboard': Dashboard,
  };

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<div class="app">
  {#if !isDashboard}
    <Navbar {scrolled} />
  {/if}

  <main>
    <Router {routes} />
  </main>

  {#if !isDashboard}
    <Footer />
    <SignInPopup show={$signInOpen} on:close={closeSignIn} />
    <ScrollPopup />
  {/if}
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }
</style>
