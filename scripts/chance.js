function chance() {
    if (checkWinner()) {
        checkWinner().forEach((element) => {
            document.getElementById("cell-" + element).classList.add("line");
        });

        checkRotationXY();
        checkRotationZ();

        document.querySelectorAll("td").forEach((element) => {
            element.onclick = null;
        })
        document.querySelector("p").innerText = `${onPlayer} wins!`;
    }
}

function checkRotationXY() {
    if (checkWinner() === combinations[3] || checkWinner() === combinations[4] || checkWinner() === combinations[5]) {
        checkWinner().forEach((element) => {
            document.getElementById("cell-" + element).classList.add("vertical");
        });
    }
}

function checkRotationZ() {
    if (checkWinner() === combinations[6]) {
        checkWinner().forEach((element) => {
            document.getElementById("cell-" + element).classList.add("left-leaning");
        });
    } else if (checkWinner() === combinations[7]) {
        checkWinner().forEach((element) => {
            document.getElementById("cell-" + element).classList.add("right-leaning");
        });
    }
}

function checkWinner() {
    return combinations.find(combi =>
        combi.every(index => fields[index] === onPlayer)
    );
}