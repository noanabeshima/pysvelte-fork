<script>
	import { onMount } from 'svelte';
	import Plotly from 'plotly.js-dist-min';

	export let x = [1,2,3];
	export let y = [1,2,3];

	let absmax_x = Math.max(...x.map(Math.abs));
	let absmax_y = Math.max(...y.map(Math.abs));
	let bounds_interval = Math.max(absmax_x, absmax_y);
	export let shapes = [];


	export let arrowCoords = []; // eg [{x0: 0, y0: 0, x1: 1, y1: 1, label: 'arrowLabel'},...];
	

	export let title = '';
	export let xLabel = '';
	export let yLabel = '';

	// add in empty label to each arrow point if not already there
	let arrowPoints = arrowCoords.map((point) => {
		if (!point.label) {
			point.label = '';
		}
		return point;
	});

	
	let annotations = arrowPoints.length > 0 ? arrowPoints.map((point) => {
		return {
			x: point.x1,
			y: point.y1,
			ax: point.x0,
			ay: point.y0,
			
			text: point.label, // Optional: text inside the arrow
			showarrow: true,
			// startarrowsize: Math.ceil(dist),
			
			arrowsize: 1,
			arrowwidth: 2,
			arrowcolor: 'red',

			xref: 'x',
			yref: 'y',
			axref: 'x',
			ayref: 'y',
		}
	}) : [];

	console.log(annotations)


	let data = [{
		x: x,
		y: y,
		type: 'scatter',
		mode: 'markers'
	}];

	

	// export let layout = {};
	let layout = {
		'title': title,
		'xaxis': {
			'title': xLabel

		},
		'yaxis': {
			'title': yLabel
		},
		'annotations': annotations,
		'shapes': shapes
	}
  
	// Unique identifier for the chart container
	let chartId = `plotly-chart-${Math.random().toString(36)}`;

	let selectedIndex = 0;
	 export let focusIndex = 0;
  
	onMount(() => {
	  Plotly.newPlot(chartId, data, layout=layout).then( () => {
		const chart = document.getElementById(chartId);
		chart.on('plotly_click', (event) => {
		  handleClick(event);
		});
		chart.on('plotly_hover', (event) => {
		  handleHover(event);
		});
		chart.on('plotly_unhover', (event) => {
		  handleUnhover(event);
		});
	  });
	});

	function handleClick(data) {
		console.log('click')
		let points = data.points;
		if (points.length > 0) {
			selectedIndex = points[0].pointIndex;
			focusIndex = points[0].pointIndex;
		}
		console.log(focusIndex)
	}
	

	function handleHover(data) {
		console.log('hover')
		let points = data.points;
		if (points.length > 0) {
			focusIndex = points[0].pointIndex;
		}
		console.log(focusIndex)
	}

	function handleUnhover(data) {
		console.log('unhover')
		
		focusIndex = selectedIndex;
		console.log(focusIndex)
	}
	
  
	// // Reactive statement to update chart when data or layout changes
	// $: if (data.length > 0) {
	//   Plotly.react(chartId, data, layout);
	// }
  </script>
  

  <div id="{chartId}" style="width:100%; height:100%;"></div>
