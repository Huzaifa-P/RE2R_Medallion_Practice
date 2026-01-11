

let currentPuzzle = localStorage.getItem('currentPuzzle') || ""; // to be set to "lionA", "lionB", "maidenA", "maidenB", "unicornA", or "unicornB"

const solution = [5, 5, 5]; // target solution for all medallion puzzles

const symbols = {
    "lionA": {
        1: ["pigeon.png", "pot.png", "head.png", "harp.png", "fish.png", "lion.png"],
        2: ["snake.png", "bird.png", "bull.png", "fish.png", "bow.png", "leaf.png"],
        3: ["bull.png", "fish.png", "bow.png", "leaf.png", "snake.png", "bird.png"]
    },
    "lionB": {
        1: [],
        2: [],
        3: []
    },
    "maidenA": {
        1: [],
        2: [],
        3: []
    },
    "maidenB": {
        1: [],
        2: [],
        3: []
    },
    "unicornA": {
        1: [],
        2: [],
        3: [],
    },
    "unicornB": {
        1: [], 
        2: [],
        3: []
    }
}

let randomizeStart = () => Math.floor(Math.random() * 5);

const areArraysEqual = (arrA, arrB) => {
    const isLengthEqual = arrA.length === arrB.length
    if (!isLengthEqual) {return false;}

    let isEqual = true;
    for (let i = 0; i < arrA.length; i++) {
       if (arrA[i] !== arrB[i]) {
          return false;
       }
    }
    return isEqual;
}

let symbolA = randomizeStart(); // randomised 0-4
let symbolB = randomizeStart(); // randomised 0-4
let symbolC = randomizeStart(); // randomised 0-4