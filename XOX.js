let griditems = document.getElementsByClassName("square");
let currentTurn = "X";
let boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
let gameIsFinished = false;

for (const item of griditems) {
  item.addEventListener("click", () => {
    if(gameIsFinished){
      return
    }
    
    let value = item.getAttribute("value");
    
    let index = value - 1;
    if(boardArray[index] == "X" || boardArray[index] =="O"){
      return
    }

    // Filling Value Visually
    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = currentTurn;

    // Filling Value logicaly

    boardArray[index] = currentTurn;
    evaluateBoard();
    
    if (currentTurn == "X") {
      currentTurn = "O";
    } else {
      currentTurn = "X";
    }
    
    document.getElementById("turns").innerHTML = `${currentTurn} Turns`
  });

  function evaluateBoard() {
    if (
      // Rows
      (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) ||
      (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
      (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||
      // Coloumbs
      (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
      (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
      (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||
      // Diagonally
      (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
      (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])
    ) {
      var winner = currentTurn == "O" ? "O" : "X";
      gameIsFinished = true
      alertify.alert(`${winner} Won!`)
    }

    var isDraw = true
    for(square of boardArray)
    {
      if(square != "X" && square != "O")
      {
        isDraw = false
      }
    }

    if(isDraw){
      gameIsFinished = true
      // alertify.alert("Draaaaaw")
    }
  }
}

document.getElementById("reset-Btn").addEventListener("click" , ()=>{
  reset()
})

function reset(){
  for(item of griditems){
    let value = item.getAttribute("value");
    let squareContent = document.querySelector(`.square[value="${value}"]`);
    squareContent.innerHTML = " "

    boardArray = [
      "0" , "1" , "2",
      "3" , "4" , "5",
      "6" , "7" , "8"
    ]
  }
  gameIsFinished = false
  currentTurn = "X"
  document.getElementById("turns").innerHTML = `${currentTurn} Turns`
}