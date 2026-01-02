let gameStart = false;

const player = {
    computer : ["Player One" , getComputerChoice],
    human : ["Player Two", getHumanChoice],
}

//function randomly chooses any value from the array
function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    let computerChoice = choices[randomIndex];
    console.log(computerChoice);
    return computerChoice 
}



//function prompt for user choice
function getHumanChoice(){
const humanChoice = prompt("Rock, Paper, Scissors!!!").toLowerCase()

console.log(humanChoice);
  try{ 

    if (humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors"){

        throw "pick Rock, Paper or Scissors to continue game!!."
        
  } 
    
  }catch(err){
    console.log(err)
    alert(err)
    getHumanChoice();
  } finally{
    return humanChoice;
  }
    
}


//Declare scoreBoard object
const scoreBoard = {
    playerOneScore : 0,
    playerTwoScore : 0,
}

function winningConditions(computerChoice,humanChoice){
    let winner = '';
    let a = computerChoice;
    let b = humanChoice;

    let choices = [a,b];

    if (choices[0] == choices[1]){

        console.log("it's a tie.")

    } else if(choices[0] == "paper" && choices[1] == "rock" ||
              choices[0] == "scissors" && choices[1] == "paper" ||
              choices[0] == "rock" && choices[1] == "scissors"
    ){
       winner = player.human[0];
    
       console.log( "humans has won this round.")
    }else {
        winner = player.computer[0];
    
       console.log( "I won alright! I'm just lucky, Humans made me this good!")
    }

    return winner;
}

//add to scoreboard
function playRound(){

   let winner= winningConditions(player.computer[1],player.human[1]);
    
    winner == "Player One" ? scoreBoard.playerOneScore++ : scoreBoard.playerTwoScore++
    
}


function playGame(){
  gameStart = true;

   //PlayRound five times
   for (let i = 1 ; i <= 5; i++){
    player.computer[1]()
    player.human[1]()
     playRound();
   }
 
// gameOver conditions
  if (scoreBoard.playerOneScore == 5){
    console.log("computer has won the game!")
    
  }else if (scoreBoard.playerTwoScore == 5){
    console.log("the human has won the game!")
     
  }
  reset();
}playGame()


function reset(){
  gameStart = false;
  scoreBoard.playerOneScore[1]=0;
  scoreBoard.playerTwoScore[1]=0;

  return (gameStart, scoreBoard.playerOneScore, scoreBoard.playerTwoScore)
}




