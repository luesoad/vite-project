<script lang="ts">
  import { favorites } from '../lib/stores/favorites';
</script>

{#if $favorites.length > 0}
  <div class="fixed top-4 right-4 z-50 bg-accent text-white px-4 py-2 rounded shadow flex items-center gap-2">
    <span class="text-lg">★</span>
    <span class="font-semibold">{$favorites.length} Favorit{$favorites.length === 1 ? '' : 'en'}</span>
  </div>
{/if}
