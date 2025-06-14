<script>
  import { CREW, HERO_IMAGE } from '../../lib/constants.js';
  import ImageGallery from "../../components/ImageGallery.svelte";
  import InfoSection from '../../components/InfoSection.svelte';

  const missionText = `
    Exploring the boundaries of retro-futurism and digital soundscapes, Neon Skyline crafts immersive synthwave journeys. Founded in 2017, our music is inspired by neon-lit nights, pixel art, and the pulse of city life. We blend analog warmth with modern beats, creating soundtracks for dreamers and night riders.
    Our live shows fuse vibrant visuals with shimmering synths, inviting the audience to step into a world where nostalgia meets tomorrow. Each performance is a unique audiovisual adventure across the digital frontier.
    All are welcome in our universe—bring your curiosity, your stories, and your love for luminous melodies.
    For collaborations, booking, or cosmic greetings: <strong><a href="mailto:contact@neonskyline.io">Contact us</a></strong>
  `;

  const alumniText = `
    <strong>Laser Fox</strong> visuals & synths (2018–2020)
    <br>
    <strong>Retro Wave</strong> production & mixing
  `;

  const collaboratorsText = `
    Our debut EP was released in collaboration with <strong>Neon Grid Collective</strong>, a community of synth artists.
    <br>
    Production and mastering by <strong>Skyline Studios</strong>, who also join us for live AV sets.
  `;

  const images = [
    { imgurl: "https://picsum.photos/seed/galaxy/600/400", alt: "Galaxy" },
    { imgurl: "https://picsum.photos/seed/neon/600/400", alt: "Neon" },
    { imgurl: "https://picsum.photos/seed/city/600/400", alt: "City" }
  ];
</script>

<div class="container ft-container">
  <img alt="Neon Skyline Synthwave Project" class="m-auto" src={HERO_IMAGE} />

  <InfoSection title="Mission" html={missionText} />
  <InfoSection title="Crew" members={CREW} hasList={true} />
  <InfoSection title="Alumni" html={alumniText} />
  <InfoSection title="Collaborators" html={collaboratorsText} />

  <ImageGallery {images} />
</div>