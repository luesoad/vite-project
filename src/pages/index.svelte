<script type="application/javascript">
    import hero from '../assets/2022-fallen-tyrant-black-metal-band.png';
    import {Heading, Img} from "flowbite-svelte";
    import concerts from "../data/concerts.json";
    const now = new Date();
    const currentYear = now.getFullYear();
    const lastYear = currentYear-1;

</script>


<Img alt="Fallen Tyrant Black Metal Band" class="m-auto" src={hero}/>

<div class="container ft-container mt-4 mb-4">
    {#each concerts as el}
        <ul class="flex flex-col">
            {#each el.concerts as concert, i (i)}

                {#if concert.date && new Date(concert.date) >= now }

                    {#if i === 0}      <Heading>Upcoming</Heading>  {/if}
                    <li class="bg-white article md:text-3xl">
                        <b>{new Date(concert.date).toLocaleDateString('de-DE', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</b>
                        <strong>{concert.location}</strong>
                        {#if concert.bands}
                            with
                            {#each concert.bands as band , i}
                                <i>{band}&nbsp;{#if i < (concert.bands.length - 1)}|&nbsp;{/if}
                                </i>
                            {/each}
                        {/if}
                        <div class="mb-2">{concert.time} Uhr</div>

                    </li>
                {/if}
            {/each}
        </ul>

        {#if el.year && (el.year === currentYear || el.year === lastYear) }
            <Heading class="mt-8">Latest</Heading>
            <ul class="flex-container bg-black">
                {#each el.concerts as concert}
                    {#if concert.date && new Date(concert.date) < now }
                        <li class="mb-4 md:text-3xl flex-col two-col-item">
                            <b>{new Date(concert.date).toLocaleDateString('de-DE', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</b>
                            <strong>{concert.location}</strong>
                            {#if concert.bands}
                                with
                                {#each concert.bands as band , i}
                                    <i>{band}&nbsp;{#if i < (concert.bands.length - 1)}|&nbsp;{/if}
                                    </i>
                                {/each}

                            {/if}
                            <div class="mb-2">{concert.time} Uhr</div>
                        </li>
                    {/if}

                {/each}
            </ul>
        {/if}
    {/each}

</div>

