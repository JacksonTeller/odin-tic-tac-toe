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
    changeTurnO();
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

    // playing turns

    playGame();

})

// functions for players to insert an x or o

function player1Play() {
    gridCell.forEach(cell => {
        cell.addEventListener('click', showX);
    });
    // counter();
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

// counter

const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      return count++;
    };
  };
  
const counter = counterCreator();

// play on the grid

function playGame() {
    gridCell.forEach(cell => {
        cell.addEventListener('click', () => {
            let count = counter();
            // console.log(count ,count === 0, count % 2)
            if (count >= 9) {
                cell.innerText = cell.innerText;
                return 0;
            } else if (count % 2) {
                // player2Play();
                cell.innerText = 'O';
                console.log(gameboardUpdate())
            } else {
                // player1Play();
                cell.innerText = 'X';
                console.log(gameboardUpdate())
            }
        });
    });
}

// player1plays and countX happens then a function decides whose turn is its