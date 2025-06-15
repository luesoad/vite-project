<script lang="ts">
  import ConcertList from './ConcertList.svelte';
  export let title: string;
  export let concerts: any[];
  export let emptyText: string;
</script>

<section class="mt-12 first:mt-0">
  <h2 class="section-title">{title}</h2>
  {#if concerts.length > 0}
    <ConcertList {concerts} />
  {:else}
    <p class="empty-state">{emptyText}</p>
  {/if}
</section>
