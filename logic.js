let gridItems = document.getElementsByClassName("square");
let currentTurn = "x";
let gameIsFinish = false;
                                                                                  

let boardArray = [
    "0","1","2",
    "3","4","5",
    "6","7","8"
]

for (const item of gridItems)
     {
         item.addEventListener("click", function() {

            if (gameIsFinish) {
            return; // to stop the game from  infinit continue
            }

        let value = item.getAttribute("value");
        let index = value - 1; 
            // avoide over-writting in box:
            if(boardArray[index] == "x" || boardArray[index] == "o") {
                return;
            }


        // filling the value of fornt side
        let squareContent =  document.querySelector(`.square[value="${value}"]`);
        squareContent.innerHTML = currentTurn
        
      

        //filling the value as backend 
        boardArray[index] = currentTurn;

            console.log(boardArray)
    

        evaluateBoard()
            if (currentTurn == "x")
                {
                    currentTurn= "o"
                } else {
                    currentTurn = "x"
                }
                document.getElementById("instruction").textContent = `${currentTurn}- turn`;
    })
    function evaluateBoard() {
        if(
            //rows condition:
            (boardArray[0] == boardArray[1]  && boardArray[1] == boardArray[2]) ||
            (boardArray[3] == boardArray[4]  && boardArray[4] == boardArray[5]) ||
            (boardArray[6] == boardArray[7]  && boardArray[7] == boardArray[8]) ||
            
            //columns condition:
            (boardArray[0] == boardArray[3]  && boardArray[3] == boardArray[6]) ||
            (boardArray[1] == boardArray[4]  && boardArray[4] == boardArray[7]) ||
            (boardArray[2] == boardArray[5]  && boardArray[5] == boardArray[8]) ||
            
            //diagonal condition:
            (boardArray[0] == boardArray[4]  && boardArray[4] == boardArray[8]) ||
            (boardArray[2] == boardArray[4]  && boardArray[4] == boardArray[6]) 
           
        ){

           var winner = currentTurn == "o"? "o":"x";
           gameIsFinish = true;
        //    alert(`${winner} is the winner!`);
        alertify.alert(`${winner} is the winner!`);
        }

        // in draw case:
        var isDraw= true;
        for(square of boardArray) {
            if(square != "x" && square != "o") {
                isDraw = false;
            }
        }
        if(isDraw) {
            gameIsFinish = true; //to stop the game from  infinit continue
            alert("game is Draw!")
        }

    }
}
document.getElementById("reset-btn").addEventListener("click", function(){
    reset()
})
function reset() {
    //resetiinf the ui part
    for (item of gridItems) {
        let value = item.getAttribute("value");
        let squareContent = document.querySelector(`.square[value="${value}"]`);
        squareContent.innerHTML = "";

        boardArray = [
            "0","1","2",
            "3","4","5",
            "6","7","8"
        ]
    }
    gameIsFinish = false;
    currentTurn = "x";
    document.getElementById("instruction".innerText = `${currentTurn}-turn`)
}