<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<section class="relative group bg-gradient-to-br from-card-bg to-[#232323] shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300 border border-card-bg-hover">
  <div class="absolute left-0 top-5 h-10 w-1 bg-accent transition-all duration-300 group-hover:h-16"></div>
  <h2 class="ml-4 text-lg md:text-xl font-semibold text-accent mb-1 tracking-wide group-hover:underline underline-offset-4 transition-all duration-200">
    {title}
  </h2>
  <p class="ml-4 text-gray-200 leading-relaxed text-base mb-[1rem]">{text}</p>
</section>
