<script lang="ts">
    import concerts from "../../data/concerts.json";
    import { Heading, Img } from "flowbite-svelte";
    import { HERO_IMAGE } from '../../lib/constants';
    import type { ConcertYear } from '../../lib/types';
    const concertsData: ConcertYear[] = concerts as ConcertYear[];
</script>

<Img alt="A Band" class="m-auto" src={HERO_IMAGE}/>

<div class="container ft-container">
    <Heading class="pb-4">Concerts</Heading>
    <div class="flex-container">
        {#each concertsData as el}
            <div class="two-col-item">
                <div>
                    <Heading tag="h2" class="mb-2">{el.year}</Heading>
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