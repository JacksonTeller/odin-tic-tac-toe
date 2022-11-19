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
    const xWin = 'X,X,X';
    const oWin = 'O,O,O';
    const winPatterns = {
        winnerX: 'o',
    };
    const playGame = () => {
        gridCell.forEach(cell => {
            cell.addEventListener('click', () => {
                console.log(count)
                // console.log(count >= 9, disabledBtn.style.display === 'none', isNaN(count))
                if (count >= 9 || disabledBtn.style.display === 'none' || cell.innerText !== '') {
                    cell.innerText = cell.innerText;
                    // count = NaN;                
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
                if (cell.innerText !== '') {
                    let a = gameboardUpdate();
                    if ([a[0], a[1], a[2]].toString() === xWin || 
                        [a[3], a[4], a[5]].toString() === xWin ||
                        [a[6], a[7], a[8]].toString() === xWin ||
                        [a[0], a[3], a[6]].toString() === xWin ||
                        [a[1], a[4], a[7]].toString() === xWin ||
                        [a[2], a[5], a[8]].toString() === xWin ||
                        [a[0], a[4], a[8]].toString() === xWin ||
                        [a[2], a[4], a[6]].toString() === xWin) {
                        console.log('Winner! X')
                        winnerPopup.style.display = 'flex';
                        resultText.innerText = 'Winner X';

                    } 
                    if ([a[0], a[1], a[2]].toString() === xWin || 
                    [a[3], a[4], a[5]].toString() === oWin ||
                    [a[6], a[7], a[8]].toString() === oWin ||
                    [a[0], a[3], a[6]].toString() === oWin ||
                    [a[1], a[4], a[7]].toString() === oWin ||
                    [a[2], a[5], a[8]].toString() === oWin ||
                    [a[0], a[4], a[8]].toString() === oWin ||
                    [a[2], a[4], a[6]].toString() === oWin) {
                        console.log('Winner! O')
                        winnerPopup.style.display = 'flex';
                        resultText.innerText = 'Winner O';
                    }
                    // console.log([a[0], a[1], a[2]].toString() === xWin)
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
    const playNewround = () => {
        resultBtn.addEventListener('click', () => {
            winnerPopup.style.display = 'none';
            count = 0;        
            gridCell.forEach(cell => {
                cell.innerText = '';
            })
        });
    }
    return {playGame, restartGame, playNewround};
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

let winnerPopup = document.querySelector('.bg-modal');
let resultText = document.querySelector('.result');
let resultBtn = document.querySelector('.result-btn');

// turn-off the winner pop-up and play a new round

resultBtn.addEventListener('click', () => {
    winnerPopup.style.display = 'none';
});

game.playNewround();

// wrap the code into factory functions and modules