<script lang="ts">
  export let data;
  import TextCard from '../../components/TextCard.svelte';
</script>

<div class="container mx-auto max-w-3xl px-4 pb-8">

  <div class="flex flex-col gap-6 mt-8">
    {#each data.posts as post (post.id)}
      <TextCard title={post.title} text={post.body} />
    {/each}
  </div>
</div>
