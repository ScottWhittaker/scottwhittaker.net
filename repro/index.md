---
title: Reproductions
description: Reproductions of sites and or design using html and css
layout: layouts/base.njk
eleventyNavigation:
    key: Reproductions
    order: 1
---

# {{ title }}

Some reproductions of sites and/or designs using HTML and CSS. There is something therapeutic in this for me, if only I had more time to do this sort of stuff.

## Swissted

A few reproductions of the amazing designs at [swissted](https://www.swissted.com/) using HTML and CSS only.

<style>

    @font-face {
    font-family:"neue-haas-grotesk-display";
    src:url("https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:600;
    font-display: swap;
    }

    .swissted {
        margin: 2rem 0;
        padding: 0;
        list-style-type: none;
    }

    .swissted li {
        margin-bottom: 8px;
    }

    .swissted a {
        display: block;
        padding: 1rem;
        text-decoration: none;
        font-size: 24px;
        font-family: neue-haas-grotesk-display, "Helvetica Neue", Helvetica, sans-serif;
        letter-spacing: .2rem;
    }

    .swissted a:hover {
        background-color: #000;
        color: #fff;
    }

    .talking-heads {
        color: #fff;
        background-color: #ef490f;
    }

    .blondie {
        background-color: #ed008c;
        color: #fff;
    }

    .pixies {
        background-color: #5ebd44;
        color: #333;
    }

    .smiths {
        background-color: #c0ac06;
        color: #333;
    }

    .bowie {
        background-color: #00a095;
        color: #fff;
    }

    .chain {
        background-color: #016ea1;
        color: #fff;
    }

    .underground {
        background-color: #01bef3;
        color: #333;
    }

    .enemy {
        background-color: #ffd502;
        color: #333;
    }

    .heatmiser {
        background-color: #c3c5c7;
        color: #333;
    }

</style>

<ul class="swissted">
    <li><a href="./swissted/blondie" class="blondie">blondie</a></li>
    <li><a href="./swissted/david-bowie" class="bowie">david bowie</a></li>
    <li><a href="./swissted/heatmiser" class="heatmiser">heatmiser</a></li>
    <li><a href="./swissted/pixies" class="pixies">pixies</a></li>
    <li><a href="./swissted/public-enemy" class="enemy">public enemy</a></li>
    <li><a href="./swissted/talking-heads" class="talking-heads">talking heads</a></li>
    <li><a href="./swissted/the-jesus-and-mary-chain" class="chain">the jesus and mary chain</a></li>
    <li><a href="./swissted/the-smiths" class="smiths">the smiths</a></li>
    <li><a href="./swissted/the-velvet-underground" class="underground">the velvet underground</a></li>
</ul>

You can also view the collection on [Codepen](https://codepen.io/collection/DrYaGV).
