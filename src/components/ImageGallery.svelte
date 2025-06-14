<script lang="ts">
  export let images: { imgurl: string; alt?: string }[] = [];
</script>

<div class="image-gallery">
  {#each images as image, i (i)}
    <div class="gallery-img-container">
      <img class="gallery-img" src={image.imgurl} alt={image.alt || `Gallery image ${i + 1}`} loading="lazy" />
    </div>
  {/each}
</div>