<script lang="ts">
    import type { Concert } from '../lib/types';
    export let concerts: Concert[];
</script>

<ul>
    {#each concerts as concert}
        <li>
            <strong>{concert.location}</strong>
            {#if concert.bands && concert.bands.length > 0}
                with
                {#each concert.bands as band, i}
                    <i>{band}&nbsp;{#if i < (concert.bands.length - 1)}|&nbsp;{/if}</i>
                {/each}
            {/if}
        </li>
    {/each}
</ul>
