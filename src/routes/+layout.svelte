<script lang="ts">
  import '../tailwind.css';
  import '../app.scss';
  import Navigation from "../layout/Navigation.svelte";
  import Footer from "../layout/Footer.svelte";
  import HeroSection from "../components/HeroSection.svelte";
  import BackToTopButton from "../components/BackToTopButton.svelte";
</script>

<Navigation />

<HeroSection
  title="Neon Skyline Synthwave Project"
  subtitle="Experience the best live music!"
/>

<section class="section">
  <div class="container">
    <slot />
  </div>
</section>

<BackToTopButton />

<Footer />
