function gridTemplate() {
    let grid = '<table>';

    for (let i = 0; i < 3; i++) {
        grid += '<tr>';

        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = 'O';
                grid += `<td onclick="gamePlay(${index})" class='o'>${symbol}</td>`;
            } else if (fields[index] === 'cross') {
                symbol = 'X';
                grid += `<td onclick="gamePlay(${index})" class='x'>${symbol}</td>`;
            } else {
                grid += `<td onclick="gamePlay(${index})" id="cell-${index}">${symbol}</td>`;
            }
        }
        grid += '</tr>'
    }
    grid += '</table>'

    return grid;
}