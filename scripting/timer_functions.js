let startTime = performance.now();
let intervalId;
let running = true;

let personalBest = "0s";

function startTimer() {
    startTime = performance.now();
    running = true;

    intervalId = setInterval(() => {
      const now = performance.now();
      const elapsedSeconds = (now - startTime) / 1000;
      document.getElementById("timer").textContent =
        `${elapsedSeconds.toFixed(3)}s`;
    }, 1);
}

function stopTimer() {
    clearInterval(intervalId);
    running = false;
}

function resetTimer() {
    stopTimer();
    document.getElementById("timer").textContent = "0.000s";
    startTimer();
}

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

function checkBestTime(last, pb) {
    const lastVal = parseFloat(String(last).slice(0, -1));
    const pbVal = parseFloat(String(pb).slice(0, -1));

    // If there's no valid personal best yet, set it to last
    if (isNaN(pbVal) || pbVal === 0) {
        personalBest = last;
        return last;
    }

    // Update only when the new time is strictly better (smaller)
    if (isNaN(lastVal) || lastVal >= pbVal) {
        return pb;
    } else {
        personalBest = last;
        return last;
    }
}

function resetPersonalBest() {
    personalBest = "0s";
    localStorage.setItem(pbNames[currentPuzzle], "0s");
    document.getElementById("pb").innerHTML = "PB in session: " + personalBest;
}