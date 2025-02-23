let onPlayer = 'cross';
let offPlayer = 'circle';

function init() {
    renderGame()
}

function renderGame() {
    document.getElementById('game-box').innerHTML = gridTemplate();
}

function restartGame() {
    fields = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    document.querySelector('p').innerText = 'Do your gridding best!';

    renderGame();
}

function gamePlay(index) {
    if (!fields[index]) {
        fields[index] = onPlayer;
        let test = document.getElementById(`cell-${index}`);

        (onPlayer === "cross")
            ? (() => { test.innerHTML = "X"; test.classList.add('x'); chance()})()
            : (() => { test.innerHTML = "O"; test.classList.add('o'); chance()})();

        let temp = onPlayer;
        onPlayer = offPlayer;
        offPlayer = temp;
    }
}