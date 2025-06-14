<script lang="ts">
    import {Heading, Img} from "flowbite-svelte";
    import { HERO_IMAGE } from '../../lib/constants';
</script>

<Img alt="A Band" class="m-auto" src={HERO_IMAGE}/>
<div class="container ft-container mt-4">
    <Heading>Imprint</Heading>
    <div class="bg-white pt-4 p-4">
        <div>ABC</div>
        <div>Street</div>
        <div>City</div>
        <a href="mailto:info@example.com">E-Mail</a>
    </div>

</div>
