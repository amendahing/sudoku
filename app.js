var game = [
    [2, 0, 1, 0],
    [0, 0, 2, 0],
    [3, 0, 4, 0],
    [4, 1, 0, 0]
];

function sudokuGen(arr){
    var output = "<table>"
    for (var x = 0; x < arr.length; x++) {
      // output += genRow(arr[x])
      output += "<tr>"
      for(var i = 0; i < arr[x].length; i++) {
          if (arr[x][i] == 0) {
              output+= `<td id='box-${x}-${i}'> <input type='text'> </td>`
          }
          else {
              output+= `<td id='box-${x}-${i}'>${arr[x][i]}</td>`
          }
      }
      output += "</tr>"
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


function currentGame(){
    var boardArr = game
    document.addEventListener('keydown', function(event){
        // console.log(event)
        var path = event.path[1].id
        var value = event.key
        var int = parseInt(value, 10)
        var x = path.split('')[4]
        var i = path.split('')[6]
        // console.log(`${x}, ${i}`)

        boardArr[x][i] = int;
        console.log(boardArr)
    })
    return boardArr
}

currentGame()
