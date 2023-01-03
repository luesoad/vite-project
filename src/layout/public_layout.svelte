<script>
    import {Route} from 'svelte-router-spa'
    import Navigation from "./navigation.svelte";
    import Footer from "./footer.svelte";


    let hidden = true;

    function goTop() {
        document.body.scrollIntoView();
    }

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        hidden = scrollContainer().scrollTop <= showOnPx;
    }
    export let showOnPx = 150;
    const params = { validCheck: true }
    export let currentRoute

</script>


<Navigation atTheTop={hidden}/>
<section class="section">
    <Route {currentRoute}  {params} />
</section>


<svelte:window on:scroll={handleOnScroll}/>

<div class="back-to-top" class:hidden on:click={goTop}>Back to top</div>
<Footer/>

