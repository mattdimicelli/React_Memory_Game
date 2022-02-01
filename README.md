# Readme
# React Memory Card Game

## Overview

This game puts your memory to the test!  You are presented with cards, each with a random country's flag and the name of the country.  The cards get shuffled any time one of them is clicked.  If you click on any country-card more than once, your score is reset to zero.  The idea is to get the highest score possible!

### Challenge

The goal of this assignment from the Odin Project curriculum was to use either hooks or lifecycle methods, as well as lots of state.  I chose to you stateful functional components with hooks.  The complete design requirements can be found [here](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/memory-card).

### Screenshot

<p align="center">
  <img src="./screenshot_for_readme.png" alt="screenshot of library app" width="70%" height="70%">
</p>

### Links

- [Live site](https://mattdimicelli.github.io/React_Memory_Game/)
- [Repo](https://github.com/mattdimicelli/React_Memory_Game)

## My process

### Built with

- React via create-react-app
- React functional components with hooks
- JSX
- flagcdn.com API
- Responsive design via Flexbox

### What I learned

Since I learned to build class-based components and to work with lifecycle methods
before learning hooks, this was my first project made utilizing hooks.  I learned
that hooks allow you to avoid the use of `this` and enable you to organize the
code of the components into *isolated* resuable units (which means that related
logic is **not** spread out over different lifecycle methods, and similarly that 
*unrelated* logic does *not* need to be grouped together in the same lifecycle
method).  These are definitely advantages that the hooks have over the lifecycle
methods!  Also, I learned the two important "rules" of hooks: to only call hooks
at the top level of the function (not in loops, conditions, nor nested functions),
and to only call hooks from within React functions.  

Specifically, I learned about useState, useEffect, useReducer, useCallback, 
useMemo, and useRef.  I could have implemented useReducer in addition to useState,
however, to keep this first app elementary, I stuck to using only the useEffect and useState hooks.

Overall, after doing this project, I now see React stateful functional components
with hooks as more elegant than their class-based counterparts. 

