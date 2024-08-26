<script>
    export let acts;
    export let tok_indices;
    export let toks;

    export let title_a='';
    export let title_b='';
    export let title = '';

    export let nearest_neighbors=[];

    export let theme = 'light';

    export let x;
    export let y;

    export let pointColors = [];

    import Boundaries from './Boundaries.svelte';
    import WeightedDoc from './WeightedDoc.svelte';

    let focusIndex = 0

    export let arrowCoords = [];
    export let shapes = [];

    export let colorscale;
</script>


<main class={theme}>
    <Boundaries bind:focusIndex={focusIndex} x={x} y={y} xLabel={title_a} yLabel={title_b} title={title} arrowCoords={arrowCoords} shapes={shapes} pointColors={pointColors} colorscale={colorscale ?? undefined}/>


    <div class={"flex-container"}>
        <div class="flex-item">
            <WeightedDoc tokens={toks[focusIndex]} weights={acts[focusIndex]} highlight_index={tok_indices[focusIndex]}/>
        </div>
        {#if nearest_neighbors.length > 0}
            {#each nearest_neighbors[focusIndex] as neighborIdx}
            <div class="flex-item">
                <WeightedDoc tokens={toks[neighborIdx]} weights={acts[neighborIdx]} highlight_index={tok_indices[neighborIdx]}/>
            </div>
            {/each}
        {/if}
    </div>
</main>


<style>
    .flex-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .flex-item {
        flex: 1;
        padding: 10px;
    }

    .dark {
        background-color: black;
        color: white;
    }
    .light {
        background-color: white;
        color: black;
    }
    
</style>