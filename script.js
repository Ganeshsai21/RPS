userScore=0;
compScore=0;
const choice=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");
const para=document.querySelector("#user-score");
const compPara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["paper","rock","scissors"];
    let indexId=Math.floor(Math.random()*3);
    return options[indexId];

};
const drawGame=()=>{
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="blue";
};

const lastWinner=()=>{
    if(userScore===3){
        console.log("you won this RPS");
    }
    else{
        console.log("you lose")
    }
};

const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++
    para.innerText=userScore;
    para.style.color="green";
    msg.innerText=`You Won!! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    lastWinner();
   }else{
    compScore++;
    compPara.innerText=compScore;
    compPara.style.color="red";
    msg.innerText=`You Lose!!computer ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
   

   }
};


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
    drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper ,scissors
           userWin= compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            //u-scisscors c rock
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}   
choice.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userChoice=choices.getAttribute("id");
        playGame(userChoice);
    });
});