function getComputerChoice()
{
    let result=Math.floor(Math.random()*3);
    if(result===0)
        return "rock";
    else if(result===1)
        return "paper";
    else if(result===2)
        return "scissor";
    else
        return "error";
}
function getHumanChoice()
{
    let humanChoice=prompt("rock , paper or scissor ?");   
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor" )
    {
        return alert("Check spelling and make sure all are small letters");
    }
    return humanChoice;
}
function playRound(humanSelection,computerSelection)
{
    if(humanSelection===computerSelection)
        return alert("Draw");
    else if(humanSelection==="rock")
    {
        if(computerSelection==="paper")
        {
            computerScore++;
            return alert(`You Lose ${computerSelection} beats ${humanSelection}`);
        }
        else if(computerSelection==="scissor")
        {
            humanScore++;
            return alert(`You Win ${humanSelection} beats ${computerSelection}`);
            
        }
    }
    else if(humanSelection==="paper")
    {
        if(computerSelection==="scissor")
        {
            computerScore++;
            return alert(`You Lose ${computerSelection} beats ${humanSelection}`);
        }
        else if(computerSelection==="rock")
        {
            humanScore++;
            return alert(`You Win ${humanSelection} beats ${computerSelection}`);
        }
    }
    else if(humanSelection==="scissor")
        {
            if(computerSelection==="rock")
            {    computerScore++;
                return alert(`You Lose ${computerSelection} beats ${humanSelection}`);
            }
            else if(computerSelection==="paper")
            {
                humanScore++;
                return alert(`You Win ${humanSelection} beats ${computerSelection}`);
            }
        }       
}
function playGame()
{
    for(let i=0;i<5;i++)
    {
        const humanSelection=getComputerChoice();
        const computerSelection=getHumanChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        playRound(humanSelection,computerSelection);
        console.log(humanScore);
        console.log(computerScore);
        console.log(`Round ${i+1} completed\n`);
    }
}
let humanScore=0,computerScore=0;
playGame();
alert(`Game Over , Final Scores\nComputer : ${computerScore}\nHuman : ${humanScore}`);

