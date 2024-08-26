<script>
    // import assert from 'assert';

    function zip(...arrays) {
        const length = Math.min(...arrays.map(arr => arr.length));
        return Array.from({ length }, (_, i) => arrays.map(arr => arr[i]));
    }
    export let title = '';
    export let tokens;
    export let weights; // toks[weights[]]
    
    // RGB values corresponding to each weight
    export let weight_styles = [
        [220, 13, 48],
        [13, 220, 193],
    ];

    // assert(weight_styles.length >= weights[0]?.length, 'weight_styles length must be at least as long as the weights[0] length');

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

    function getStyle(weight, weight_style) {
        let [r, g, b] = weight_style;
        return `background-color:rgba(${r},${g},${b},${0.5*weight})`
    }

    $: zipped = zip(tokens, weights)
</script>

<main>
    <h3 class="title">{title}</h3>
    <div class="doc {theme}">
        {#each zipped as [tok, token_weights], i}
            <span class={"token"+ (tok[0] !== '⋅' ? " noLeadingSpaceTok" : "") + (i==highlight_index ? " highlighted" : "")}>
                <span class="invisible">{tok}</span>
                
                {#each token_weights as weight, weight_idx}
                    <span class="tokenOverlay" style={getStyle(weight, weight_styles[weight_idx])}/>
                {/each}
                
                <span class="tokenOverlay">
                    <span class="overlay-tok-text {theme}-text background-color:rgba(0,0,0,0)">{tok}</span>
                </span>

                <span class="hovertext">
                    {#each token_weights as weight, j}
                        {#if j == 0}{nice(weight)}{:else}, {nice(weight)}{/if}
                    {/each}
                </span>
                
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
    
    /* .token:hover {
        background-color:rgba(135,206,250,1);
    } */

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
        background: rgb(193, 193, 193, 0.8);
        color: black;
        margin-top: -.5rem;
        padding: .2rem;
        white-space: nowrap;
    }

    .token:hover .hovertext {
        visibility: visible;
        display: block;
    }

    .dark {
        background-color: black;
        color: white;
    }
    .dark-text {
        color: white
    }
    .light {
        background-color: white;
        color: black;
    }
    .light-text {
        color: black
    }
    .overlay-tok-text {
        border-left: 0 none;
    }

    .highlighted.highlighted {
        border: 2px solid currentColor;
    }

    .tokenOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .invisible {
        color: rgba(0,0,0,0);
        background-color: rgba(0,0,0,0);
    }
</style>