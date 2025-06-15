<script lang="ts">
  export let href = "";
  export let active = false;
  export let onClick: (() => void) | undefined = undefined;
</script>

<li>
  <a
    href={href}
    class="nav-li {active ? 'active' : ''}"
    aria-current={active ? 'page' : undefined}
    on:click={onClick}
  >
    <slot />
  </a>
</li>