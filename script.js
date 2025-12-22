



const player = {
    playerOne : "Player One",
    playerTwo : "Player Two",  
}

//function randomly chooses any value from the array
function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
   
    const randomIndex = Math.floor(Math.random()* choices.length);

    let computerChoice;

    return computerChoice = choices[randomIndex] 
}

console.log(getComputerChoice())