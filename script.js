let players = {
  player1: {
    sign: "naughts",
    turn: false,
  },

  player2: {
    sign: "crosses",
    turn: false,
  },
};

// const winningconditons=[
//  [0,1,2],
//  [3,4,5],
//  [6,7,8],
//  [0,3,6],
//  [1,4,7],
//  [2,5,8],
//  [0,4,8],
//  [2,4,6]
// ]

let startButton = document.getElementById("start-game");
let player1Name = document.getElementById("player1");
let player2Name = document.getElementById("player2");
let player1Info = document.getElementById("player1-info");
let player2Info = document.getElementById("player2-info");
const winningDiv = document.getElementById("bottom-container");

let player1Plays = [];
let player2Plays = [];

startButton.addEventListener("click", (event) => {
  if (players.player1.turn == false && players.player2.turn == false) {
    players.player1.turn = true;
    player1Name.classList.add("turn");
    console.log(players);
    startButton.remove();
  } else {
    alert("a game is already in progress");
  }
});

const blocks = document.getElementsByClassName("block");
for (let block of blocks) {
  block.addEventListener("click", blockSelected);
}

let counter=0

function blockSelected(event) {
  console.log(event.target);
  const divTarget = event.target;
  if (
    players.player1.turn &&
    divTarget.classList.contains("oselected") == false &&
    divTarget.classList.contains("xselected") == false
  ) {
    console.log("succesful");
    divTarget.classList.add("oselected");
    players.player1.turn = false;
    players.player2.turn = true;
    player1Name.classList.remove("turn");
    player2Name.classList.add("turn");
    console.log("succesful");
    console.log(event.target);
    let newNumer = parseInt(divTarget.getAttribute("data-index"));
    player1Plays.push(newNumer);
    console.log(player1Plays.length)
    console.log(player1Plays);
    counter++
    winning();
  } else if (
    players.player2.turn &&
    divTarget.classList.contains("oselected") == false &&
    divTarget.classList.contains("xselected") == false
  ) {
    divTarget.classList.add("xselected");
    players.player2.turn = false;
    players.player1.turn = true;
    player2Name.classList.remove("turn");
    player1Name.classList.add("turn");
    console.log("succesful");
    console.log(event.target);
    let newNumber2 = parseInt(divTarget.getAttribute("data-index"));
    player2Plays.push(newNumber2);
    console.log(player2Plays.length)
    console.log(player2Plays);
    winning();
  }
}

function winning() {
  const winningconditons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningconditons.length; i++){
    if (
      player1Plays.includes(winningconditons[i][0]) &&
      player1Plays.includes(winningconditons[i][1]) &&
      player1Plays.includes(winningconditons[i][2])
    ) {
      console.log("player 1 wins");
      let winner = document.createElement("p");
      console.log(winningDiv);
      winner.innerText = "Player 1 wins";
      winner.classList.add("winner");
      console.log(winner);
      winningDiv.append(winner);
      let playAgainButton = document.createElement("button");
      playAgainButton.innerText = "Play again";
      playAgainButton.classList.add("play-again");
      winningDiv.append(playAgainButton);
      //playAgainButton.setAttribute("id", "playAgain");
      playAgainButton.addEventListener("click",playAgain);
      const blocks = document.getElementsByClassName("block");
      for (let block of blocks) {
        block.removeEventListener("click", blockSelected);
      }

      break;
    } else if (
      player2Plays.includes(winningconditons[i][0]) &&
      player2Plays.includes(winningconditons[i][1]) &&
      player2Plays.includes(winningconditons[i][2])
    ) {
      console.log("player 2 wins");
      let winner2 = document.createElement("p");
      console.log(winningDiv);
      winner2.innerText = "Player 2 wins";
      winner2.classList.add("winner");
      console.log(winner2);
      winningDiv.append(winner2);
      playAgainButton2 = document.createElement("button");
      playAgainButton2.innerText = "Play again";
      playAgainButton2.classList.add("play-again");
      winningDiv.append(playAgainButton2);
      playAgainButton2.addEventListener("click",playAgain);
      //playAgainButton2.setAttribute("id", "playAgain");
      const blocks = document.getElementsByClassName("block");
      for (let block of blocks) {
        block.removeEventListener("click", blockSelected);
      }
      break;
    }else if( player1Plays.length + player2Plays.length===9){
      console.log("draw");
      console.log("player 1: " +player1Plays.length); 
      console.log("player 2: " +player2Plays.length);
      let draw = document.createElement("p");
      console.log(winningDiv);
      draw.innerText = "draw";
      draw.classList.add("winner");
      winningDiv.append(draw);
      playAgainButton2 = document.createElement("button");
      playAgainButton2.innerText = "Play again";
      playAgainButton2.classList.add("play-again");
      winningDiv.append(playAgainButton2);
      playAgainButton2.addEventListener("click",playAgain);
      //playAgainButton2.setAttribute("id", "playAgain");
      const blocks = document.getElementsByClassName("block");
      break;


    }
  }
}


function playAgain(){
  // console.log(event.target)
  // let buttonPlay=event.target
  // buttonPlay.remove();
  // let winningPlayer=buttonPlay.sib
  // console.log(winningPlayer);
 document.getElementsByClassName("winner")[0].remove();
 document.getElementsByClassName("play-again")[0].remove();

  const blocks = document.getElementsByClassName("block");
for (let block of blocks) {
  block.addEventListener("click", blockSelected);
  player1Plays = [];
  player2Plays = [];
  players.player1.turn=false;
  players.player2.turn=true;
  if(block.classList.contains("oselected")){
    block.classList.remove("oselected")
  }else if(block.classList.contains("xselected")){
    block.classList.remove("xselected")
  }
}

}

