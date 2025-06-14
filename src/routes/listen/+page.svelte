<script lang="ts">
    import Player from "../../components/Player.svelte";
    import albums from "../../data/albums.json";
    import videoIds from "../../data/videoIds.json";

</script>

<div class="container ft-container">
    <h1>Our albums</h1>
    <div class="flex-container">
        {#each albums as album}
            <Player link={album} type="spotify"/>
        {/each}
    </div>

    <h2 class="mt-4">See us live</h2>
    <div class="flex-container">
        {#each videoIds as id}
            <Player videoId={id} type="youtube"/>
        {/each}
    </div>


</div>

