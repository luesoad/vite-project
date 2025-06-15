<script lang="ts">
  import { favorites } from "../lib/stores/favorites";
  import concertsData from "../data/concerts.json";
  import type { Concert } from "../lib/types";
  import { generateICS } from "../lib/utils/ics";

  export let iconOnly = false;

  let open = false;

  const allConcerts: (Concert & { year?: number })[] = concertsData.flatMap(
    (el) =>
      el.concerts.map((concert) => ({
        ...concert,
        year: el.year,
      })),
  );

  function getFavoriteConcerts() {
    return allConcerts.filter((concert) => $favorites.includes(concert.id));
  }

  function getIcsUrlForConcert(concert: Concert & { year?: number }) {
    const ics = generateICS(concert);
    const blob = new Blob([ics], { type: "text/calendar" });
    return URL.createObjectURL(blob);
  }
</script>

<button
  class="favorites-btn flex items-center gap-2 px-4 py-2 transition-opacity duration-200
         md:px-3 md:py-1
         text-base md:text-base
         {$favorites.length === 0
    ? 'opacity-50 pointer-events-none'
    : 'cursor-pointer'}"
  aria-label={iconOnly ? "Show favorites" : undefined}
  on:click={() => $favorites.length > 0 && (open = !open)}
  style="background: none; border: none; outline: none;"
>
  <span
    class="text-lg md:text-base"
    style="color: var(--color-accent, #eab308); font-size: 1.2em;"
    aria-hidden="true">★</span
  >
  {#if !iconOnly}
    <span class="favorites-label hidden md:inline font-normal">Favorites</span>
    {#if $favorites.length > 0}
      <span class="favorites-count hidden md:inline">({$favorites.length})</span
      >
    {/if}
  {/if}
</button>

{#if open}
  <div
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
    style="min-height:100vh;width:100vw;"
  >
    <div
      class="bg-white shadow-xl p-0 w-full max-w-lg relative mx-2 flex flex-col"
      style="max-height:90vh;overflow-y:auto;border-radius:0;"
    >
      <div class="flex items-center justify-between border-b px-6 py-4">
        <h2 class="text-2xl font-bold text-accent m-0 p-0">Your Favorites</h2>
        <button
          class="text-2xl text-gray-400 hover:text-accent cursor-pointer"
          on:click={() => (open = false)}
          aria-label="Close"
          type="button"
          style="line-height: 1;">×</button
        >
      </div>
      <div class="px-6 py-4">
        {#if getFavoriteConcerts().length === 0}
          <div class="text-black text-center">No favorites selected.</div>
        {:else}
          <ul class="mb-4 space-y-4">
            {#each getFavoriteConcerts() as c}
              <li
                class="text-black break-words flex items-center justify-between gap-2"
              >
                <div>
                  <span class="font-semibold"
                    >{c.date} {c.time ? c.time : ""}</span
                  >
                  –
                  <span>{c.location}</span> –
                  <span>{c.bands?.join(", ")}</span>
                </div>
                <a
                  class="cursor-pointer flex items-center gap-1 text-accent hover:text-accent-dark"
                  href={getIcsUrlForConcert(c)}
                  download={`event-${c.id}.ics`}
                  title="Download as .ics"
                  aria-label="Download event as .ics"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 2v4M8 2v4M3 10h18"
                    />
                    <circle cx="8" cy="15" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                    <circle cx="16" cy="15" r="1.5" fill="currentColor" />
                  </svg>
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </div>
{/if}
