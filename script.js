
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