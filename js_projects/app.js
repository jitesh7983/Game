

let userScore= 0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
// rock, paper, scissors,
}
const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again. "
    msg.style.backgroundColor = "#081b31";
     
};
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
     
    }
}
const playGame = (userChoice) =>{
    // console.log("user Choice = ", userChoice);
    const compChoice =genCompChoice();
    // console.log("comp choice =", compChoice);
    if(userChoice==compChoice){
drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin =  compChoice==="paper"?false: true;
        }else if(userChoice==="paper"){
            userWin = compChoice === "scissors"?false: true;
        }else{
            userWin = compChoice =="rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});