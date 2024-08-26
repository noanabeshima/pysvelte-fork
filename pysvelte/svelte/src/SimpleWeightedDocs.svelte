<script>
    import WeightedDoc from './WeightedDoc.svelte'
   
    export let docs;
    export let weights;

    export let theme = 'dark';

    if (theme !== 'dark' && theme !== 'light') {
        throw new Error('Invalid theme: ' + theme + '. Must be "dark" or "light".');
    }

    function zip(...arrays) {
        const length = Math.min(...arrays.map(arr => arr.length));
        return Array.from({ length }, (_, i) => arrays.map(arr => arr[i]));
    }
</script>

<main class={theme}>
    <div class="docs">
        {#each zip(docs, weights) as [doc, doc_weights]}
            <div class="doc">
                <WeightedDoc tokens={doc} weights={doc_weights}/>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        font: sans-serif;
    }

    .dark {
        background-color: black;
        color: white;
    }

    .light {
        background-color: white;
        color: black;
    }

    .doc {
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    .docs {
        margin-top: 0.4rem;
        padding-top: 0rem;
        margin-bottom: 1rem;
    }

</style>