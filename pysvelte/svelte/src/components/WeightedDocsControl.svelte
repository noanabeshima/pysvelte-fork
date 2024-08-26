

<script>
    import DoubleSlider from './DoubleSlider.svelte';
	import LabeledSelector from './LabeledSelector.svelte';

    export let thresholdMin = -1;
    export let thresholdMax = 1;
    export let start;
    export let end;

    export let thresholdOrPercentile = "threshold";
	export let ordering = 'descending';
	export let aggregation = 'max';

	export let resampleDocs;

	export let theme = 'dark';
</script>


<main>

	<div class={'menu '+theme}>
		<DoubleSlider min={(thresholdOrPercentile == 'percentile') ? 0 : thresholdMin} max={(thresholdOrPercentile == 'percentile') ? 1 : thresholdMax} bind:start={start} bind:end={end}/>
		<div class='interface'>
			<LabeledSelector options={['max', 'mean', 'min', 'absmax', 'absmean', 'signed_absmax', 'signed_max_prod', 'signed_mean_prod']} title='aggregation' bind:selection={aggregation}/>
			<LabeledSelector options={['threshold', 'percentile']} title='slider type' bind:selection={thresholdOrPercentile}/>
			<LabeledSelector options={['descend','ascend','random', 'dynamic']} title='sort' bind:selection={ordering}/>
			<div>
			<button on:click={resampleDocs}>sample</button>
			</div>
		</div>
	</div>

</main>



<style>
	.interface {
		display: flex;
	}
	.menu {
		display: flex;
		height: 100%;
		padding-bottom: 0.05rem;
		padding-top: .73rem;
		padding-left: 0.4rem;
		padding-right: 0.7rem;
		border-radius: 10px;
	}

	button {
		height: 40%;
		margin-bottom: 0.45rem;
		margin-top: 0.9rem;
		border-radius: 0.5rem;
		border: 1px solid;
		margin-left: 0.5rem;
		margin-right: 0.3rem;
		padding-bottom: 0rem;
		/* padding: 0.3rem; */
		/* margin-top: auto; */
		/* bottom: 0; */
		/* width: 4.5rem; */
	}


	main {
		font-family: Sans-Serif;
		width: min(100%, 40rem);
		/* background-color: rgb(197, 197, 197); */
		/* padding-bottom: -1rem; */
		padding-bottom: 0.7rem;
		padding-top: 0.7rem;
		padding-left: 0.7rem;
		padding-right: 0.7rem;
	}

	.dark {
		background-color: rgb(197, 197, 197);
		color: black;
	}
	.light {
		background-color: rgba(206, 205, 202, 0.906);
		color: rgb(0, 0, 0);
	}
</style>