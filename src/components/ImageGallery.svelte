<script lang="ts">
    import { Heading, Img } from "flowbite-svelte";
    import { CREW, ALUMNI, HERO_IMAGE } from '../lib/constants';
</script>

<div class="container ft-container">
    <Img alt="Neon Skyline Synthwave Project" class="m-auto" src={HERO_IMAGE}/>
    <div class="bg-white p-4 mt-4 mb-4">
        <Heading>Mission</Heading>

        <p>Retro-futuristic synthwave duo, established in 2017, channeling the spirit of neon-lit cityscapes and vintage arcade dreams. Our music is inspired by 80s movie soundtracks, analog synths, and the endless possibilities of a digital tomorrow. We embrace nostalgia, but always with a modern twist, crafting soundtracks for memories that never happened and futures yet to come.</p>
        <p>
            Live performances are a celebration of electronic nostalgia, where shimmering synths and pulsating beats merge with vibrant visuals and laser-lit atmospheres. We aim to transport our audience to a parallel universe—one filled with magenta sunsets, chrome highways, and infinite possibilities.
        </p>
        <p>We welcome all dreamers, creators, and wanderers. Leave your worries at the door and step into the glow of the skyline.</p>

        <p>For collaborations, bookings & general inquiries: <strong><a
                href="mailto:contact@neonskyline.io">Contact us</a></strong></p>
    </div>
    <div class="bg-white p-4 mt-4 mb-4">
        <Heading tag="h2">Crew</Heading>
        {#each CREW as member, i (i)}
            <p><strong>{member.name}</strong> {member.role}</p>
        {/each}
    </div>
    <div class="bg-white p-4 mt-4 mb-4">
        <Heading tag="h6">Alumni</Heading>
        {#each ALUMNI as member, i (i)}
            <p><strong>{member.name}</strong> {member.role}</p>
        {/each}
    </div>
    <div class="bg-white p-4 mt-4 mb-4">
        <Heading class="mt-4 mb-4" tag="h2">Collaborators</Heading>
        <p>
            Our debut EP was released in partnership with <strong>Neon Grid Collective</strong>, a digital label for synthwave artists.
        </p>
        <p> Production and mixing by <strong>Skyline Studios</strong>, who also join us for immersive live AV sets.
        </p>
    </div>
</div>