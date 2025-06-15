<script lang="ts">
    import { onMount } from "svelte";
    import '../tailwind.css';
    import '../app.scss';
    import Navigation from "../layout/Navigation.svelte";
    import Footer from "../layout/Footer.svelte";
    import BackToTopButton from "../components/BackToTopButton.svelte";
    import HeroSection from "../components/HeroSection.svelte";
    import { HERO_IMAGES } from "../lib/constants";
    import type { Snippet } from "svelte";


    function getRandomHeroImage() {
        const idx = Math.floor(Math.random() * HERO_IMAGES.length);
        return HERO_IMAGES[idx];
    }

    let heroImage = $state(HERO_IMAGES[0]);

    onMount(() => {
        let randomImage;
        do {
            randomImage = getRandomHeroImage();
        } while (randomImage === heroImage && HERO_IMAGES.length > 1);
        heroImage = randomImage;
    });

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

<Navigation />

<HeroSection
    image={heroImage}
    title="Neon Skyline Synthwave Project"
    subtitle="Experience the best live music!"
/>

<section class="section">
    <div class="container">
        {@render children?.()}
    </div>
</section>

<svelte:window on:scroll={handleOnScroll} />

<BackToTopButton isVisible={!hidden} />

<Footer />
