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
choice=getComputerChoice();
console.log(choice);