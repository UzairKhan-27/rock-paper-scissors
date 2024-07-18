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

let computerChoice;
let humanScore=0,computerScore=0;
let humanChoice;
const humanSelection=document.querySelector("#humanSelection");
const humanScoreDisplay=document.querySelector("#humanScore");
const computerScoreDisplay=document.querySelector("#computerScore");

function handleClick(event)
{
    let target = event.target;
    console.log(target.id);
    switch(target.id)
    {
        case "rock":
            humanChoice="rock";
            break;
        case "paper":
            humanChoice="paper";
            break;
        case "scissor":
            humanChoice="scissor";
            break;
    }
    computerChoice=getComputerChoice();
    console.log(computerChoice);    
    playRound(humanChoice,computerChoice);
    humanScoreDisplay.textContent=`Player Score: ${humanScore}`;
    computerScoreDisplay.textContent=`Computer Score: ${computerScore}`;
    if(humanScore===2 || computerScore===2)
    {
        humanSelection.removeEventListener("click",handleClick);
        alert(`Game Over , Final Scores\nComputer : ${computerScore}\nHuman : ${humanScore}`);
        return;
    }

}
humanSelection.addEventListener("click",handleClick);


