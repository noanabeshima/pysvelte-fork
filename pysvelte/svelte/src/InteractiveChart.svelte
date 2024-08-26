<script>
    export let x = [1,2,3];
    export let y = [1,2,3];

    export let focusIndex = 0;

    import ChartInterface from './ChartInterface.svelte';
</script>

<ChartInterface bind:focusIndex={focusIndex} x={x} y={y}/>
<div>Focus: {focusIndex}</div>