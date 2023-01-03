<script type="application/javascript">
    import Player from "../lib/player.svelte";
    import albums from "../data/albums.json";
    import videoIds from "../data/videoIds.json";
    import {Heading} from "flowbite-svelte";

</script>

<div class="container ft-container">
    <Heading>Our albums</Heading>
    <div class="flex-container">
        {#each albums as album}
            <Player link={album} type="spotify"/>
        {/each}
    </div>

    <Heading class="mt-4" tag="h2">See us live</Heading>
    <div class="flex-container">
        {#each videoIds as id}
            <Player videoId={id} type="youtube"/>
        {/each}
    </div>


</div>

