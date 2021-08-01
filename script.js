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
let player1Plays=[];
let player2Plays=[];

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
       let newNumer=parseInt(divTarget.getAttribute("data-index"));
       player1Plays.push(newNumer);
       console.log(player1Plays);
       winning();

   }else if(players.player2.turn && divTarget.classList.contains("oselected")==false && divTarget.classList.contains("xselected")==false){
    divTarget.classList.add("xselected");
    players.player2.turn=false;
    players.player1.turn=true;
    player2Name.classList.remove("turn");
    player1Name.classList.add("turn");
    console.log("succesful");
    console.log(event.target);
    let newNumber2=parseInt(divTarget.getAttribute("data-index"));
    player2Plays.push(newNumber2);
    console.log(player2Plays);
    winning();
   }

}





function winning(){
  const winningconditons=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ]
  for(let i=0; i<winningconditons.length; i++)
   if(player1Plays.includes(winningconditons[i][0]) && player1Plays.includes(winningconditons[i][1]) && player1Plays.includes(winningconditons[i][2])){
     console.log("player 1 wins")
   }else if(player2Plays.includes(winningconditons[i][0]) && player2Plays.includes(winningconditons[i][1]) && player2Plays.includes(winningconditons[i][2])){
    console.log("player 2 wins")
   }




}





