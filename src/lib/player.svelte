<script type="application/javascript">
    /**
     * @typedef {Object} Props
     * @property {string} [link]
     * @property {string} [videoId]
     * @property {any} type
     */

    /** @type {Props} */
    let { link = "", videoId = "", type } = $props();
</script>


<div class="player-wrapper">
    <div class="player-container">
        <iframe allowfullscreen
                src={type === "spotify" ? "https://open.spotify.com/embed" + new URL(link).pathname : "https://www.youtube.com/embed/" +videoId}
                title="Play Fallen Tyrant videos"></iframe>
    </div>
</div>
