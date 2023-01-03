<script type="application/javascript">

    export let atTheTop;
    import {Img, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import logo from '../assets/fallen-tyrant-black-metal-band.jpeg';
    import routes from "../data/routes.json";
    let activeUrl = window.location.pathname


</script>
<Navbar
        color="black"
        let:hidden
        let:toggle
        navClass="px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 bg-black fixed {!atTheTop ? 'nav--smaller' : ''}"
>
    <NavBrand href="/">
        <Img alt="Fallen Tyrant Black Metal Band Logo"
         class="mr-3 logo" src={logo}/>
    </NavBrand>
    <NavHamburger on:click={toggle} class="burger"/>
    <NavUl {hidden} class="nav-ul" >
        {#each routes as route}
        <NavLi class="nav-li hidden lg:block"
            activeClass={activeUrl === route.href && 'nav-li--active'}
            href={route.href}>{route.text}</NavLi>

            <NavLi class="nav-li block lg:hidden"
                on:click={toggle}
                activeClass={activeUrl === route.href && 'nav-li--active'}
                href={route.href}>{route.text}</NavLi>
        {/each}
        <Img
                alt="Fallen Tyrant Black Metal Band"
                class="mt-10 md:hidden"
                src={logo}
        />
    </NavUl>

</Navbar>
