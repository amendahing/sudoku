var game = [
    [2, 0, 1, 0],
    [0, 0, 2, 0],
    [3, 0, 4, 0],
    [4, 1, 0, 0]
];

function sudokuGen(arr){
    var output = "<table>";
    for (var x = 0; x < arr.length; x++) {
      output += genRow(arr[x])
    }
    output += "</table>"
    return output;
}

function genRow(innerArr) {
    var output = "<tr>"
    for(var i = 0; i < innerArr.length; i++) {
        if (innerArr[i] == 0) {
            output+= `<td> <input type='text'> </td>`
        }
        else {
            output+= `<td>${innerArr[i]}</td>`
        }
    }
    output += "</tr>"
    return output;
}

var board = sudokuGen(game);

document.getElementById('generateGame').innerHTML += board;


var currentGame = [

]
