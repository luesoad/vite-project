<script lang="ts">
    import type { Concert } from '../lib/types';
    export let concerts: (Concert & { year?: number })[];
</script>

<ul class="concert-list">
    {#each concerts as concert}
        <li class="concert-card">
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