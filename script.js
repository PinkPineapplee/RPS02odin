const container = document. querySelector(".container")

let gameStart = false;

// const btn = document.querySelector(".test");
// btn.addEventListener("click", ()=>{console.log("i am a work button that clicks in this webpages")
//   humanChoice='rock';
// })




//function randomly chooses any value from the array
function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    let computerChoice = choices[randomIndex];
    console.log(computerChoice);
    return computerChoice 
}



//function prompt for user choice

  container.addEventListener("click", (event)=>{
    
     let target = event.target;
 
   switch(target.id){
     case 'rock':
       console.log('rock was clicked.');
       getHumanChoice(target.id)
      
       break;
     case 'paper':
       console.log("paper was clicked.");
       getHumanChoice(target.id)
      
       break;
     case 'scissors':
       console.log('scissors was clicked.');
       getHumanChoice(target.id)
      
       break;  
      
   }
 
 } );
 
 function getHumanChoice(choice){
   let humanChoice = choice; 
   return humanChoice;
  }
  
  

//Declare scoreBoard object
const scoreBoard = {
    playerOneScore : 0,
    playerTwoScore : 0,
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

const player = {
    computer : ["Player One" , getComputerChoice],
    human : ["Player Two", getHumanChoice],
};

//add to scoreboard
function playRound(){
   
   let winner= winningConditions(player.computer[1](),player.human[1]());
    
    winner == "Player One" ? scoreBoard.playerOneScore++ : scoreBoard.playerTwoScore++
   
}


const playGame = function (){
 

   gameStart = true;

   
   //PlayRound five times
  //  for (let i = 1 ; i <= 5; i++){
    // alert("Round" + i + ", Goodluck!!")
     playRound();
  //  }
  
// gameOver conditions
  if (scoreBoard.playerOneScore == 5){
    console.log("computer has won the game!");
    //alert("computer has won the game!");
    
  }else if (scoreBoard.playerTwoScore == 5){
    console.log("the human has won the game!");
    //alert("You Won!!")
     
  }
  reset();
}
playGame()

function reset(){
  gameStart = false;
  scoreBoard.playerOneScore[1]=0;
  scoreBoard.playerTwoScore[1]=0;

  return (gameStart, scoreBoard.playerOneScore, scoreBoard.playerTwoScore)
}




