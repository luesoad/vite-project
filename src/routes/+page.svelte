<script lang="ts">
  import concerts from "../data/concerts.json";
  import ConcertSection from '../components/ConcertSection.svelte';

  const now = new Date();

  const allConcerts = concerts.flatMap(el =>
      el.concerts.map(concert => ({
          ...concert,
          year: el.year
      }))
  );

  const upcomingConcerts = allConcerts
      .filter(concert => concert.date && new Date(concert.date) >= now)
      .sort((a, b) => new Date(a.date!) .getTime() - new Date(b.date!) .getTime());

  const pastConcerts = allConcerts
      .filter(concert => concert.date && new Date(concert.date) < now)
      .sort((a, b) => new Date(b.date!) .getTime() - new Date(a.date!) .getTime());
</script>

<div class="container ft-container mt-8 mb-12">
 <ConcertSection
    title="Upcoming Concerts"
    concerts={upcomingConcerts}
    emptyText="No upcoming concerts."
/>
  <ConcertSection
    title="Past Concerts"
    concerts={pastConcerts}
    emptyText="No past concerts."
  />
</div>