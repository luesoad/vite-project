<script lang="ts">
  export let data;
  import { HERO_IMAGE } from '../../lib/constants';
  import TextCard from '../../components/TextCard.svelte';
</script>

<div class="container mx-auto max-w-3xl px-4 pb-8">
  <img
    alt="Neon Skyline Synthwave Project"
    class="w-full shadow-xl mb-8"
    src={HERO_IMAGE}
  />

  <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-accent drop-shadow-[0_2px_8px_rgba(255,200,44,0.3)]">
    Random Inspiration
  </h1>
  <div class="flex flex-col gap-6">
    {#each data.posts as post (post.id)}
      <TextCard title={post.title} text={post.body} />
    {/each}
  </div>
</div>
