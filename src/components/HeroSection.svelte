<script lang="ts">
  import { onMount } from "svelte";
  import { HERO_IMAGES } from "../lib/constants";
  import { getRandomHeroImage } from "$lib/utils/concerts";

  export let image: string | undefined;
  export let title: string;
  export let subtitle: string;

  let heroImage = image ?? HERO_IMAGES[0];

  onMount(() => {
    if (!image) {
      heroImage = getRandomHeroImage(HERO_IMAGES, heroImage);
    }
  });
</script>

<div class="relative w-full">
  <img alt={title} class="w-full h-[60vh] object-cover" src={heroImage} />
  <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
    <div class="container mx-auto max-w-3xl px-4">
      <h1 class="text-4xl md:text-6xl font-bold tracking-wider mb-2 shadow-lg"
          style="text-shadow: 0 2px 16px #111, 0 1px 2px #111;">
        <span class="inline-flex bg-black/80 px-6 py-2">{title}</span>
      </h1>
      <p class="text-xl md:text-2xl font-normal mb-0 drop-shadow-lg">{subtitle}</p>
    </div>
  </div>
</div>
