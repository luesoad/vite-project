<script>
    export let title = "";
    export let html = "";
    export let content = "";
    export let members = [];
    export let hasList = false;
</script>

<div class="bg-white p-4 mt-4 mb-4">
    <h1>{title}</h1>
    {#if hasList}
        {#each members as member, i (i)}
            <p class="text-black"><strong>{member.name}</strong> {member.role}</p>
        {/each}
    {:else if html}
        <div class="prose text-black">{@html html}</div>
    {:else}
        <p class="text-black">{content}</p>
    {/if}
</div>
