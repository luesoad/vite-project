<script>
  import Navigation from "./navigation.svelte";
  import Footer from "./footer.svelte";

  let hidden = $state(true);

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

  /**
   * @typedef {Object} Props
   * @property {number} [showOnPx]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { showOnPx = 150, children } = $props();
</script>

<Navigation atTheTop={hidden}/>

<section class="section">
  {@render children?.()}
</section>

<svelte:window onscroll={handleOnScroll}/>

<div class="back-to-top" class:hidden onclick={goTop}>Back to top</div>
<Footer/>