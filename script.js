const playerRock = document.querySelector('.rockBtn');
const playerPaper = document.querySelector('.paperBtn');
const playerScissor = document.querySelector('.scissorBtn');
let playerScore = document.querySelector('.playerH1');
let cpuScore = document.querySelector('.cpuH1');
let roundsH1 = document.querySelector('.round-count');
let leftBoard = document.querySelector('.left-card')
let playerRockSpan = document.querySelector('.playerRockSpan');
let playerPaperSpan = document.querySelector('.playerPaperSpan');
let playerScissorSpan = document.querySelector('.playerScissorSpan');
let leftCardText = document.querySelector('.left-card-text');
let rockSpanHidden = document.querySelector('.rockSpanHidden');
let paperSpanHidden = document.querySelector('.paperSpanHidden');
let scissorSpanHidden = document.querySelector('.scissorSpanHidden');
let rightCardText = document.querySelector('.right-card-text');
let resultBoard = document.querySelector('.resultBoard');
let winnerMessage = document.querySelector('.winner');
let nextRoundBtn = document.querySelector('.resultBoardBtn');


playerRock.addEventListener('click', rockFunc);
playerPaper.addEventListener('click', paperFunc);
playerScissor.addEventListener('click', scissorFunc);
nextRoundBtn.addEventListener('click', nextRoundFunc);

playerWins = 0;
cpuWins = 0; 
let roundStart = 1;
roundsH1.innerHTML = 'Round ' + roundStart;

function randomElement() {
    let cpuOptions = ['rock', 'paper', 'scissor'];
    return cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    // console.log (cpuChose);
}

function playerWinsRound () {
    if (playerWins == 4 && playerWinsRound) {
        console.log ('Player wins!!!');
        playerRock.disabled = true;
        playerPaper.disabled = true;
        playerScissor.disabled = true;

        playerWins = playerWins + 1;
        playerScore.innerHTML = playerWins;
        resultBoard.classList.add('playerWinBoard');
        resultBoard.classList.add('showResultBoard'); 
        winnerMessage.innerHTML = 'CONGRATS! <br> YOU WON!!';
        nextRoundBtn.innerHTML = 'PLAY AGAIN';
    } else {
    resultBoard.classList.add('playerWinBoard');
    resultBoard.classList.add('showResultBoard'); 
    winnerMessage.innerHTML = 'YOU WON! <br> +1 point.';
    playerWins = playerWins + 1;
    playerScore.innerHTML = playerWins; }
}

function CPUwinsRound() {
    if (cpuWins == 4 && CPUwinsRound) {    
        console.log('CPU wins!!!');
        playerRock.disabled = true;
        playerPaper.disabled = true;
        playerScissor.disabled = true;

        cpuWins = cpuWins + 1;
        cpuScore.innerHTML = cpuWins;
        resultBoard.classList.add('CPUwinBoard');
        resultBoard.classList.add('showResultBoard'); 
        winnerMessage.innerHTML = 'GAME OVER! <br> CPU WON!!';
        nextRoundBtn.innerHTML = 'PLAY AGAIN';
    } else {
    resultBoard.classList.add('CPUwinBoard');
    resultBoard.classList.add('showResultBoard'); 
    winnerMessage.innerHTML = 'CPU WON! <br> +1 point.';
    cpuWins = cpuWins + 1;
    cpuScore.innerHTML = cpuWins; }
}

function evenRound(){
    resultBoard.classList.add('showResultBoard');
    winnerMessage.innerHTML = 'EVEN ROUND!';
}

function nextRoundFunc () {
        if (playerWins == 5 || cpuWins == 5) {
            roundStart = 1;
            roundsH1.innerHTML = 'Round ' + roundStart;

            playerWins = 0;
            playerScore.innerHTML = playerWins;

            cpuWins = 0;
            cpuScore.innerHTML = cpuWins;

            playerRock.disabled = false;
            playerPaper.disabled = false;
            playerScissor.disabled = false;

            nextRoundBtn.innerHTML = 'Next Round';
        }


        resultBoard.classList.remove('playerWinBoard');
        resultBoard.classList.remove('CPUwinBoard');
        resultBoard.classList.remove('showResultBoard');
        playerRockSpan.classList.remove('showSpan');
        leftCardText.classList.remove('show-left-card-text');
        playerPaperSpan.classList.remove('showSpan');
        playerScissorSpan.classList.remove('showSpan');
        leftCardText.innerHTML = '';

        rockSpanHidden.classList.remove('showSpan');
        paperSpanHidden.classList.remove('showSpan');
        scissorSpanHidden.classList.remove('showSpan');
        rightCardText.innerHTML = '';

        roundsH1.innerHTML = 'Round ' + roundStart;
    }

function rockFunc() {  
    const rock = true;
    let cpuChose = randomElement();
    
    playerRockSpan.classList.add('showSpan');
    leftCardText.classList.add('show-left-card-text');
    leftCardText.innerHTML = 'YOU CHOSE ROCK!';

    if (rock && cpuChose == 'rock') {
        rockSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(evenRound, 1000);
    } else if (rock && cpuChose == 'paper') {
        paperSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(CPUwinsRound, 1000);
    } else if (rock && cpuChose == 'scissor') {
        scissorSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(playerWinsRound, 1000);
    }
    roundStart = roundStart + 1;    
}

function paperFunc() {
    const paper = true;
    let cpuChose = randomElement();

    playerPaperSpan.classList.add('showSpan');
    leftCardText.innerHTML = 'YOU CHOSE PAPER!';

    if (paper && cpuChose == 'paper') {
        paperSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(evenRound, 1000);
    } else if (paper && cpuChose == 'scissor') {
        scissorSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(CPUwinsRound, 1000);
    } else if (paper && cpuChose == 'rock') {
        rockSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(playerWinsRound, 1000);
    }
    roundStart = roundStart + 1;
}

function scissorFunc() {
    const scissor = true;
    let cpuChose = randomElement();

    playerScissorSpan.classList.add('showSpan');
    leftCardText.innerHTML = 'YOU CHOSE SCISSOR!';

    if (scissor && cpuChose == 'scissor') {
        scissorSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(evenRound, 1000);
    } else if (scissor && cpuChose == 'rock') {
        rockSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(CPUwinsRound, 1000);
    } else if (scissor && cpuChose == 'paper') {
        paperSpanHidden.classList.add('showSpan');
        rightCardText.innerHTML = 'CPU CHOSE ' + cpuChose.toLocaleUpperCase() + '!';
        setTimeout(playerWinsRound, 1000);
    }
    roundStart = roundStart + 1;
}
