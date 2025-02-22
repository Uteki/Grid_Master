function gridTemplate() {
    let grid = '<table>';

    for (let i = 0; i < 3; i++) {
        grid += '<tr>';

        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = 'o';
                grid += `<td class='o'>${symbol}</td>`;
            } else if (fields[index] === 'cross') {
                symbol = 'x';
                grid += `<td class='x'>${symbol}</td>`;
            } else {
                symbol = '_';
                grid += `<td>${symbol}</td>`;
            }
        }
        grid += '</tr>'
    }
    grid += '</table>'

    return grid;
}