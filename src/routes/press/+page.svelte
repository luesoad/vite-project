<script lang="ts">
    import articles from "../../data/articles.json";
    import { HERO_IMAGE } from '../../lib/constants';
</script>

<img alt="Neon Skyline Synthwave Project" class="m-auto" src={HERO_IMAGE} />

<div class="container ft-container">
    <h1>Press</h1>
    <p class="bg-white p-2">
        Over time, our synthwave project has caught the attention of bloggers, reviewers, and playlist curators across the globe. From “retro-futuristic bliss” to “an electrifying sonic journey,” the feedback has been as varied as the neon colors in our visuals. Dive into the articles below and discover what the world is saying.<br>
    </p>
    {#each articles as article, i (i)}
        <div class="p-2 article">
            <h3>{article.headline}</h3>
            <p>
                <a href={article.link} target="_blank" rel="noreferrer">Read More</a>
                {#if article.description}
                    <strong>{article.description}</strong>
                {/if}
            </p>
        </div>
    {/each}
</div>
