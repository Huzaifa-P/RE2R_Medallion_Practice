let currentPuzzle = localStorage.getItem('currentPuzzle') || ""; // to be set to "lionA", "lionB", "maidenA", "maidenB", "unicornA", or "unicornB"

let pbLionA = localStorage.getItem('lionAPB') || "0s";
let pbLionB = localStorage.getItem('lionBPB') || "0s";
let pbMaidenA = localStorage.getItem('maidenAPB') || "0s";
let pbMaidenB = localStorage.getItem('maidenBPB') || "0s";
let pbUnicornA = localStorage.getItem('unicornAPB') || "0s";
let pbUnicornB = localStorage.getItem('unicornBPB') || "0s";

let pbNames = {
    "lionA": 'lionAPB',
    "lionB": 'lionBPB',
    "maidenA": 'maidenAPB',
    "maidenB": 'maidenBPB',
    "unicornA": 'unicornAPB',
    "unicornB": 'unicornBPB'
}

let pbValues = {
    "lionA": pbLionA,
    "lionB": pbLionB,
    "maidenA": pbMaidenA,
    "maidenB": pbMaidenB,
    "unicornA": pbUnicornA,
    "unicornB": pbUnicornB
}

let personalBest = localStorage.getItem(pbNames[currentPuzzle]) || "0s";

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

let puzzleSolutionDisplay = {
    "lionA": ["Lion", "Leaf", "Bird"],
    "lionB": ["Crown", "Fire", "Bird"],
    "maidenA": ["Woman", "Bow", "Snake"],
    "maidenB": ["Ram", "Harp", "Bird"],
    "unicornA": ["Fish", "Scorpion", "Pot"],
    "unicornB": ["Twin", "Scale", "Worm"]
}
let randomizeStart = () => Math.floor(Math.random() * 5);

let symbolA = randomizeStart(); // randomised 0-4
let symbolB = randomizeStart(); // randomised 0-4
let symbolC = randomizeStart(); // randomised 0-4