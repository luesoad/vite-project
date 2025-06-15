<script lang="ts">
  import routes from "../data/routes.json";
  import { LOGO_IMAGE } from "../lib/constants";
  import { onMount } from "svelte";
  import FavoritesOverlay from "../components/FavoritesOverlay.svelte";
  import NavItem from "../components/NavItem.svelte";

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
      <img src={LOGO_IMAGE} alt="Neon Skyline Synthwave Project Logo" class="logo" />
    </a>

    <div class="flex items-center md:hidden gap-2">
      <FavoritesOverlay iconOnly={true} />
      <button
        type="button"
        class="burger"
        aria-controls="navbar-default"
        aria-expanded={menuOpen}
        on:click={toggleMenu}
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <div class={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-default">
      <ul class="nav-ul flex items-center gap-2">
        {#each routes as route}
          <NavItem
            href={route.href}
            active={activeUrl === route.href}
            on:click={closeMenu}
          >
            {route.text}
          </NavItem>
        {/each}
        <li class="hidden md:block">
          <FavoritesOverlay iconOnly={false} />
        </li>
      </ul>
    </div>
  </div>
</nav>
