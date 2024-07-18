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
    {
        gameOver.textContent=`Round Drawn both chose ${humanSelection}`;
    }
    else if(humanSelection==="rock")
    {
        if(computerSelection==="paper")
        {
            computerScore++;
            gameOver.textContent=(`You Lose ${computerSelection} beats ${humanSelection}`);
        }
        else if(computerSelection==="scissor")
        {
            humanScore++;
            gameOver.textContent=(`You Win ${humanSelection} beats ${computerSelection}`);
            
        }
    }
    else if(humanSelection==="paper")
    {
        if(computerSelection==="scissor")
        {
            computerScore++;
            gameOver.textContent=(`You Lose ${computerSelection} beats ${humanSelection}`);
        }
        else if(computerSelection==="rock")
        {
            humanScore++;
            gameOver.textContent=(`You Win ${humanSelection} beats ${computerSelection}`);
        }
    }
    else if(humanSelection==="scissor")
        {
            if(computerSelection==="rock")
            {    computerScore++;
                gameOver.textContent=(`You Lose ${computerSelection} beats ${humanSelection}`);
            }
            else if(computerSelection==="paper")
            {
                humanScore++;
                gameOver.textContent=(`You Win ${humanSelection} beats ${computerSelection}`);
            }
        }       
}

let computerChoice;
let humanScore=0,computerScore=0;
let humanChoice;

const humanSelection=document.querySelector("#humanSelection");
const humanScoreDisplay=document.querySelector("#humanScore");
const computerScoreDisplay=document.querySelector("#computerScore");

const gameOver=document.querySelector("#gameOver h1");

function handleClick(event)
{
    let target = event.target;
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
    humanScoreDisplay.textContent=`Your Score : ${humanScore}`;
    computerScoreDisplay.textContent=`Computer Score : ${computerScore}`;
    if(humanScore===5 || computerScore===5)
    {
        humanSelection.removeEventListener("click",handleClick);
        if(humanScore>computerScore)
            gameOver.textContent=`Game Over You Win ! ! !`;
        else
            gameOver.textContent=`Game Over You Lose :(`;

    }
    

}

humanSelection.addEventListener("click",handleClick);


