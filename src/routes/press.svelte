<script type="application/javascript">
    import {Heading, Img} from "flowbite-svelte";
    import articles from "../data/articles.json";
    import hero from '../assets/2022-fallen-tyrant-black-metal-band.png';

</script>

<Img alt="Fallen Tyrant Black Metal Band" class="m-auto" src={hero}/>

<div class="container ft-container">
    <Heading>Press</Heading>
    <p class="bg-white p-2">
        By now, we've gotten a bit more press coverage. Everything from "atrocious" through "mediocre headbanging
        bullshit" up to "fucking awesome" has been said by now. Listen to it, make up your own mind.<br>
    </p>
    {#each articles as article, i (i)}
        <div class="p-2 article">
            <Heading tag="h3">{article.headline}</Heading>
            <p>
                <a href={article.link} target="_blank" rel="noreferrer">Review</a>
                {#if article.description}
                    <strong>{article.description}</strong>
                {/if}
        </div>
    {/each}

</div>

