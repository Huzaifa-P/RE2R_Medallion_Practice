let currentPuzzle = localStorage.getItem('currentPuzzle') || ""; // to be set to "lionA", "lionB", "maidenA", "maidenB", "unicornA", or "unicornB"

let pbs = {
    "lionA": localStorage.getItem('lionAPB') || "0s",
    "lionB": localStorage.getItem('lionBPB') || "0s",
    "maidenA": localStorage.getItem('maidenAPB') || "0s",
    "maidenB": localStorage.getItem('maidenBPB') || "0s",
    "unicornA": localStorage.getItem('unicornAPB') || "0s",
    "unicornB": localStorage.getItem('unicornBPB') || "0s"
}

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
        1: ["harp.png", "fish.png", "lion.png", "pigeon.png", "pot.png", "head.png"],
        2: ["leaf.png", "snake.png", "bird.png", "bull.png", "fish.png", "bow.png"],
        3: ["bird.png", "bull.png", "fish.png", "bow.png", "leaf.png", "snake.png"]
    },
    "maidenB": {
        1: [],
        2: [],
        3: []
    },
    "unicornA": {
        1: ["bow.png", "leaf.png", "snake.png", "bird.png", "bull.png", "fish.png"],
        2: ["scale.png", "shield.png", "dove.png", "harp.png", "crown.png", "scorpion.png"],
        3: ["head.png", "harp.png", "fish.png", "lion.png", "pigeon.png", "pot.png"],
    },
    "unicornB": {
        1: [], 
        2: [],
        3: []
    }
}

let randomizeStart = () => Math.floor(Math.random() * 5);

let symbolA = randomizeStart(); // randomised 0-4
let symbolB = randomizeStart(); // randomised 0-4
let symbolC = randomizeStart(); // randomised 0-4