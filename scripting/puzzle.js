function puzzleScript() {
    const selectedOpac = "100%";
    const unselectedOpac = "85%";

    const imageSetA = symbols[currentPuzzle][1];
    const imageSetB = symbols[currentPuzzle][2];
    const imageSetC = symbols[currentPuzzle][3];

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    let image3 = document.createElement("img");

    image1.src = "../lion_a_images/" + imageSetA[symbolA];
    image2.src = "../lion_a_images/" + imageSetB[symbolB];
    image3.src = "../lion_a_images/" + imageSetC[symbolC];

    document.getElementById("symbol_one").appendChild(image1);
    document.getElementById("symbol_two").appendChild(image2);
    document.getElementById("symbol_three").appendChild(image3);
}

puzzleScript();