function setCurrentPuzzle(element) {
    currentPuzzle = element.id;
    localStorage.setItem('currentPuzzle', element.id);
}