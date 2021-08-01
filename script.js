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

let startButton = document.getElementById("start-game");
let player1Name = document.getElementById("player1");
let player2Name = document.getElementById("player2");

startButton.addEventListener("click", (event) => {
  if(players.player1.turn==false && players.player2.turn==false){
    players.player1.turn=true
    player1Name.classList.add("turn");
    console.log(players)
  }else {
    alert("a game is already in progress")
  } 
});


const blocks=document.getElementsByClassName("block");
for(let block of blocks){
  block.addEventListener("click", blockSelected);
}

function blockSelected(event){
  console.log(event.target);
  const divTarget=event.target
   if(players.player1.turn && divTarget.classList.contains("oselected")==false && divTarget.classList.contains("xselected")==false){
     console.log("succesful");
       divTarget.classList.add("oselected");
       players.player1.turn=false;
       players.player2.turn=true;
       player1Name.classList.remove("turn");
       player2Name.classList.add("turn");
       console.log("succesful");
       console.log(event.target);

   }else if(players.player2.turn && divTarget.classList.contains("oselected")==false && divTarget.classList.contains("xselected")==false){
    divTarget.classList.add("xselected");
    players.player2.turn=false;
    players.player1.turn=true;
    player2Name.classList.remove("turn");
    player1Name.classList.add("turn");
    console.log("succesful");
    console.log(event.target);
   }

}




