<script>
    function zip(...arrays) {
        const length = Math.min(...arrays.map(arr => arr.length));
        return Array.from({ length }, (_, i) => arrays.map(arr => arr[i]));
    }
    export let title = '';
    export let tokens;
    export let weights;

    export let theme = '';

    export let highlight_index = -1;

    //make sure theme is dark, light, or empty
    if (theme !== 'dark' && theme !== 'light' && theme !== '') {
        console.error('theme must be dark, light, or \'\' (empty string)');
    }


    const nice = d => {
		if (!d && d !== 0) return '';
		return d.toFixed(2);
	}

    

    let zipped = zip(tokens, weights)

    function getStyle(weight) {
        if (weight >= 0) {
            return `background-color:rgba(13,220,193,${weight});`
        } else {
            return `background-color:rgba(220,13,48,${-weight});`
        }
    }

    $: zipped = zip(tokens, weights)
</script>

<main>
    <h3 class="title">{title}</h3>
    <div class="doc {theme}">
        {#each zipped as [tok, weight], i}
            <span class={"token"+ (tok[0] !== '⋅' ? " noLeadingSpaceTok" : "") + (i==highlight_index ? " highlighted" : "")} style="{getStyle(weight)}">{tok}
                <span class="hovertext">{nice(weight)}</span>
            </span>
        {/each}
    </div>
</main>

<style>
    
    .title {
        /* font-size: 1rem; */
        padding: 0rem;
        margin: 0.2rem;
    }
    .token {
        border:0px solid currentColor;

        padding:0px;
        font-size: larger;
        position: relative;
        cursor: default;
        padding-right: -0.2rem;
    }

    .token:first-child {
        border-left: 0 none;
    }


    
    .token:hover {
        background-color:rgba(135,206,250,1);
    }

    .noLeadingSpaceTok {
        border-left: 1px solid currentColor;
        border-right: 1px solid currentColor;
    }

    .noLeadingSpaceTok + .noLeadingSpaceTok {
        border-left: 0 none;
    }

    .noLeadingSpaceTok + .token .highlighted {
        border-right: 0 none;
    }

    .token .hovertext {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
        z-index: 1;
        background: #c1c1c1;
        color: black;
        margin-top: -.5rem;
        padding: .2rem;
    }

    .token:hover .hovertext {
        visibility: visible;
        display: block;
    }

    .dark {
        background-color: black;
        color: white;
    }
    .light {
        background-color: white;
        color: black;
    }

    .highlighted.highlighted {
        border: 2px solid currentColor;
    }
</style>