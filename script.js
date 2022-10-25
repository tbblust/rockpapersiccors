
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