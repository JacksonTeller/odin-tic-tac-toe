// const Gameboard = (() => {
//     let gameBoard = [];
// })();

// show x or o on click

let gridCell = document.querySelectorAll('div[class^="grid"]');

function showX() {
    this.innerText = 'X';
    updateGameboard();
}

// gridCell.forEach(cell => {
//     cell.addEventListener('click', showX);
// })

function showO() {
    this.innerText = 'O';
}

// insert players' names

let player1Name = document.querySelector('#player1-name');
let displayName1 = document.querySelector('.display-name1');

let player2Name = document.querySelector('#player2-name');
let displayName2 = document.querySelector('.display-name2');

let startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', () => {
    //insert players' names
    player1Name.style.display = 'none';
    displayName1.style.display = 'flex';
    displayName1.innerText = player1Name.value;

    player2Name.style.display = 'none';
    displayName2.style.display = 'flex';
    displayName2.innerText = player2Name.value;

    // player 1 starts a game
    player1Play();
})

// functions for players to insert an x or o

function player1Play() {
    gridCell.forEach(cell => {
        cell.addEventListener('click', showX);
    });
}

function player2Play() {
    gridCell.forEach(cell => {
        cell.addEventListener('click', showO);
    });
}

// update a gameboard

function updateGameboard() {
    let gameBoard = [];
    gridCell.forEach(cell => {
        gameBoard.push(cell.innerText);
    })
    console.log(gameBoard)
}

// remove click event and change the turn
function changeTurnX() {
    gridCell.forEach(cell => {
        cell.removeEventListener('click', showX);
    })
}

function changeTurnO() {
    gridCell.forEach(cell => {
        cell.removeEventListener('click', showO);
    })
}