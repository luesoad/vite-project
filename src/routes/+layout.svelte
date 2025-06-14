<script lang="ts">
    import '../tailwind.css';
    import '../app.scss';
    import Navigation from "../layout/Navigation.svelte";
    import Footer from "../layout/Footer.svelte";
    import BackToTopButton from "../components/BackToTopButton.svelte";
    import type { Snippet } from "svelte";

    interface LayoutProps {
      showOnPx?: number;
      children?: Snippet;
    }

    let { showOnPx = 150, children }: LayoutProps = $props();

    let hidden = $state(true);

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) return;
        hidden = scrollContainer().scrollTop <= showOnPx;
    }
</script>

<Navigation atTheTop={hidden} />

<section class="section">
    <div class="container">
        {@render children?.()}
    </div>
</section>

<svelte:window on:scroll={handleOnScroll} />

<BackToTopButton isVisible={!hidden} />

<Footer />
