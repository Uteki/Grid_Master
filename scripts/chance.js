function chance() {
    console.log(onPlayer);

    if (checkWinner()) {
        checkWinner().forEach((element) => {
            document.getElementById("cell-" + element)
                .style.background = "#000000";
        });

        alert(`${onPlayer} wins!`);
    }
}

function checkWinner() {
    return combinations.find(combi =>
        combi.every(index => fields[index] === onPlayer)
    );
}