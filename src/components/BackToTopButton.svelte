<script lang="ts">
    export let isVisible = false;

    function goTop() {
        document.body.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<button type="button" class="back-to-top" class:hidden={!isVisible} on:click={goTop}>
    Back to top
</button>