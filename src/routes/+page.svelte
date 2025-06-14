<script>
    import { Heading, Img } from "flowbite-svelte";
    import concerts from "../data/concerts.json";
    import { HERO_IMAGE } from '../lib/constants';
    import ConcertList from '../components/ConcertList.svelte';

    const now = new Date();
    const currentYear = now.getFullYear();
    const lastYear = currentYear - 1;
</script>

<Img alt="A Band" class="m-auto" src={HERO_IMAGE} />

<div class="container ft-container mt-4 mb-4">
    {#each concerts as el (el.year)}
        {#if el.year === currentYear || el.year === lastYear}
            <Heading class="mt-8">Upcoming Concerts</Heading>
            <ConcertList concerts={el.concerts.filter(concert => concert.date && new Date(concert.date) >= now)} />

            <Heading class="mt-8">Past Concerts</Heading>
            <ConcertList concerts={el.concerts.filter(concert => concert.date && new Date(concert.date) < now)} />
        {/if}
    {/each}
</div>