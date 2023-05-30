function generateMatrix(len_1, len_2, min, max) {
    let matrix = new Array(len_1);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(len_2);
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    return matrix;
}

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

function printMatrix() {
    let len_1 = Number(document.getElementById('size_1').value);
    let len_2 = Number(document.getElementById('size_2').value);
    let min = Number(document.getElementById('min').value);
    let max = Number(document.getElementById('max').value);
    let matrix = generateMatrix(len_1, len_2, min, max);

    let tbMatrix = "";
    for (let i = 0; i < matrix.length; i++) {
        tbMatrix += '<tr>';
        for (let j = 0; j < matrix[i].length; j++) {
            tbMatrix += `<td class='${isEven(matrix[i][j]) ? 'isEven' : ''}'>${matrix[i][j]}</td>`;
        }
        tbMatrix += '</tr>';
    }

    document.getElementById('matrix').innerHTML = tbMatrix;
}