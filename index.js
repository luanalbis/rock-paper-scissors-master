let userOption;
let cpuOption;

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

function select(option) {


    document.getElementById('main-choices-cantainer').style.display = 'none';
    document.getElementById('main-results-container').style.display = 'flex';


    cpuOption = options[Math.floor(Math.random() * 5 + 1)];

    let userResult = winner[option].includes(cpuOption) ? 1 : 0;
    let cpuResult = winner[cpuOption].includes(option) ? 1 : 0;
    console.log(option + " - " + cpuOption);

    let roundWinner = 'draw';
    if (userResult === 1) roundWinner = 'user';
    if (cpuResult === 1) roundWinner = 'cpu';

    document.getElementById('img-user-choice').src = `images/icon-${option}.svg`
    document.getElementById('img-cpu-choice').src = `images/icon-${cpuOption}.svg`


}