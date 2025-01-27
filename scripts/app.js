let player1 = document.getElementById('player_1');
let player2 = document.getElementById('player_2');
let player1Cube = player1.querySelectorAll('.dots--container');
let player2Cube = player2.querySelectorAll('.dots--container');
let rollBtn = document.querySelector('.btn');
let winnerName = document.getElementById('winner-name');
let actionResults = document.querySelector('.action-results');

rollBtn.addEventListener('click', rollDice);

function rollDice(){
    let diceValuePlayer1 = rollOneDice(player1Cube) + 1;
    let diceValuePlayer2 = rollOneDice(player2Cube) + 1;
    
    showWinner(diceValuePlayer1, diceValuePlayer2);
}

function rollOneDice(playerCube){
    let ramdomDiceValue = getRandomDiceValue();
    playerCube.forEach((element, index) => {
        element.classList.remove('active');
        if(index === ramdomDiceValue){
            element.classList.add('active');
        }
    });
    return ramdomDiceValue;
}

function getRandomDiceValue(){
    return Math.floor(Math.random() * 5) + 1;
}

function showWinner(diceValuePlayer1, diceValuePlayer2){
    let winnerNameText = diceValuePlayer1 > diceValuePlayer2 ? 'Player 1 wins!':'Player 2 wins!';
    if(diceValuePlayer1 === diceValuePlayer2){
        winnerNameText = 'draw';
    }
    winnerName.innerText = winnerNameText;
    actionResults.classList.add('active');
}

