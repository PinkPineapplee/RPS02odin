



const player = {
    computer : ["Player One" , getComputerChoice()],
    human : ["Player Two", getHumanChoice()],  
}

//function randomly chooses any value from the array
function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
   
    const randomIndex = Math.floor(Math.random()* choices.length);

    let computerChoice;

    return computerChoice = choices[randomIndex] 
}

console.log(getComputerChoice())


function getHumanChoice(){

    const humanChoice = prompt("Rock, Paper, Scissors!!!").toLowerCase()

    return (humanChoice);
}
console.log(getHumanChoice())

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
        console.log("it's a tie")
    } else if(choices[0] == "paper" && choices[1] == "rock" ||
              choices[0] == "scissors" && choices[1] == "paper" ||
              choices[0] == "rock" && choices[1] == "scissors"
    ){
       winner = player.computer[0];
    
       console.log( "humans has won this round.")
    }else {
        winner = player.computer[1];
    
       console.log( "I won alright! I'm just lucky, Humans made me this good!")
    }

    return winner;
}
console.log(winningConditions());