const container = document. querySelector(".container")
const rockBtn = document. querySelector("#rock")
const paperBtn = document. querySelector("#paper")
const scissorsBtn = document. querySelector("#scissors")


let humanSelection = '';
let computerSelection = getComputerChoice();

//get human Choice
rockBtn.addEventListener("click", ()=> {
  humanSelection = 'rock'
  
  playRound(computerSelection,humanSelection)
})
paperBtn.addEventListener("click", ()=> {
  humanSelection = 'paper'
  
  playRound(computerSelection,humanSelection)
})
scissorsBtn.addEventListener("click", ()=> {
  humanSelection = 'scissors'
  
  playRound(computerSelection,humanSelection)
})

const player = {
    computer : ["Player One" ,computerSelection ],
    human : ["Player Two", humanSelection],
};


//function randomly chooses any value from the array
function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}



//Declare scoreBoard object
const scoreBoard = {
    playerOneScore : 0,
    playerTwoScore : 0,
}

//add to scoreboard
function playRound(computer, human){
  if (humanSelection != ''){

   console.log( "ComputerChoice:"+computer, "HumanChoice:"+ human)
   let winner= winningConditions(computer,human);
    
    if (winner == "Player One"){
      scoreBoard.playerOneScore++
    } else if( winner == "Player Two"){
      scoreBoard.playerTwoScore++
    }else{
      return
    }
    
   }
   else {
    console.log("waiting for human to choose.")
   }
}

function winningConditions(computer,human){
    let winner = '';

     if (computer === human){
        console.log("it's a tie.")
        //alert("it's a tie")
     } else if((computer === "paper" && human === "rock") ||
               (computer === "scissors" && human === "paper") ||
               (computer === "rock" && human === "scissors")
     ){
      winner = player.computer[0];
        console.log( "I won alright! I'm just lucky, Humans made me this good!")
       // alert("I won alright! I'm just lucky, Humans made me this good!")
      
     } else{
         winner = player.human[0];
        console.log( "humans has won this round.")
       // alert("humans has won this round. +1point!")
     }

    return winner;
}






const playGame = function (){
 

  
// gameOver conditions
  if (scoreBoard.playerOneScore === 5){
    console.log("computer has won the game!");
    //alert("computer has won the game!");
     reset();
  }else if (scoreBoard.playerTwoScore === 5){
    console.log("the human has won the game!");
    //alert("You Won!!")
      reset();
  }
 
}

// play game five time
playGame()


function reset(){
  gameStart = false;
  scoreBoard.playerOneScore=0;
  scoreBoard.playerTwoScore=0;

  return (gameStart, scoreBoard.playerOneScore, scoreBoard.playerTwoScore)
}




