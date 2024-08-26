

<script>
    //Prompt: aggrPerms are kinda crazy
    // get rid of them please
    import WeightedDoc from './WeightedDoc.svelte'
    import WeightedDocsControl from './components/WeightedDocsControl.svelte'
   
    export let docs;
    export let acts;
    // export let title='';
    export let aggr='max';
    export let thresholdOrPercentile='threshold';
    export let ordering = 'descend';
    

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


    aggrs['max'] = acts.map((feats) => Math.max(...feats))
    aggrPerms['max'] = argsort(aggrs['max'])
    aggrs['max'] = aggrs['max'].toSorted()

    aggrs['min'] = acts.map((feats) => Math.min(...feats))
    aggrPerms['min'] = argsort(aggrs['min'])
    aggrs['min'] = aggrs['min'].toSorted()

    aggrs['mean'] = acts.map((feats) => feats.reduce((a, b) => a + b, 0) / feats.length)
    aggrPerms['mean'] = argsort(aggrs['mean'])
    aggrs['mean'] = aggrs['mean'].toSorted()

    let absfeats;
    aggrs['absmax'] = acts.map((feats) => {
            absfeats = feats.map((feat) => Math.abs(feat))
            return Math.max(...absfeats)
        })
    aggrPerms['absmax'] = argsort(aggrs['absmax'])
    aggrs['absmax'] = aggrs['absmax'].toSorted()

    aggrs['signed_absmax'] = acts.map((feats) => {
            absfeats = feats.map((feat) => Math.abs(feat))
            let idx = absfeats.indexOf(Math.max(...absfeats))
            return feats[idx]
        })    
    aggrPerms['signed_absmax'] = argsort(aggrs['signed_absmax'], (a, b) => a-b)
    console.log('aggrs[signed_absmax]: ', aggrs['signed_absmax'])
    aggrs['signed_absmax'] = aggrs['signed_absmax'].toSorted((a, b) => a-b)
    // console.log('aggrs[signed_absmax] after sort: ', aggrs['signed_absmax'])

    aggrs['absmean'] = acts.map((feats) => {
            absfeats = feats.map((feat) => Math.abs(feat))
            return absfeats.reduce((a, b) => a + b, 0) / absfeats.length
        })
    aggrPerms['absmean'] = argsort(aggrs['absmean'])
    aggrs['absmean'] = aggrs['absmean'].toSorted()

    // aggrs['signed_prod'] = 
    


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

    export let k = 10;

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

            console.log('startBound: '+startBound)
            console.log('k', k)
            console.log('startBound + k: '+(startBound+k))
            console.log('aggrs[aggr].length: '+aggrs[aggr].length)
            console.log('aggr: '+aggr)
            console.log('aggrs[aggr]: ', aggrs[aggr])

            // get end bound
            for (var j = aggrs[aggr].length; j >= startBound+k; j--) {
                if (aggrs[aggr][j-1] <= end && aggrs[aggr][j-1] >= start) {
                    console.log('endBound: '+j)
                    console.log('aggrs[aggr][j-1]: '+aggrs[aggr][j-1])
                    console.log('start: '+start)
                    console.log('end: '+end)
                    console.log('j: '+j)
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
        
        console.log('Bounds')
        console.log([startBound, endBound])
        console.log('k: '+k)
        console.log()
        return [startBound, endBound];
    };
    

    let getDocIndices = (start, end) => {
        // given a start/end percentile or threshold, get the sampled docs in the rendered order (I think?)
        let [startBound, endBound] = getDocBounds()
        console.log([startBound, endBound])
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
        console.log('resampleDocs called:', start, end)
        if (thresholdOrPercentile == 'percentile') {
            start = Math.max(start, 0)
            end = Math.min(1, end)
        }
        renderedDocIndices = getDocIndices(start, end)
        console.log(renderedDocIndices)
    }

    
    $: {
        thresholdOrPercentile; start; end; ordering;
        resampleDocs(start, end)
    }

    $: {
        console.log('tick')
        thresholdMin = Math.min(...aggrs[aggr])
        {console.log(docs)}
        thresholdMax = Math.max(...aggrs[aggr])//[docs.length - 1]
        console.log(thresholdMin)
    }
</script>

<main>
    <WeightedDocsControl thresholdMax={thresholdMax} thresholdMin={thresholdMin} bind:start={start} bind:end={end} bind:thresholdOrPercentile={thresholdOrPercentile} bind:aggregation={aggr} bind:ordering={ordering} resampleDocs={resampleDocs}/>
        {#each renderedDocIndices as i}
            <WeightedDoc tokens={docs[i]} weights={acts[i]}/>
        {/each}
</main>

<style>
    main {
        background-color: black;
        font: sans-serif;
    }
</style>