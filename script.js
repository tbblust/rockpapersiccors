// Determine the computers option by randomly generating from 0 - 2
function getComputerChoice()
{
    var randInt = Math.floor(Math.random() * 3);
    console.log(randInt);
    if(randInt === 0)
    {
        return "Rock";
    }
    else if(randInt === 1)
    {
        return "Paper";
    }
    else if(randInt === 2)
    {
        return "Scissors";
    }
}

// Round logic to determine winner
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if(playerSelection === computerSelection)
    {
        return playerSelection + " against " + computerSelection + ". Tie Game."
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock"))
    {
        return "You Lose! " + computerSelection + " beats " + playerSelection + " .";
    }
    else
    {
        return "You Win! " + playerSelection + " beats " + computerSelection + " .";
    } 
}

// Plays the game 5 times;
function game()
{
    for(let i = 0; i < 5; i++)
    {
        var playerChoice;
        if(i === 0)
        {
            playerChoice = prompt("Welcome to Rock, Paper, Scissors. Choose your weapon!");
        }
        else
        {
            playerChoice = prompt("Choose your weapon!");
        }
        
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}