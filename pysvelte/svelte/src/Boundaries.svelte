<script>
	import { onMount } from 'svelte';
	import Plotly from 'plotly.js-dist-min';

	export let x = [1,2,3];
	export let y = [1,2,3];

	// let absmax_x = Math.max(...x.map(Math.abs));
	// let absmax_y = Math.max(...y.map(Math.abs));
	// let bounds_interval = Math.max(absmax_x, absmax_y);

	export let shapes = [];

    export let xrange = [1.2*Math.min(...x), 1.2*Math.max(...x)];
    export let yrange = [1.2*Math.min(...y), 1.2*Math.max(...y)];

    // make sure xrange min is at least 0 and xrange max is at least 0 etc
    if (xrange[0] > 0) {
        xrange[0] = 0;
    }
    if (xrange[1] < 0) {
        xrange[1] = 0;
    }
    if (yrange[0] > 0) {
        yrange[0] = 0;
    }
    if (yrange[1] < 0) {
        yrange[1] = 0;
    }

	export let representativeX = [];
	export let representativeY = [];

	export let pointColors = [];
    


	export let arrowCoords = [];//[{x0: 1, y0: 1, x1: 2, y1: 3, text: ''}]; // eg [{x0: 0, y0: 0, x1: 1, y1: 1, label: 'arrowLabel'},...];
	

	export let title = '';
	export let xLabel = '';
	export let yLabel = '';

    let selectedIndex = 0;
	export let focusIndex = 0;

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
			arrowcolor: 'grey',

			xref: 'x',
			yref: 'y',
			axref: 'x',
			ayref: 'y',
		}
	}) : [];

	console.log(annotations)


	let data = []

	// let colorscale = [
    //   [0.000, "rgb(68, 1, 84)"],
    //   [0.111, "rgb(72, 40, 120)"],
    //   [0.222, "rgb(62, 74, 137)"],
    //   [0.333, "rgb(49, 104, 142)"],
    //   [0.444, "rgb(38, 130, 142)"],
    //   [0.556, "rgb(31, 158, 137)"],
    //   [0.667, "rgb(53, 183, 121)"],
    //   [0.778, "rgb(109, 205, 89)"],
    //   [0.889, "rgb(180, 222, 44)"],
    //   [1.000, "rgb(253, 231, 37)"]
    // ]
  	// colorscale = 'Viridis'
	export let colorscale = [[0.0, "rgb(103, 34, 75)"], [0.19, "rgb(89, 34, 118)"], [0.37, "rgb(34, 46, 138)"], [0.54, "rgb(33, 143, 159)"], [0.7, "rgb(32, 182, 92)"], [0.85, "rgb(93, 205, 29)"], [1.0, "rgb(229, 205, 25)"]]
	
	let marker = {}
	if (pointColors.length > 0) {
		marker = {
			color: pointColors,
			colorscale: colorscale,
			showscale: true,
			reversescale: true,
			colorbar: {
				thickness: 10,
				ticklen: 4,
				tickfont: {
					size: 10
				}
			},
			cmin: 0,
			cmax: 1,
		}
	}

	data.push({
			x: x,
			y: y,
			type: 'scatter',
			mode: 'markers',
			marker: marker

	})


	if (representativeX.length > 0) {
		data.push({
			x: representativeX,
			y: representativeY,
			colorscale: 'Viridis',
			type: 'histogram2dcontour',
			hoverinfo: 'none',
			showscale: false,
			contours: {
				showlabels: false,
				start: 0,
				end: 1,
				size: 0.1
			},
			colorbar: {
				thickness: 10,
				ticklen: 4,
				tickfont: {
					size: 10
				}
			}
		})
	}

	

	

	// export let layout = {};
	let layout = {
		'title': title,
		'xaxis': {
			'title': xLabel,
            'scaleanchor': 'y',
            'scaleratio': 1,
            'range': xrange,
            // 'rangemode': 'fixed'

		},
		'yaxis': {
			'title': yLabel,
            'scaleanchor': 'x',
            'scaleratio': 1,
            'range': yrange,
            // 'rangemode': 'fixed'
		},
		'annotations': annotations,
		'shapes': shapes
	}

	
  
	// Unique identifier for the chart container
	let chartId = `plotly-chart-${Math.random().toString(36)}`;

	
  
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
