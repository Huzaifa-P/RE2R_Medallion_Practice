// ===== PUZZLE SELECTION =====
/**
 * The currently selected puzzle (e.g., "lionA", "maidenB", "unicornA")
 * Retrieved from localStorage to persist across page navigation
 */
let currentPuzzle = localStorage.getItem('currentPuzzle') || ""; // to be set to "lionA", "lionB", "maidenA", "maidenB", "unicornA", or "unicornB"

// ===== PERSONAL BEST TIMES =====
/**
 * Stores the personal best times for each puzzle medallion
 * Values are retrieved from localStorage with a default of "0s" if not yet set
 */
let pbLionA = localStorage.getItem('lionAPB') || "0s";
let pbLionB = localStorage.getItem('lionBPB') || "0s";
let pbMaidenA = localStorage.getItem('maidenAPB') || "0s";
let pbMaidenB = localStorage.getItem('maidenBPB') || "0s";
let pbUnicornA = localStorage.getItem('unicornAPB') || "0s";
let pbUnicornB = localStorage.getItem('unicornBPB') || "0s";

/**
 * Maps puzzle IDs to their localStorage keys for personal best times
 * Used when saving a new personal best
 */
let pbNames = {
    "lionA": 'lionAPB',
    "lionB": 'lionBPB',
    "maidenA": 'maidenAPB',
    "maidenB": 'maidenBPB',
    "unicornA": 'unicornAPB',
    "unicornB": 'unicornBPB'
}

/**
 * Maps puzzle IDs to their corresponding personal best time values
 * Used to display the PB when a puzzle page loads
 */
let pbValues = {
    "lionA": pbLionA,
    "lionB": pbLionB,
    "maidenA": pbMaidenA,
    "maidenB": pbMaidenB,
    "unicornA": pbUnicornA,
    "unicornB": pbUnicornB
}

// ===== PUZZLE SYMBOLS =====
/**
 * Object containing symbol sequences for each puzzle and their three sections
 * Each section (1, 2, 3) contains an array of image filenames in rotation order
 * 
 * Structure: { "puzzleID": { 1: [images], 2: [images], 3: [images] } }
 */
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

// ===== PUZZLE INITIALIZATION =====
/**
 * Generates a random starting symbol index (0-4) for each section when a puzzle resets
 * Ensures puzzles start in different random states each time
 */
let randomizeStart = () => Math.floor(Math.random() * 5);

let symbolA = randomizeStart(); // randomised 0-4
let symbolB = randomizeStart(); // randomised 0-4
let symbolC = randomizeStart(); // randomised 0-4