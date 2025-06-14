<script lang="ts">
    import { Img, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
    import routes from "../data/routes.json";
    import { LOGO_IMAGE } from "../lib/constants";
    import { onMount } from "svelte";

    let { atTheTop } = $props();
    let activeUrl = $state("");

    onMount(() => {
        activeUrl = window.location.pathname;
    });
</script>

<Navbar
    color="black"
    class="px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 bg-black fixed {!atTheTop ? 'nav--smaller' : ''}"
>
    {#snippet children({ hidden, toggle })}
        <NavBrand href="/">
            <Img alt="A Band Logo" class="mr-3 logo" src={LOGO_IMAGE}/>
        </NavBrand>
        <NavHamburger onclick={toggle} class="burger"/>
        <NavUl {hidden} class="nav-ul">
            {#each routes as route}
                <NavLi
                    class="nav-li hidden lg:block"
                    activeClass={activeUrl === route.href && 'nav-li--active'}
                    href={route.href}
                >
                    {route.text}
                </NavLi>

                <NavLi
                    class="nav-li block lg:hidden"
                    onclick={toggle}
                    activeClass={activeUrl === route.href && 'nav-li--active'}
                    href={route.href}
                >
                    {route.text}
                </NavLi>
            {/each}
            <Img
                alt="A Band"
                class="mt-10 md:hidden"
                src={LOGO_IMAGE}
            />
        </NavUl>
    {/snippet}
</Navbar>
