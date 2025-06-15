<script lang="ts">
    export let isVisible = false;

    function goTop() {
        document.body.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<button
  type="button"
  class="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-2xl border border-gray-200 opacity-100 transition-opacity transition-transform duration-500 cursor-pointer hover:scale-110 hover:bg-accent"
  class:opacity-0={!isVisible}
  class:invisible={!isVisible}
  aria-label="Back to top"
  on:click={goTop}
>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </svg>
</button>