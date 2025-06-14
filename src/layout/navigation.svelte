<script lang="ts">
  import routes from "../data/routes.json";
  import { LOGO_IMAGE } from "../lib/constants";
  import { onMount } from "svelte";

  let atTheTop = true;
  let activeUrl = "";

  onMount(() => {
    activeUrl = window.location.pathname;

    const onScroll = () => {
      atTheTop = window.scrollY < 40;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  let menuOpen = false;
  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
  const closeMenu = () => {
    menuOpen = false;
  };
</script>

<nav class={`main-nav ${atTheTop ? "" : "nav--scrolled"}`}>
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center space-x-3">
      <img src={LOGO_IMAGE} alt="A Band Logo" class="logo" />
    </a>

    <button
      type="button"
      class="burger md:hidden"
      aria-controls="navbar-default"
      aria-expanded={menuOpen}
      on:click={toggleMenu}
    >
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <div class={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-default">
      <ul class="nav-ul">
        {#each routes as route}
          <li>
            <a
              href={route.href}
              class={`nav-li${activeUrl === route.href ? ' active' : ''}`}
              aria-current={activeUrl === route.href ? 'page' : undefined}
              on:click={closeMenu}
            >
              {route.text}
            </a>
          </li>
        {/each}
        <li class="mt-10 md:hidden flex justify-center">
          <img alt="A Band" class="logo" src={LOGO_IMAGE} />
        </li>
      </ul>
    </div>
  </div>
</nav>