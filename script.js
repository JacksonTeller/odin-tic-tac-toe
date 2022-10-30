// const Gameboard = (() => {
//     let gameBoard = [];
// })();

// show x or o on click

let gridCell = document.querySelectorAll('div[class^="grid"]');

function showX() {
    this.innerText = 'X';
    console.log(gameboardUpdate());
    changeTurnX();
}

// gridCell.forEach(cell => {
//     cell.addEventListener('click', showX);
// })

function showO() {
    this.innerText = 'O';
    console.log(gameboardUpdate());
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
    // playingGame()
    player1Play()
    
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

function gameboardUpdate() {
    let gameBoard = [];
    gridCell.forEach(cell => {
        gameBoard.push(cell.innerText);
    })
    // console.log(gameBoard)
    return gameBoard;
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

// playing a game

function playGame() {
    // // empty gameboard 
    // let emptyGameboard = ["","","","","","","","",""];
    // let gameboardCheck = gameboardUpdate();
    // let gameboardCheck = [];
    // console.log(gameboardUpdate().toString() === emptyGameboard.toString())

    // if (gameboardUpdate().toString() === emptyGameboard.toString()) {
    //     player1Play();
    //     gameboardCheck = gameboardUpdate();
    // } else if (gameboardUpdate().toString() !== emptyGameboard.toString()) {
    //     changeTurnX();
    //     player2Play();
    // }


}