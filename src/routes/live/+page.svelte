<script lang="ts">
    import concerts from "../../data/concerts.json";
    import { HERO_IMAGE } from '../../lib/constants';
    import type { ConcertYear } from '../../lib/types';
    const concertsData: ConcertYear[] = concerts as ConcertYear[];
</script>

<img alt="A Band" class="m-auto" src={HERO_IMAGE}/>

<div class="container ft-container">
    <h1 class="pb-4">Concerts</h1>
    <div class="flex-container">
        {#each concertsData as el}
            <div class="two-col-item">
                <div>
                    <h2 class="mb-2">{el.year}</h2>
                    <ul class="mb-4">
                        {#each el.concerts as concert}
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
                </div>
            </div>
        {/each}
    </div>
</div>