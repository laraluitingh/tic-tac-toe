//object representing the two players
let players = {
  player1: {
    userName: "Player 1",
    sign: "naughts",
    turn: false,
  },

  player2: {
    userName: "Player 2",
    sign: "crosses",
    turn: false,
  },
};


let startButton = document.getElementById("start-game");

//username of player1
let player1Name = document.getElementById("player1");
//username of player2
let player2Name = document.getElementById("player2");

//all of player one's info their score, their name, their div
let player1Info = document.getElementById("player1-info");
let player2Info = document.getElementById("player2-info");
const winningDiv = document.getElementById("bottom-container");
let player1Score = 0;
let player2Score = 0;
let player1ScorePage = document.getElementById("player-1-score");
let player2ScorePage = document.getElementById("player-2-score");
let plays = [];
let winnerRound = false;

let audioContext = new AudioContext();

let player1Plays = [];
let player2Plays = [];

startButton.addEventListener("click", (event) => {
  if (players.player1.turn == false && players.player2.turn == false) {
    players.player1.turn = true;
    player1Name.classList.add("turn");
    console.log(players);
    startButton.remove();
    document.getElementById("edit").remove();
  } else {
    alert("a game is already in progress");
  }
});

const blocks = document.getElementsByClassName("block");
for (let block of blocks) {
  block.addEventListener("click", blockSelected);
}

let counter = 0;

function blockSelected(event) {
  console.log(event.target);
  const divTarget = event.target;
  if (
    players.player1.turn &&
    divTarget.classList.contains("oselected") == false &&
    divTarget.classList.contains("xselected") == false
  ) {
    console.log("succesful");
    if (players.player1.sign === "naughts") {
      divTarget.classList.add("oselected");
    } else {
      divTarget.classList.add("xselected");
    }
    players.player1.turn = false;
    players.player2.turn = true;
    player1Name.classList.remove("turn");
    player2Name.classList.add("turn");
    console.log("succesful");
    console.log(event.target);
    let newNumer = parseInt(divTarget.getAttribute("data-index"));
    player1Plays.push(newNumer);
    console.log(player1Plays.length);
    console.log(player1Plays);
    counter++;
    plays.push("player1");
    winning();
  } else if (
    players.player2.turn &&
    divTarget.classList.contains("oselected") == false &&
    divTarget.classList.contains("xselected") == false
  ) {
    if (players.player2.sign === "crosses") {
      divTarget.classList.add("xselected");
    } else {
      divTarget.classList.add("oselected");
    }
    players.player2.turn = false;
    players.player1.turn = true;
    player2Name.classList.remove("turn");
    player1Name.classList.add("turn");
    console.log("succesful");
    console.log(event.target);
    let newNumber2 = parseInt(divTarget.getAttribute("data-index"));
    player2Plays.push(newNumber2);
    console.log(player2Plays.length);
    console.log(player2Plays);
    plays.push("player2");
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
  for (let i = 0; i < winningconditons.length; i++) {
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
      player1Score++;
      player1ScorePage.innerText = player1Score;
      playAgainButton.addEventListener("click", playAgain);
      const blocks = document.getElementsByClassName("block");
      for (let block of blocks) {
        block.removeEventListener("click", blockSelected);
      }

      if (player1Name.classList.contains("turn")) {
        player1Name.classList.remove("turn");
      } else if (player2Name.classList.contains("turn")) {
        player2Name.classList.remove("turn");
      }

      players.player1.turn = true;
      players.player2.turn = false;
      plays = [];

      winnerRound = true;

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
      playAgainButton2.addEventListener("click", playAgain);
      //playAgainButton2.setAttribute("id", "playAgain");

      player2Score++;
      console.log(player2Score);
      player2ScorePage.innerText = player2Score;
      const blocks = document.getElementsByClassName("block");
      for (let block of blocks) {
        block.removeEventListener("click", blockSelected);
      }

      if (player1Name.classList.contains("turn")) {
        player1Name.classList.remove("turn");
      } else if (player2Name.classList.contains("turn")) {
        player2Name.classList.remove("turn");
      }

      players.player1.turn = false;
      players.player2.turn = true;
      plays = [];
      winnerRound = true;
      break;
    }
  }

  if (
    player1Plays.length + player2Plays.length === 9 &&
    winnerRound === false
  ) {
    console.log("draw");
    let draw = document.createElement("p");
    console.log(winningDiv);
    draw.innerText = "draw";
    draw.classList.add("winner");
    winningDiv.append(draw);
    playAgainButton2 = document.createElement("button");
    playAgainButton2.innerText = "Play again";
    playAgainButton2.classList.add("play-again");
    winningDiv.append(playAgainButton2);
    playAgainButton2.addEventListener("click", playAgain);
    //playAgainButton2.setAttribute("id", "playAgain");
    const blocks = document.getElementsByClassName("block");
    if (player1Name.classList.contains("turn")) {
      player1Name.classList.remove("turn");
    } else if (player2Name.classList.contains("turn")) {
      player2Name.classList.remove("turn");
    }

    console.log(plays);

    if (plays[0] === "player1") {
      players.player1.turn = true;
      players.player2.true = false;
      plays = [];
    } else if (plays[0] === "player2") {
      players.player2.turn = true;
      players.player1.turn = false;
      plays = [];
    }
    console.log(plays);
  }
}

