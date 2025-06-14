<script lang="ts">
    import routes from "../data/routes.json";
    import { LOGO_IMAGE } from "../lib/constants";
    import { onMount } from "svelte";

    let atTheTop;
    export { atTheTop };

    let activeUrl = "";

    onMount(() => {
        activeUrl = window.location.pathname;
    });

    let menuOpen = false;
    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };
    const closeMenu = () => {
        menuOpen = false;
    };
</script>

<nav class={`px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 bg-black fixed ${!atTheTop ? 'nav--smaller' : ''}`}>
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center space-x-3">
            <img src={LOGO_IMAGE} alt="A Band Logo" class="mr-3 logo h-8 w-auto"/>
        </a>

        <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            on:click={toggleMenu}
        >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>

        <div class={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-default">
            <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
                {#each routes as route}
                    <li>
                        <a
                            href={route.href}
                            class={`block py-2 px-3 rounded md:p-0 ${activeUrl === route.href ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                            aria-current={activeUrl === route.href ? 'page' : undefined}
                            on:click={closeMenu}
                        >
                            {route.text}
                        </a>
                    </li>
                {/each}
                <li class="mt-10 md:hidden flex justify-center">
                    <img alt="A Band" class="h-8 w-auto" src={LOGO_IMAGE} />
                </li>
            </ul>
        </div>
    </div>
</nav>
