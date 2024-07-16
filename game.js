function getComputerChoice()
{
    let result=Math.floor(Math.random()*3);
    if(result===0)
        return "rock";
    else if(result===1)
        return "paper";
    else if(result===2)
        return "scissors";
    else
        return "error";
}
function getHumanChoice()
{
    let humanChoice=prompt("rock , paper or scissor ?");   
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor" )
    {
        return alert("Check spelling and make sure all are small letters");
    }
    return humanChoice;
}
let choice=getComputerChoice();
console.log(choice);

choice=getHumanChoice();
console.log(choice);