function playAgain() {
  // console.log(event.target)
  // let buttonPlay=event.target
  // buttonPlay.remove();
  // let winningPlayer=buttonPlay.sib
  // console.log(winningPlayer);
  winnerRound = false;
  document.getElementsByClassName("winner")[0].remove();
  document.getElementsByClassName("play-again")[0].remove();

  if (players.player1.turn) {
    player1Name.classList.add("turn");
  } else if (players.player2.turn) {
    player2Name.classList.add("turn");
  }

  const blocks = document.getElementsByClassName("block");
  for (let block of blocks) {
    block.addEventListener("click", blockSelected);
    player1Plays = [];
    player2Plays = [];
    if (block.classList.contains("oselected")) {
      block.classList.remove("oselected");
    } else if (block.classList.contains("xselected")) {
      block.classList.remove("xselected");
    }
  }
}

document.getElementById("edit").addEventListener("click", (event) => {
  document.querySelector(".pop-up").style.display = "flex";
});

document.getElementById("close").addEventListener("click", (event) => {
  document.querySelector(".pop-up").style.display = "none";
});

document.getElementById("submit-form").addEventListener("click", (event) => {
  event.preventDefault();

  let player1Value = document
    .getElementById("player1UserName")
    .value.toLowerCase();
  let player2Value = document
    .getElementById("player2UserName")
    .value.toLowerCase();
  let player1Sign = document.getElementById("player-1-sign").value;
  let player2Sign = document.getElementById("player-2-sign").value;
  // players.player1.userName=document.getElementById("player1UserName").value;
  // players.player1.sign=document.getElementById("player-1-sign").value;
  // players.player2.userName=document.getElementById("player2UserName").value;
  // players.player2.sign=document.getElementById("player-2-sign").value;

  if (player1Value === player2Value || player1Sign === player2Sign) {
    document.querySelector(".error-handler").style.display = "flex";
    document.getElementById("error-message").innerText =
      "Usernames and signs need to be unique";
    var strCmd =
      "document.getElementById('error-handler').style.display = 'none'";
    var waitseconds = 4;

    // Calculate time out period then execute the command
    var timeOutPeriod = waitseconds * 1000;
    setTimeout(strCmd, timeOutPeriod);
  } else if (player1Value.length === 0 || player2Value.length === 0) {
    document.querySelector(".error-handler").style.display = "flex";
    document.getElementById("error-message").innerText =
      "Usernames are required";
    var strCmd =
      "document.getElementById('error-handler').style.display = 'none'";
    var waitseconds = 4;

    // Calculate time out period then execute the command
    var timeOutPeriod = waitseconds * 1000;
    setTimeout(strCmd, timeOutPeriod);
  } else if (player1Value !== player2Value && player1Sign !== player2Sign) {
    players.player1.userName = document.getElementById("player1UserName").value;
    players.player1.sign = document.getElementById("player-1-sign").value;
    players.player2.userName = document.getElementById("player2UserName").value;
    players.player2.sign = document.getElementById("player-2-sign").value;
    console.log(players);
    document.querySelector(".pop-up").style.display = "none";
    document.getElementById("player1").innerText = players.player1.userName;
    document.getElementById("player2").innerText = players.player2.userName;
    if (players.player1.sign === "naughts") {
      let image1 = document.getElementById("player1Sign");
      image1.src = "./images/2.png";
      let image2 = document.getElementById("player2Sign");
      image2.src = "./images/1.png";
    } else if (players.player1.sign === "crosses") {
      let image1 = document.getElementById("player1Sign");
      image1.src = "./images/1.png";
      let image2 = document.getElementById("player2Sign");
      image2.src = "./images/2.png";
    }
  }
});

document.getElementById("restart").addEventListener("click", (event) => {
  window.location.reload();
});
