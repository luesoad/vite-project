<script>
    import { Heading } from "flowbite-svelte";
    export let title = "";
    export let content = "";
    export let members = [];
    export let hasList = false;
</script>

<div class="bg-white p-4 mt-4 mb-4">
    <Heading>{title}</Heading>
    {#if hasList}
        {#each members as member, i (i)}
            <p><strong>{member.name}</strong> {member.role}</p>
        {/each}
    {:else}
        <p>{content}</p>
    {/if}
</div>
