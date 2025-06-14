<script lang="ts">
    import concerts from "../../data/concerts.json";
    import { HERO_IMAGE } from '../../lib/constants';
    import ConcertList from '../../components/ConcertList.svelte';
    import { flattenConcerts, getUpcomingConcerts, getPastConcerts, type ExtendedConcert } from "../../utils/concerts";

    const now = new Date();
    const allConcerts: ExtendedConcert[] = flattenConcerts(concerts);
    const upcomingConcerts = getUpcomingConcerts(allConcerts, now);
    const pastConcerts = getPastConcerts(allConcerts, now);
</script>

<img alt="A Band" class="m-auto" src={HERO_IMAGE} />

<div class="container ft-container mt-4 mb-4">
    <h2 class="mt-8">Upcoming Concerts</h2>
    {#if upcomingConcerts.length > 0}
        <ConcertList concerts={upcomingConcerts} />
    {:else}
        <p class="text-gray-400">No upcoming concerts.</p>
    {/if}

    <h2 class="mt-8">Past Concerts</h2>
    {#if pastConcerts.length > 0}
        <ConcertList concerts={pastConcerts} />
    {:else}
        <p class="text-gray-400">No past concerts.</p>
    {/if}
</div>
