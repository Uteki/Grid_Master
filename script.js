function init() {
    renderGame()
}

function renderGame() {
    document.getElementById('game-box').innerHTML = gridTemplate();
}