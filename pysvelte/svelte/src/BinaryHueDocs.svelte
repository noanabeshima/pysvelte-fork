<script>
    import BinaryHueDoc from './BinaryHueDoc.svelte'
    import WeightedDoc from './WeightedDoc.svelte'
    import WeightedDocsControl from './components/WeightedDocsControl.svelte'
   
    export let docs;
    export let acts;
    export let weight_hues = [245, 359];
    export let aggr_weights;
    export let include_errs = true;


    // export let title='';
    export let aggr='signed_absmax';
    export let thresholdOrPercentile='threshold';
    export let ordering = 'descend';

    export let theme = 'dark';

    if (theme !== 'dark' && theme !== 'light') {
        throw new Error('Invalid theme: ' + theme + '. Must be "dark" or "light".');
    }

    let decor = (v, i) => [v, i];          // set index to value
    let undecor = a => a[1];               // leave only index
    // let argsort = arr => arr.map(decor).sort().map(undecor);
    let argsort = (arr, compareFunc) => {
        // Decorate: create an array of {value, index} pairs
        const decor = (value, index) => ({ value, index });

        // Undecorate: extract the original index after sorting
        const undecor = item => item.index;

        // If no comparison function is provided, use the default ascending order comparison
        const defaultCompare = (a, b) => {
            return (a-b);
        };

        // Use the provided comparison function or the default one if none is provided
        const effectiveCompare = compareFunc || defaultCompare;

        // Map the original array to an array of {value, index} pairs, sort them, and then map back to their original indices
        return arr.map(decor).sort((a, b) => effectiveCompare(a.value, b.value)).map(undecor);
    };

    
    let aggrs = {}
    let aggrPerms = {}


    aggrs['max'] = aggr_weights.map((feats) => Math.max(...feats))
    aggrs['min'] = aggr_weights.map((feats) => Math.min(...feats))
    aggrs['mean'] = aggr_weights.map((feats) => feats.reduce((a, b) => a + b, 0) / feats.length)
    aggrs['absmax'] = aggr_weights.map((feats) => {
            let absfeats = feats.map((feat) => Math.abs(feat))
            return Math.max(...absfeats)
        })
    aggrs['signed_absmax'] = aggr_weights.map((feats) => {
        let absfeats = feats.map((feat) => Math.abs(feat))
        let idx = absfeats.indexOf(Math.max(...absfeats))
        return feats[idx]
    })
    aggrs['absmean'] = aggr_weights.map((feats) => {
        let absfeats = feats.map((feat) => Math.abs(feat))
        return absfeats.reduce((a, b) => a + b, 0) / absfeats.length
    })
    aggrs['signed_max_prod'] = aggr_weights.map((feats) => {
        // want the absmax of non-negative times the absmax of negative
        let pos_max = Math.max(Math.max(...feats), 0)
        let neg_max = -Math.min(Math.min(...feats), 0)
        return pos_max * neg_max
    })
    aggrs['signed_mean_prod'] = aggr_weights.map((feats) => {
        // let mean = feats.reduce((a, b) => a + b, 0)
        let pos_mean = feats.reduce((a, b) => a + Math.max(b, 0), 0)
        let neg_mean = -feats.reduce((a, b) => a + Math.min(b, 0), 0)
        return pos_mean * neg_mean
    })

    for (let key in aggrs) {
        aggrPerms[key] = argsort(aggrs[key])
        aggrs[key] = aggrPerms[key].map(i => aggrs[key][i])
    }


    function sampleDocIdx(rangeStart, rangeEnd, count) {
        // Create an array with numbers from rangeStart to rangeEnd
        let numbers = [];
        for (let i = rangeStart; i < rangeEnd; i++) {
            numbers.push(i);
        }

        // Shuffle the array
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
        }

        // Return the first 'count' elements
        return numbers.slice(0, count);
    }

    // export let thresholdMin = Math.min(...acts.map(r=>Math.min(...r)))-1
    // export let thresholdMax = Math.max(...acts.map(r=>Math.max(...r)))*2
    let thresholdMin=0
    let thresholdMax=1

    export let start = thresholdMin;
    export let end = thresholdMax;
    

    export let k = 7;

    let getDocBounds = () => {
        let startBound, endBound;
        if (thresholdOrPercentile == 'threshold') {
            console.log('threshold branch')
            // get start bound
            for (var i = 0; i <= Math.max(docs.length-k, 0); i++) {
                if (aggrs[aggr][i] >= start) {
                    break; 
                }
            }
            startBound = i;

            // get end bound
            for (var j = aggrs[aggr].length; j >= startBound+k; j--) {
                if (aggrs[aggr][j-1] <= end && aggrs[aggr][j-1] >= start) {
                    break;
                }
            }
            endBound = j;
        } else {
            // percentile
            startBound = Math.min(Math.floor(aggrs[aggr].length * start), aggrs[aggr].length-k);
            endBound = Math.max(Math.ceil(aggrs[aggr].length * end), k)
            console.log(startBound, endBound)
        }
        
        return [startBound, endBound];
    };
    

    let getDocIndices = (start, end) => {
        // given a start/end percentile or threshold, get the sampled docs in the rendered order (I think?)
        let [startBound, endBound] = getDocBounds()

        // just sample randomly from the range
        let indices = sampleDocIdx(startBound, endBound, k)

        if (ordering == 'ascend') {
            indices.sort((a,b) => a-b)
        } else if (ordering == 'descend') {
            indices.sort((a,b) => b-a)
        } else if (ordering == 'dynamic') {
            indices.sort((a,b) => Math.abs(aggrs[aggr][b]) - Math.abs(aggrs[aggr][a]))
        } else {
            // nothing
        }
        return indices.map(i => aggrPerms[aggr][i])
    }

    let renderedDocIndices;
    let resampleDocs = () => {
        if (thresholdOrPercentile == 'percentile') {
            start = Math.max(start, 0)
            end = Math.min(1, end)
        }
        renderedDocIndices = getDocIndices(start, end)
    }

    
    $: {
        thresholdOrPercentile; start; end; ordering;
        resampleDocs(start, end)
    }

    $: {
        thresholdMin = Math.min(...aggrs[aggr])
        thresholdMax = Math.max(...aggrs[aggr])//[docs.length - 1]
    }
</script>

<main class={theme}>
    <WeightedDocsControl thresholdMax={thresholdMax} thresholdMin={thresholdMin} bind:start={start} bind:end={end} bind:thresholdOrPercentile={thresholdOrPercentile} bind:aggregation={aggr} bind:ordering={ordering} resampleDocs={resampleDocs} theme={theme}/>
    <div class="docs">
        {#each renderedDocIndices as i}
            <!-- <div class="doc">
                <BinaryHueDoc tokens={docs[i]} weights={acts[i]} weight_hues={weight_hues} theme={theme}/>
            </div> -->
            <div class="doc_pair_container">
                <div class="doc">
                    <BinaryHueDoc tokens={docs[i]} weights={acts[i]} weight_hues={weight_hues} theme={theme}/>
                </div>
                {#if include_errs}
                <div class="doc">
                    <WeightedDoc tokens={docs[i]} weights={aggr_weights[i]} theme={theme}/>
                </div>
                {/if}
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



    .docs {
        margin-top: 0.4rem;
        padding-top: 0rem;
        margin-bottom: 1rem;
    }

    .doc_pair_container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    .doc {
        flex: 1;
        padding: 10px;
    }
    
    /* old doc setup with single doc*/
    /* .doc {
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
    } */

</style>