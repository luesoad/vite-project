<script lang="ts">
    import concerts from "../data/concerts.json";
    import { HERO_IMAGE } from '../lib/constants';
    import ConcertList from '../components/ConcertList.svelte';

    const now = new Date();

    // Alle Konzerte flach zusammen mit Jahr
    const allConcerts = concerts.flatMap(el =>
        el.concerts.map(concert => ({
            ...concert,
            year: el.year
        }))
    );

    // Nach Datum sortiert
    const upcomingConcerts = allConcerts
        .filter(concert => concert.date && new Date(concert.date) >= now)
        .sort((a, b) => new Date(a.date!) .getTime() - new Date(b.date!) .getTime());

    const pastConcerts = allConcerts
        .filter(concert => concert.date && new Date(concert.date) < now)
        .sort((a, b) => new Date(b.date!) .getTime() - new Date(a.date!) .getTime());
</script>

<div class="hero-wrapper">
    <img alt="A Band" class="hero-img" src={HERO_IMAGE} />
    <div class="hero-overlay">
        <h1 class="hero-title">A Band</h1>
        <p class="hero-subtitle">Experience the best live music!</p>
    </div>
</div>

<div class="container ft-container mt-8 mb-12">
    <section>
        <h2 class="section-title">Upcoming Concerts</h2>
        {#if upcomingConcerts.length > 0}
            <ConcertList concerts={upcomingConcerts} />
        {:else}
            <p class="empty-state">No upcoming concerts.</p>
        {/if}
    </section>

    <section class="mt-12">
        <h2 class="section-title">Past Concerts</h2>
        {#if pastConcerts.length > 0}
            <ConcertList concerts={pastConcerts} />
        {:else}
            <p class="empty-state">No past concerts.</p>
        {/if}
    </section>
</div>

<style>
.hero-wrapper {
    position: relative;
    width: 100vw;
    max-width: 100%;
    overflow: hidden;
    height: 350px;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-img {
    width: 100vw;
    max-width: 100%;
    height: 350px;
    object-fit: cover;
    filter: brightness(0.6) blur(1px);
}

.hero-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-shadow: 0 2px 16px #000, 0 1px 2px #000;
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    margin-bottom: 0.5rem;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0;
}

.section-title {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    background: #222;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    box-shadow: 0 2px 8px #0008;
}

.empty-state {
    color: #aaa;
    font-style: italic;
    margin: 2rem 0;
}
</style>
