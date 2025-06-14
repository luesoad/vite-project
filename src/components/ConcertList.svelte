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

<style>
.concert-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.concert-card {
    background: linear-gradient(120deg, #1a1a1a 80%, #222 100%);
    box-shadow: 0 4px 24px #000a;
    padding: 1.5rem 2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
}
.concert-card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 32px #000c;
    background: linear-gradient(120deg, #232323 85%, #333 100%);
}

.concert-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.concert-location {
    color: #ffb347;
    letter-spacing: 0.03em;
}

.concert-date {
    color: #aaa;
    font-size: 0.95rem;
    font-weight: normal;
    margin-left: 1rem;
    white-space: nowrap;
}

.concert-bands {
    margin-top: 0.25rem;
    font-size: 1rem;
    color: #f0f0f0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.2rem;
}

.concert-with {
    font-style: italic;
    color: #aaa;
    margin-right: 0.4rem;
}

.concert-band {
    color: #fff;
    font-weight: 500;
}

.sep {
    color: #ffb347;
    margin: 0 0.2rem;
}
</style>
