---
date:   2020-12-11
description: The difference between throttle and debounce
layout: layouts/post.njk
tags:
- post
title:  Throttle and Debounce
---

Whenever I need to use throttle or debounce I have to remind myself of the differences. Here are a few definitions as a reminder.

## Throttle

> Creates a throttled function that only invokes func at most once per every wait milliseconds.
<cite>[lodash throttle](https://lodash.com/docs/#throttle)</cite>

> Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds".
<cite>[CSS-TRICKS](https://css-tricks.com/the-difference-between-throttling-and-debouncing/#throttling-enforces-a-maximum-number-of-times-a-function-can-be-called-over-time-as-in-execute-this-function-at-most-once-every-100-milliseconds)</cite>

## Debounce

> Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
<cite>[lodash debounce](https://lodash.com/docs/#debounce)</cite>

> Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 100 milliseconds have passed without it being called".
<cite>[CSS-TRICKS](https://css-tricks.com/the-difference-between-throttling-and-debouncing/#debouncing-enforces-that-a-function-not-be-called-again-until-a-certain-amount-of-time-has-passed-without-it-being-called-as-in-execute-this-function-only-if-100-milliseconds-have-passed-witho)</cite>

## Demo

I have a [small demo here](https://svelte.dev/repl/bf1f010a9d664d4ebdbe0c2505f2bf26?version=3.31.0) showing the difference between throttle and debounce when applied to key presses.