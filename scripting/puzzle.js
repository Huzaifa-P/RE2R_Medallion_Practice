const selectedOpac = `filter: brightness(100%)`;
const unselectedOpac = `filter: brightness(75%)`;

const imageSetA = symbols[currentPuzzle][1];
const imageSetB = symbols[currentPuzzle][2];
const imageSetC = symbols[currentPuzzle][3];

const solution = [5, 5, 5]; // target solution for all medallion puzzles

let image1 = document.createElement("img");
let image2 = document.createElement("img");
let image3 = document.createElement("img");

let selectedSection = 1; // 1-3

let personalBest = "0s";

let lastWasdTime = 0;
const WASD_COOLDOWN = 160; // milliseconds

function changeSymbol(direction) {
    let currentImage;
    let currentArray;
    let currentID;
    let currentSymbol;

    if (selectedSection == 1) {
        currentImage = image1;
        currentArray = imageSetA;
        currentID = "symbol_one"
        currentSymbol = symbolA;
    }
    if (selectedSection == 2) {
        currentImage = image2;
        currentArray = imageSetB;
        currentID = "symbol_two"
        currentSymbol = symbolB;
    }
    if (selectedSection == 3) {
        currentImage = image3;
        currentArray = imageSetC;
        currentID = "symbol_three"
        currentSymbol = symbolC;
    }

    if (currentSymbol == 5 && direction == 1) currentSymbol = 0
    else if (currentSymbol == 0 && direction == -1) currentSymbol = 5
    else currentSymbol += direction;

    currentImage.src = "../puzzle_images/" + currentArray[currentSymbol];
    document.getElementById(currentID).removeAttribute("img")
    document.getElementById(currentID).appendChild(currentImage);

    if (selectedSection == 1) symbolA = currentSymbol
    if (selectedSection == 2) symbolB = currentSymbol
    if (selectedSection == 3) symbolC = currentSymbol
}

function changeSection(direction) {
    if (selectedSection == 1 && direction == -1) selectedSection = 3;
    else if (selectedSection == 3 && direction == 1) selectedSection = 1;
    else selectedSection += direction;

    if (selectedSection == 1) {
        image1.style = selectedOpac
        image2.style = unselectedOpac
        image3.style = unselectedOpac
    }
    if (selectedSection == 2) {
        image1.style = unselectedOpac
        image2.style = selectedOpac
        image3.style = unselectedOpac
    }
    if (selectedSection == 3) {
        image1.style = unselectedOpac
        image2.style = unselectedOpac
        image3.style = selectedOpac
    }
}

function puzzleScript() {
    image1.src = "../puzzle_images/" + imageSetA[symbolA];

    image2.src = "../puzzle_images/" + imageSetB[symbolB];
    image2.style = unselectedOpac;

    image3.src = "../puzzle_images/" + imageSetC[symbolC];
    image3.style = unselectedOpac;

    document.getElementById("symbol_one").appendChild(image1);
    document.getElementById("symbol_two").appendChild(image2);
    document.getElementById("symbol_three").appendChild(image3);
}

function resetPuzzle() {
    symbolA = randomizeStart(); // randomised 0-4
    symbolB = randomizeStart(); // randomised 0-4
    symbolC = randomizeStart(); // randomised 0-4
    selectedSection = 1;
    image1.style = selectedOpac;
    document.getElementById("solution").innerHTML = ""
    resetTimer();
    puzzleScript();
}

function completePuzzle() {
    if (areArraysEqual([symbolA, symbolB, symbolC], solution)) {
        document.getElementById("solution").innerHTML = "CORRECT! Press R to reset"
        document.getElementById("pb").innerHTML = "PB in session: " + checkBestTime(document.getElementById("timer").innerHTML, personalBest)
        document.getElementById("solution").style = "color: green;"
        stopTimer();
    }
    else {
        document.getElementById("solution").innerHTML = "INCORRECT";
        document.getElementById("solution").style = "color: red;"
    }
    
}

document.addEventListener("keydown", event => {
    const key = event.key;
    const keyLower = key.length === 1 ? key.toLowerCase() : key;
    const now = performance.now();

    // Prevent rapid repeated use of W/A/S/D: enforce cooldown
    if (keyLower === "w"|| keyLower === "s") {
        if (now - lastWasdTime < WASD_COOLDOWN) return;
        lastWasdTime = now;
    }

    if (keyLower == "w" || key == "ArrowUp") changeSymbol(1);
    if (keyLower == "s" || key == "ArrowDown") changeSymbol(-1);
    if (keyLower == "d" || key == "ArrowRight") changeSection(1);
    if (keyLower == "a" || key == "ArrowLeft") changeSection(-1);
    if (keyLower == "r") resetPuzzle();
    if ((key == " " || keyLower == "e" || keyLower == "q" || keyLower == "f") && running) completePuzzle();
})

puzzleScript();
startTimer();