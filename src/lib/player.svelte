<script type="application/javascript">
    export let link = "";
    export let videoId = ""
    export let type;
</script>


<div class="player-wrapper">
    <div class="player-container">
        <iframe allowfullscreen
                src={type === "spotify" ? "https://open.spotify.com/embed" + new URL(link).pathname : "https://www.youtube.com/embed/" +videoId}
                title="Play Fallen Tyrant videos"></iframe>
    </div>
</div>
