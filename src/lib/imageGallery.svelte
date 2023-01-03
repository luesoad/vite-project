<script type="application/javascript">
    import {Carousel, Img} from "flowbite-svelte";

    let showThumbs = false
    let showCaptions = false
    export let images;

</script>
{#if images.length > 0 && images.length < 2}
    <ul class="gallery">
        {#each images as image, i (i)}
            <li class="gallery__item">
                <Img class="gallery__item__image" src={image.imgurl} alt="Fallen Tyrant Black Metal Band"
                />
            </li>
        {/each}

    </ul>
{/if}

{#if images.length >= 2}
    <div class="sm:hidden">
        <Carousel {images} {showCaptions} {showThumbs}
                  transitionParams="{{delay: 250, duration: 300, x: 100}}" divClass="solid-lg"/>
    </div>
    <div class="hidden sm:block">
        <ul class="gallery">
            {#each images as image, i (i)}
                <li class="gallery__item">
                    <Img class="gallery__item__image" src={image.imgurl} alt="Fallen Tyrant Black Metal Band"/>
                </li>
            {/each}

        </ul>
    </div>
{/if}
