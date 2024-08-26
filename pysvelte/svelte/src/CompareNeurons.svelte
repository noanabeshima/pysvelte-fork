<script>
    export let acts_a;
    export let acts_b;
    export let tok_indices;
    export let toks;

    export let title_a='';
    export let title_b='';
    export let title = '';

    export let theme = 'dark';

    export let x = acts_a.map((row, i) => row[tok_indices[i]]);
    export let y = acts_b.map((row, i) => row[tok_indices[i]]);

    import ChartInterface from './ChartInterface.svelte';
    import WeightedDoc from './WeightedDoc.svelte';

    let focusIndex = 0
</script>


<main class={theme}>
    <ChartInterface bind:focusIndex={focusIndex} x={x} y={y} xLabel={title_a} yLabel={title_b} title={title}/>


    <div class={"flex-container"}>
        <div class="flex-item">
            <h3>{title_a}</h3>
            <WeightedDoc tokens={toks[focusIndex]} weights={acts_a[focusIndex]}/>
        </div>
        <div class="flex-item">
            <h3>{title_b}</h3>
            <WeightedDoc tokens={toks[focusIndex]} weights={acts_b[focusIndex]}/>
        </div>
    </div>
</main>


<style>
    .flex-container {
        display: flex;
        flex-direction: row;
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