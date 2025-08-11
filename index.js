let userScore = 0;
let gameMode = 'normal';

const options = {
    1: 'scissors',
    2: 'paper',
    3: 'rock',
    4: 'lizard',
    5: 'spock'
}
const winner = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
};

function play(userOption) {
    let choices = gameMode === 'normal' ? 3 : 5;
    let cpuOption = options[Math.floor(Math.random() * choices + 1)];

    let userResult = winner[userOption].includes(cpuOption) ? 1 : 0;
    let cpuResult = winner[cpuOption].includes(userOption) ? 1 : 0;
    console.log(userOption + " - " + cpuOption);

    let roundWinner = 'draw';
    if (userResult === 1) roundWinner = 'user';
    if (cpuResult === 1) roundWinner = 'cpu';

    let results = { userOption, cpuOption, roundWinner };


    renderizerResultsPage(results);

}

function renderizerResultsPage(results) {
    document.getElementById('cpu-choice').style.display = 'none'
    document.getElementById('loading-choice-picking-container').style.display = 'block'
    document.getElementById('inside-results-container').style.display = 'none'

    let cardUserOption = document.getElementById('user-choice');
    let cardCpuOption = document.getElementById('cpu-choice')

    cardUserOption.className = '';
    cardCpuOption.className = '';

    cardUserOption.classList.add('circle-btn-results', `${results.userOption}-color`);
    document.getElementById('img-user-choice').src = `images/icon-${results.userOption}.svg`;

    cardCpuOption.classList.add('circle-btn-results', `${results.cpuOption}-color`);
    document.getElementById('img-cpu-choice').src = `images/icon-${results.cpuOption}.svg`;

    document.getElementById(`main-${gameMode}-choices-container`).style.display = 'none';
    document.getElementById('main-results-container').style.display = 'flex';

    document.getElementById('btn-change-mode').style.display = 'none';

    setTimeout(() => {
        document.getElementById('cpu-choice').style.display = 'flex'
        document.getElementById('loading-choice-picking-container').style.display = 'none'
    }, 800);

    setTimeout(() => {
        let txtResult = 'DRAW';
        let color = 'hsl(39, 89%, 49%)'
        if (results.roundWinner === 'user') {
            document.get
            txtResult = 'YOU WIN'
            cardUserOption.classList.add('winner');
            userScore++;
            color = 'hsl(230, 89%, 62%)';
        }
        if (results.roundWinner === 'cpu') {
            txtResult = 'YOU LOSE'
            cardCpuOption.classList.add('winner');
            userScore--;
            color = 'hsl(349, 71%, 52%)';
        }

        document.getElementById('txt-user-score').innerHTML = userScore;
        document.getElementById('txt-result').innerHTML = txtResult;
        document.getElementById('txt-result').style.color = color;
        document.getElementById('inside-results-container').style.display = 'flex'
    }, 1600);
}

function playAgain() {
    document.getElementById('btn-change-mode').style.display = 'block';
    document.getElementById(`main-${gameMode}-choices-container`).style.display = 'flex';
    document.getElementById('main-results-container').style.display = 'none';
}

function changeGameMode() {
    const resultsContainer = document.getElementById('main-results-container');
    if (window.getComputedStyle(resultsContainer).display !== 'none') return;


    let logo = document.getElementById('img-logo');
    gameMode = gameMode === 'normal' ? 'bonus' : 'normal';
    if (gameMode === 'normal') {
        document.getElementById('main-normal-choices-container').style.display = 'flex';
        document.getElementById('main-bonus-choices-container').style.display = 'none';
        logo.src = "images/logo.svg";
    }

    if (gameMode === 'bonus') {
        document.getElementById('main-normal-choices-container').style.display = 'none';
        document.getElementById('main-bonus-choices-container').style.display = 'flex';
        logo.src = 'images/logo-bonus.svg';
    }
}

function openCloseModalRules(mode) {
    let imgModal = gameMode === 'normal' ? 'images/image-rules.svg' : 'images/image-rules-bonus.svg';

    let display = mode === 'open' ? 'flex' : 'none';

    document.getElementById('img-modal-rules').src = imgModal;
    document.getElementById('main-modal-rules-container').style.display = display;
}