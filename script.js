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
let disabledBtn = document.querySelector('.start-disabled-btn');

startBtn.addEventListener('click', startGame);

function startGame() {
        //insert players' names
        player1Name.style.display = 'none';
        displayName1.style.display = 'flex';
        displayName1.innerText = player1Name.value;
    
        player2Name.style.display = 'none';
        displayName2.style.display = 'flex';
        displayName2.innerText = player2Name.value;
    
        startBtn.style.display = 'none';
        disabledBtn.style.display = 'flex';
    
    
        // playing turns
        // playGame();
        console.log(game.count)
        game.playGame();
}

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
    let count = 0;
    gridCell.forEach(cell => {
        cell.addEventListener('click', () => {
            console.log(count)
            // console.log(disabledBtn.style.display !== 'none' && isNaN(count))
            if (count >= 9 || disabledBtn.style.display === 'none' || isNaN(count)) {
                // cell.innerText = cell.innerText;
                count = NaN;                
            } else if (count % 2) {
                // player2Play();
                cell.innerText = 'O';
                count++;
                console.log(gameboardUpdate())
            } else {
                // player1Play();
                cell.innerText = 'X';
                count++;
                console.log(gameboardUpdate())
            }
        });
    });
}

// playGame() as a module 

const game = (() => {
    let count = 0;
    const playGame = () => {
        gridCell.forEach(cell => {
            cell.addEventListener('click', () => {
                console.log(count)
                console.log(count >= 9, disabledBtn.style.display === 'none', isNaN(count))
                if (count >= 9 || disabledBtn.style.display === 'none') {
                    cell.innerText = cell.innerText;
                    // count = NaN;                
                } else if (count % 2) {
                    // player2Play();
                    cell.innerText = 'O';
                    count++;
                    console.log(gameboardUpdate())
                } else if (count === 0 || !(isNaN(count))) {
                    // player1Play();
                    cell.innerText = 'X';
                    count++;
                    console.log(gameboardUpdate())
                }
            });
        });
    }
    const restartGame = () => {
        restartBtn.addEventListener('click', () => {
            count = 0;        
            gridCell.forEach(cell => {
                cell.innerText = '';
            })
        })
    }
    return {count, playGame, restartGame};
})();

// restart button

let restartBtn = document.querySelector('.restart-btn');
game.restartGame();

// restartBtn.addEventListener('click', () => {
//     // disabledBtn.style.display = 'none';
//     // startBtn.style.display = 'flex';

//     // player1Name.style.display = 'flex';
//     // displayName1.style.display = 'none';
    
//     // player2Name.style.display = 'flex';
//     // displayName2.style.display = 'none';

//     gridCell.forEach(cell => {
//         cell.innerText = '';
//     })
// })
 // change restart button - it needs to clean the grid and reset the counter
