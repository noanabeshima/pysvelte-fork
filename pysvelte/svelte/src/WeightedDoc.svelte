<script>
    function zip(...arrays) {
        const length = Math.min(...arrays.map(arr => arr.length));
        return Array.from({ length }, (_, i) => arrays.map(arr => arr[i]));
    }
    export let title = '';
    export let tokens;
    export let weights;

    export let theme = 'dark';

    
    export let highlight_index = -1;

    export let dynamic_highlight = false;

    // Add this function to handle mouse enter event
    function handleMouseEnter(index) {
        if (dynamic_highlight) {
            highlight_index = index;
        }
    }

    // Add this function to handle mouse leave event
    function handleMouseLeave() {
        if (dynamic_highlight) {
            highlight_index = -1;
        }
    }


    //make sure theme is dark, light, or empty
    if (theme !== 'dark' && theme !== 'light' && theme !== '') {
        console.error('theme must be dark, light, or \'\' (empty string)');
    }


    const nice = d => {
		if (!d && d !== 0) return '';
		return d.toFixed(2);
	}

    function noSpaceToRight(tokens, index) {
        return index < tokens.length - 1 && tokens[index + 1][0] !== '⋅';
    }

    let zipped = zip(tokens, weights)

    function getStyle(weight) {
        if (weight >= 0) {
            return `background-color:rgba(13,220,193,${weight});`
        } else {
            return `background-color:rgba(220,13,48,${-weight});`
        }
    }

    function copyDocumentText(event) {
        if (event.metaKey || event.ctrlKey) {
            event.preventDefault();
            let textToCopy;
            if (highlight_index !== -1) {
                textToCopy = tokens.slice(0, highlight_index + 1).join('').replace(/⋅/g, ' ').replace(/↵/g, '\n');
            } else {
                textToCopy = tokens.join('').replace(/⋅/g, ' ').replace(/↵/g, '\n');
            }
            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log('Document text copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    }

    function handleKeyDown(event) {
        // if (event.key === 'Enter' || event.key === ' ') {
        //     copyDocumentText(event);
        // }
    }

    $: zipped = zip(tokens, weights)
</script>

<main>
    <div class="doc-container {theme}">
        <h3 class="title">{title}</h3>
        <div class="doc-content" on:click={(event) => event.ctrlKey || event.metaKey ? copyDocumentText(event) : null}>
            {#each zipped as [tok, weight], i}
                <span class={[
                            "token",
                            theme,
                            tok[0] !== '⋅' ? " noLeadingSpaceTok" : "",
                            i==highlight_index ? " highlighted" : "",
                            noSpaceToRight(tokens, i) ? "noSpaceToRight": ""
                        ].filter(Boolean).join(" ")}
                        style="{getStyle(weight)}"
                        on:mouseenter={()=> handleMouseEnter(i)}
                        on:mouseleave={handleMouseLeave}
                        >{tok}<span class="hovertext">{nice(weight)}</span></span>
            {/each}
        </div>
    </div>
</main>

<style>
    .doc-container {
        position: relative;
    }
    
    .title {
        padding: 0rem;
        margin: 0.2rem 0;
    }
    
    .doc-content {
        position: relative;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        cursor: pointer;
    }
    
    .token {
        border:0px solid currentColor;

        padding:0px;
        position: relative;
        cursor: default;
        padding: 0rem;
        margin: 0rem;
        display: inline-block;
        vertical-align: top;
        white-space: pre-wrap;

        padding-left: 0rem;
        padding-right: .12rem;
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
        padding-left: .06rem;
    }

    .noSpaceToRight {
        padding-right: .06rem;
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
        white-space: nowrap;
        pointer-events: none;
    }

    .token:hover .hovertext,
    .token.highlighted .hovertext {
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

    .dark .highlighted {
        box-shadow: 0 0 0 2px white;
    }
    .light .highlighted {
        box-shadow: 0 0 0 2px black;
    }

</style>