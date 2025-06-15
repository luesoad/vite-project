<script lang="ts">
  import { HERO_IMAGE } from '../lib/constants';
</script>

<div class="relative hero-wrapper">
  <img
    alt="Neon Skyline Synthwave Project"
    class="w-full h-[60vh] object-cover"
    src={HERO_IMAGE}
  />
  <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
    <h1
      class="text-4xl md:text-6xl font-bold tracking-wider mb-2 shadow-lg"
      style="text-shadow: 0 2px 16px #111, 0 1px 2px #111;"
    >
      <span class="inline-flex bg-black/80 px-6 py-2 rounded-lg">
        Neon Skyline Synthwave Project
      </span>
    </h1>
    <p class="text-xl md:text-2xl font-normal mb-0 drop-shadow-lg">
      Experience the best live music!
    </p>
  </div>
</div>

