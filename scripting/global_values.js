// Global Values for RE2R Medallion Practice
import {randomizeStart} from ('./functions.js')

let symbolA = randomizeStart(); // randomised 0-4
let symbolB = randomizeStart(); // randomised 0-4
let symbolC = randomizeStart(); // randomised 0-4

const solution = [5, 5, 5]; // target solution for all medallion puzzles

export {symbolA, symbolB, symbolC, solution};