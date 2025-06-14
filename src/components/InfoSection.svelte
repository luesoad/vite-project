<script lang="ts">
  export let title: string = "";
  export let html: string = "";
  export let members: { name: string; role: string }[] = [];
  export let hasList: boolean = false;
</script>

<div class="infosection">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <div class="infosection-content">
    {#if hasList}
      {#each members as member}
        <p><strong>{member.name}</strong> {member.role}</p>
      {/each}
    {:else if html}
      <div>{@html html}</div>
    {/if}
  </div>
</div>