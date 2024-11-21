let guessNumber = Math.round(Math.random() * 100);

let pGuess = [];

let guessChance = 1;
const h1 = document.querySelector("h1");
console.log(guessNumber);

const button = document.getElementById("button");

const input = document.getElementById("input");

const btn  = document.getElementById("btn");

let previousGuess = document.getElementById("previousGuess");

let remainingGuess = document.getElementById("remainingGuess");

const showMessage = document.getElementById("showMessage");

let playGame = true;


startGame();

function startGame(){
    input.value = "";
    button.style.display = "none";
    guessChance =0;
    pGuess = [];
    if (playGame) {
        btn.addEventListener("click",()=>{
            isValid(input.value);
        })
    }
}

function isValid(e){
    if(isNaN(e)){
        alert("Please Enter Number");
    }
    else if (e<1) {
        alert("Please Enter Value Greater Than 1");
    }
    else if(e>100) {
        alert("Please Enter Value Less Than 100");
    }
    else{
        isCorrect(e);
    }
}
function isCorrect (e){
if (e == guessNumber) {
    h1.innerHTML = "Congrants You Guess Correct";
    h1.style.color = "green";
    endGame();
    displayMessage(`Yes The Number is ${e}`);

    
}
else if(e > guessNumber){
    displayMessage(`${e} is Larger`);
    continueGame();
}

else{
    displayMessage(`${e} is Smaller`);
    continueGame();
}
}

function continueGame(){
    
    if(guessChance===10){
        displayMessage(`The Number is ${guessNumber}`);
        endGame();
        input.value = "";
    }
    else{
        pGuess.push(input.value);
    previousGuess.innerHTML += `${input.value}   `;
    guessChance++;
    remainingGuess.innerHTML = 10-guessChance;
    input.value = "";
    }
}

function displayMessage(e){
    showMessage.innerHTML = e;
}


function endGame(){
    playGame = false;
    btn.style.display = "none";
    restartGame();
}

function restartGame(){
    button.innerHTML = "Play Again";
    button.style.display = "block";
}
button.addEventListener("click", ()=>{
        location.reload();
})
