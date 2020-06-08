---
date: 2020-06-07
description: Discovering Montague Projects art, design and illustration
layout: layouts/post.njk
tags:
  - post
  - css
  - design
title: Discovering Montague Projects
---

I found these amazing [designs by Julian Montague](http://www.montagueprojects.com/) so started doing a few [reproductions in html and css](/repro/#montague-projects). I particularly like the [1970's car series](http://www.montagueprojects.com/#/print-series-1970s-cars/).

<style>
.flip-h {
    transform: scaleX(-1);
}

.wrapper {
    overflow: auto;
}

.land-rover {

    --width: 560px;
    --black: #010101;
    --white: #fff;
    --bumper-width: 460px;
    --bumper-height: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;
    width: var(--width);
}

.land-rover__windscreen,
.land-rover__vents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 12px;
    width: 380px;
    gap: 12px;
}

.land-rover__windscreen > div {
    height: 0;
    border-bottom: 80px solid var(--black);
}

.land-rover__windscreen > div:first-child {
    border-left: 10px solid transparent;
}

.land-rover__windscreen > div:last-child {
    border-right: 10px solid transparent;
}

.land-rover__vents > div {
    height: 24px;
    border: 2px solid var(--black);
    border-radius: 8px;
}

.land-rover__wing-mirrors {
    display: flex;
    justify-content: space-between;
    width: 460px;
    margin-top: -12px;
}

.land-rover__wing-mirror {
    position: relative;
}

.land-rover__mirror {
    position: absolute;
    top: -10px;
    left: 32px;
    width: 34px;
}

.land-rover__mirror-top {
    height: 16px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: var(--black);
}

.land-rover__mirror-body {
    height: 18px;
    background-color: var(--black);
}

.land-rover__mirror-bottom {
    height: 16px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background-color: var(--black);
}

.land-rover__mirror-arm {
    --square: 48px;
    width: var(--square);
    height: var(--square);;
    stroke-width: 4px;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke: var(--black);
  }

.land-rover__nose {
    display: grid;
    grid-template-columns: 100px 220px 100px;
    gap: 4px;
    align-items: center;
    width: 428px;
    margin-top: -14px;
}

.land-rover__grill {
    width: 220px;
}

.land-rover__grill__head {
    height: 0;
    border-top: 12px solid var(--black);
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
}

.land-rover__grill__body {
    height: 118px;
    background-color: var(--black);
}

.land-rover__lights {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    padding: 4px;

    margin-top: 24px;
    width: 100px;
    height: 84px;
    border: 2px solid var(--black);
    border-radius: 8px;
}

.land-rover__headlight {
    align-self: center;
    grid-row: span 2;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 62px;
    border-radius: 12px;
    background-color: var(--black);
}

.land-rover__headlight > div {
    --square: 48px;
    width: var(--square);
    height: var(--square);
    border-radius: var(--square);
    background-color: var(--white);
}

.land-rover__side-light {
    --square: 20px;
    width: var(--square);
    height: var(--square);
    border-radius: var(--square);
    background-color: var(--white);
    border: 2px solid var(--black);
}

.land-rover__side-light__two {
    align-self: center;
}

.land-rover__bumper {
    margin-top: 18px;
    width: var(--bumper-width);
    height: var(--bumper-height);
    border-radius: 6px;
    background-color: var(--black);
}

</style>

<div class="wrapper">
<div class="poster land-rover">
    <div class="land-rover__windscreen">
        <div></div>
        <div></div>
    </div>
    <div class="land-rover__vents">
        <div></div>
        <div></div>
    </div>
    <div class="land-rover__wing-mirrors">
        <div class="land-rover__wing-mirror flip-h">
            <div class="land-rover__mirror">
                <div class="land-rover__mirror-top"></div>
                <div class="land-rover__mirror-body"></div>
                <div class="land-rover__mirror-bottom"></div>
            </div>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="land-rover__mirror-arm">
                <path d="M 20 90 L 20 60 L 80 40" fill="transparent" />
            </svg>
        </div>
        <div class="land-rover__wing-mirror">
            <div class="land-rover__mirror">
                <div class="land-rover__mirror-top"></div>
                <div class="land-rover__mirror-body"></div>
                <div class="land-rover__mirror-bottom"></div>
            </div>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="land-rover__mirror-arm">
                <path d="M 20 90 L 20 60 L 80 40" fill="transparent" />
            </svg>
        </div>
    </div>
    <div class="land-rover__nose">
        <div class="land-rover__lights">
            <div class="land-rover__side-light"></div>
            <div class="land-rover__headlight">
                <div></div>
            </div>
            <div class="land-rover__side-light land-rover__side-light__two"></div>
        </div>
        <div class="land-rover__grill">
            <div class="land-rover__grill__head"></div>
            <div class="land-rover__grill__body"></div>
        </div>
        <div class="land-rover__lights flip-h">
            <div class="land-rover__side-light"></div>
            <div class="land-rover__headlight">
                <div></div>
            </div>
            <div class="land-rover__side-light side-light__two"></div>
        </div>
    </div>
    <div class="land-rover__bumper"></div>
</div>
</div>

## Color Palette


