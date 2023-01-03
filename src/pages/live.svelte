<script type="application/javascript">
    import concerts from "../data/concerts.json";
    import {Heading, Img} from "flowbite-svelte";
    import hero from '../assets/2022-fallen-tyrant-black-metal-band.png';
</script>

<Img alt="Fallen Tyrant Black Metal Band" class="m-auto" src={hero}/>

<div class="container ft-container">
    <Heading class="pb-4">Concerts</Heading>
    <div class="flex-container">
        {#each concerts as el}
            <div class="two-col-item">
                <div>
                    <Heading tag="h2" class="mb-2">{el.year}</Heading>
                    <ul class="mb-4">
                        {#each el.concerts as concert}
                            <li>
                                <strong>{concert.location}</strong>
                                {#if concert.bands}

                                    with
                                    {#each concert.bands as band , i}
                                        <i>{band}&nbsp;{#if i < (concert.bands.length - 1)}|&nbsp;{/if}
                                        </i>
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


