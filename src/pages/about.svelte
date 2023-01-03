<script type="application/javascript">
    import {Heading, Img} from "flowbite-svelte";
    import hero from '../assets/hero.jpeg';
    import ImageGallery from "../lib/imageGallery.svelte";

    const images = [{imgurl: "../assets/fallen-tyrant.jpeg"}];

    const crew = [
        {name: "Mithras Sol Invictus", role: "guitars & vocals"},
        {name: "Nihlathak", role: "bass & backing vocals"},
        {name: "Osiris", role: "drums"},
    ]

</script>



    <div class="container ft-container">
        <Img alt="Fallen Tyrant Black Metal Band" class="m-auto" src={hero}/>
        <div class="bg-white p-4 mt-4 mb-4">
            <Heading>Mission</Heading>

            <p>Aggressive underground black metal power trio, established in 2010, deeply influenced by the Scandinavian
                second wave and old school heavy metal. Neither do we give a fuck about new trends, nor do we let
                ourselves
                be limited by what the pretentious wannabe black metal elite deems to be "true." We create black art
                from
                the deepest pits of our souls, and your opinion is as irrelevant to that process as any so-called
                "scene."
                The product of art is for the enjoyment of the people, but the creative process is for the enjoyment of
                the
                artist.</p>
            <p>
                Live shows are essential to our perception of black art, as it is the only time these two come together.
                We
                strive to create a dense athmosphere and an intense and otherwordly experience for ourselves as well as
                for
                the audience. Frankincense smoke and face paint are essential to that.
            </p>
            <p>We do not associate with idiots. Especially not of the far-right kind. Go fuck off, you have absolutely
                nothing in common with us.</p>

            <p>Official communications, booking & orders: <strong><a
                    href="javascript:window.location.href=atob('bWFpbHRvOm1pdGhyYXNfc19pQGdteC5kZQ==')">Contact
                us</a></strong></p>
        </div>
        <div class="bg-white p-4 mt-4 mb-4">
            <Heading tag="h2">Crew</Heading>
            {#each crew as member, i (i)}
                <p><strong>{member.name}</strong> {member.role}</p>

            {/each}
        </div>
        <div class="bg-white p-4 mt-4 mb-4">
            <Heading tag="h6">Offline</Heading>
            <p><strong>Den Tørstige Mand</strong> bass (2010-2013)</p>
            <p><strong>Sperrfeuer Heretic</strong> drums & samples</p>
        </div>
        <div class="bg-white p-4 mt-4 mb-4">
            <Heading class="mt-4 mb-4" tag="h2">Allies</Heading>
            <p>
                We have released our debut album via <strong>Fat & Holy</strong>, a local collective label.
            </p>
            <p> Our album was produced by <strong>Rene Hofmann</strong>, who sometimes also works as our live sound
                engineer.
            </p>
        </div>
        <ImageGallery images="{images}"/>
    </div>




