<script>
    // import assert from 'assert';

    function zip(...arrays) {
        const length = Math.min(...arrays.map(arr => arr.length));
        return Array.from({ length }, (_, i) => arrays.map(arr => arr[i]));
    }
    export let title = '';
    export let tokens;
    export let weights; // toks[weights[]]
    
    // hue values corresponding to each feature
    export let weight_hues = [245, 359];

    // assert(weight_styles.length >= weights[0]?.length, 'weight_styles length must be at least as long as the weights[0] length');

    export let theme = '';

    export let highlight_index = -1;

    //make sure theme is dark, light, or empty
    if (theme !== 'dark' && theme !== 'light' && theme !== '') {
        console.error('theme must be dark, light, or \'\' (empty string)');
    }


    function HSVtoRGB(h, s, v) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }


    const nice = d => {
		if (!d && d !== 0) return '';
		return d.toFixed(2);
	}
    

    let zipped = zip(tokens, weights)

    // function getStyle(weight, weight_style) {
    //     let [r, g, b] = weight_style;
    //     return `background-color:rgba(${r},${g},${b},${0.5*weight})`
    // }

    function getStyle(a, b, weight_hues) {
        let og_hue_alpha = Math.atan2(b, a)/(Math.PI/2)
        let centered_alpha = 2*(og_hue_alpha-0.5)
        let distorted_center_alpha = (Math.abs(centered_alpha)**0.65)*Math.sign(centered_alpha)
        let alpha = (distorted_center_alpha/2) + 0.5

        let hue = weight_hues[0]*(1-alpha) + weight_hues[1]*(alpha)
        hue = hue/360
        
        let value = 1.0
        let transparency = Math.max(a, b)
        let sat = (Math.max(a,b)**0.5 + 0.5)/1.5

        let rgb = HSVtoRGB(hue, sat, value)

        console.log('hsv')
        console.log(hue, sat, value)
        console.log('rgb')
        console.log(rgb)

        return `background-color:rgba(${rgb.r},${rgb.g},${rgb.b},${0.95*transparency})`
        // return `background-color:rgba(100,100,100,1.0)`

    }

    $: zipped = zip(tokens, weights)
</script>

<main>
    <h3 class="title">{title}</h3>
    <div class="doc {theme}">
        {#each zipped as [tok, token_weights], i}
            <span class={"token"+ (tok[0] !== '⋅' ? " noLeadingSpaceTok" : "") + (i==highlight_index ? " highlighted" : "")} style={getStyle(token_weights[0], token_weights[1], weight_hues)}>{tok}
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
/* 
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
    } */
</style>