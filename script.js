let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const scoreU = document.querySelector("#user-score");
const scoreC = document.querySelector("#comp-score");

const drawGame = () => {
    console.log("Game was a draw.")
    msg.innerText = "Game was drawn. Try again!";
    msg.style.backgroundColor = "violet";
    msg.style.color = "black";
}

const genCompChoice =() => {
    const options =['Rock', 'Paper', 'Scissors'];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("Hurrah! You Win.");
        msg.innerText = `Hurrah! You Win. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        scoreU.innerText = userScore;
    }
    else {
        console.log("Oops! You lose.");
        msg.innerText = `Oops! You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScore++;
        scoreC.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log(`User Choice: ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`)

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            // scissors, paper
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper") {
            // rock, scossors
            userWin = compChoice === "Rock" ? true : false;
        }
        else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


// Getting the id of chosen option 
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");;
        playGame(userChoice);
    });
});
