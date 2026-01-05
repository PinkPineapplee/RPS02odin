let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
  
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
let humanChoice = '';
// rock='';
// paper='';
// scissors='';
  //add eventlisteners to get humanchoice
   rock.addEventListener("click", ()=>{
    if(rock.isClicked == true){

    return humanChoice= "rock", 
console.log(humanChoice);;
  }});
   paper.addEventListener("click", ()=>{
    if(paper.isClicked == true){
    return humanChoice="paper", 
console.log(humanChoice);;
   }});
   scissors.addEventListener("click", ()=>{
      if(scissors.isClicked == true){
      return humanChoice="scissors", 
console.log(humanChoice);;
    }});

  try{ 

    if (humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors" &&
        humanChoice === '' ){

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

function winningConditions(computer,human){
    let winner = '';

     if (computer === human){
        console.log("it's a tie.")
     } else if((computer === "paper" && human === "rock") ||
               (computer === "scissors" && human === "paper") ||
               (computer === "rock" && human === "scissors")
     ){
      winner = player.computer[0];
        console.log( "I won alright! I'm just lucky, Humans made me this good!")
        alert("I won alright! I'm just lucky, Humans made me this good!")
      
     }else {
         winner = player.human[0];
        console.log( "humans has won this round.")
        alert("humans has won this round. +1point!")
     }

    return winner;
}

//add to scoreboard
function playRound(){

   let winner= winningConditions(player.computer[1](),player.human[1]());
    
    winner == "Player One" ? scoreBoard.playerOneScore++ : scoreBoard.playerTwoScore++
    
}


function playGame(){
  gameStart = true;

   //PlayRound five times
   for (let i = 1 ; i <= 5; i++){
   
     playRound();
   }
 
// gameOver conditions
  if (scoreBoard.playerOneScore == 5){
    console.log("computer has won the game!");
    alert("computer has won the game!");
    
  }else if (scoreBoard.playerTwoScore == 5){
    console.log("the human has won the game!");
    alert("You Won!!")
     
  }
  reset();
}playGame()


function reset(){
  gameStart = false;
  scoreBoard.playerOneScore[1]=0;
  scoreBoard.playerTwoScore[1]=0;

  return (gameStart, scoreBoard.playerOneScore, scoreBoard.playerTwoScore)
}




