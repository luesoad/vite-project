<script lang="ts">
    import type { Concert } from '../lib/types';
    import { favorites } from '../lib/stores/favorites';

    export let concerts: (Concert & { year?: number })[];

    const now = new Date();

    function isUpcoming(concert: Concert & { year?: number }) {
        return concert.date && new Date(concert.date) >= now;
    }

    function toggleFavorite(id: string, event: Event) {
        event.stopPropagation();
        favorites.update(list =>
            list.includes(id)
                ? list.filter(favId => favId !== id)
                : [...list, id]
        );
    }
</script>

<ul class="concert-list">
    {#each concerts as concert}
        <li class="concert-card" style="position: relative;">
            {#if isUpcoming(concert)}
                <button
                    style="position: absolute; top: 8px; right: 8px; background: none; border: none; padding: 0; font-size: 1.15em; color: #F5B301; cursor: pointer;"
                    aria-pressed={$favorites.includes(concert.id)}
                    on:click={(e) => toggleFavorite(concert.id, e)}
                    title="Mark as favorite"
                    tabindex="0"
                >
                    {$favorites.includes(concert.id) ? '★' : '☆'}
                </button>
            {/if}
            <div class="concert-header">
                <span class="concert-location">{concert.location}</span>
                <span class="concert-date">
                    {#if concert.date}
                        {concert.date}
                    {/if}
                    {#if concert.year}
                        &nbsp;[{concert.year}]
                    {/if}
                </span>
            </div>
            {#if concert.bands && concert.bands.length > 0}
                <div class="concert-bands">
                    <span class="concert-with">with</span>
                    {#each concert.bands as band, i}
                        <span class="concert-band">{band}{#if i < (concert.bands.length - 1)} <span class="sep">|</span> {/if}</span>
                    {/each}
                </div>
            {/if}
        </li>
    {/each}
</ul>
