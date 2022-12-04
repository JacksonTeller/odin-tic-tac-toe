// show x or o on click

// let gridCell = document.querySelectorAll('div[class^="grid"]');

// function showX() {
//     this.innerText = 'X';
//     console.log(gameboardUpdate());
//     changeTurnX();
// }

// gridCell.forEach(cell => {
//     cell.addEventListener('click', showX);
// })

// function showO() {
//     this.innerText = 'O';
//     console.log(gameboardUpdate());
//     changeTurnO();
// }

// insert players' names

// let player1Name = document.querySelector('#player1-name');
// let displayName1 = document.querySelector('.display-name1');

// let player2Name = document.querySelector('#player2-name');
// let displayName2 = document.querySelector('.display-name2');

// let startBtn = document.querySelector('.start-btn');
// let disabledBtn = document.querySelector('.start-disabled-btn');

// startBtn.addEventListener('click', startGame);

// function startGame() {
//         //insert players' names
//         player1Name.style.display = 'none';
//         displayName1.style.display = 'flex';
//         displayName1.innerText = player1Name.value;
    
//         player2Name.style.display = 'none';
//         displayName2.style.display = 'flex';
//         displayName2.innerText = player2Name.value;
    
//         startBtn.style.display = 'none';
//         disabledBtn.style.display = 'flex';
    
    
//         // playing turns
//         // playGame();
//         game.playGame();
// }

// functions for players to insert an x or o

// function player1Play() {
//     gridCell.forEach(cell => {
//         cell.addEventListener('click', showX);
//     });
//     // counter();
// }

// function player2Play() {
//     gridCell.forEach(cell => {
//         cell.addEventListener('click', showO);
//     });
// }

// update a gameboard

// function gameboardUpdate() {
//     let gameBoard = [];
//     gridCell.forEach(cell => {
//         gameBoard.push(cell.innerText);
//     })
//     // console.log(gameBoard)
//     return gameBoard;
// }

// remove click event and change the turn
// function changeTurnX() {
//     gridCell.forEach(cell => {
//         cell.removeEventListener('click', showX);
//     })
// }

// function changeTurnO() {
//     gridCell.forEach(cell => {
//         cell.removeEventListener('click', showO);
//     })
// }

// counter

// const counterCreator = () => {
//     let count = 0;
//     return () => {
//       console.log(count);
//       return count++;
//     };
//   };
  
// const counter = counterCreator();

// play on the grid

// function playGame() {
//     let count = 0;
//     gridCell.forEach(cell => {
//         cell.addEventListener('click', () => {
//             console.log(count)
//             // console.log(disabledBtn.style.display !== 'none' && isNaN(count))
//             if (count >= 9 || disabledBtn.style.display === 'none' || isNaN(count)) {
//                 // cell.innerText = cell.innerText;
//                 count = NaN;                
//             } else if (count % 2) {
//                 // player2Play();
//                 cell.innerText = 'O';
//                 count++;
//                 console.log(gameboardUpdate())
//             } else {
//                 // player1Play();
//                 cell.innerText = 'X';
//                 count++;
//                 console.log(gameboardUpdate())
//             }
//         });
//     });
// }

// playGame() as a module 

const game = (() => {
    let gridCell = document.querySelectorAll('div[class^="grid"]');

    let player1Name = document.querySelector('#player1-name');
    let displayName1 = document.querySelector('.display-name1');

    let player2Name = document.querySelector('#player2-name');
    let displayName2 = document.querySelector('.display-name2');

    let score = document.querySelector('.score');

    let startBtn = document.querySelector('.start-btn');
    let disabledBtn = document.querySelector('.start-disabled-btn');

    let restartBtn = document.querySelector('.restart-btn');

    let winnerPopup = document.querySelector('.bg-modal');
    let resultText = document.querySelector('.result');
    let resultBtn = document.querySelector('.result-btn');

    let smallBoard = document.querySelectorAll('div[class^="small-grid"]');
    
    let player1ava = document.querySelector("label[for='player1-name']");
    let player2ava = document.querySelector("label[for='player2-name']");

    let count = 0;
    let pointsX = 0;
    let pointsO = 0;
    const xWin = 'X,X,X';
    const oWin = 'O,O,O';

    // let arr = [];
    

    function gameboardUpdate() {
        let gameBoard = [];
        gridCell.forEach(cell => {
            gameBoard.push(cell.innerText);
        })
        // console.log(gameBoard)
        return gameBoard;
    }

    function playTurns(cell) {
        // console.log(this)
        if (count >= 9 || disabledBtn.style.display === 'none' || cell.innerText !== '') {
            cell.innerText = cell.innerText;
            // count = NaN;                
        } else if (count % 2) {
            player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
            player2ava.style = "box-shadow: none; box-shadow: none;";

            // player2Play();
            
            cell.innerText = 'O';
            count++;
            console.log(gameboardUpdate())
        } else {
            player2ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
            player1ava.style = "box-shadow: none; box-shadow: none;";
            // player1Play();
            cell.innerText = 'X';
            count++;
            
            // AIplay()
            console.log(gameboardUpdate())
        }
    }

    function checkWinner() {
        let currGameBrd = gameboardUpdate();
        const xCheck = ([currGameBrd[0], currGameBrd[1], currGameBrd[2]].toString() === xWin || 
                        [currGameBrd[3], currGameBrd[4], currGameBrd[5]].toString() === xWin ||
                        [currGameBrd[6], currGameBrd[7], currGameBrd[8]].toString() === xWin ||
                        [currGameBrd[0], currGameBrd[3], currGameBrd[6]].toString() === xWin ||
                        [currGameBrd[1], currGameBrd[4], currGameBrd[7]].toString() === xWin ||
                        [currGameBrd[2], currGameBrd[5], currGameBrd[8]].toString() === xWin ||
                        [currGameBrd[0], currGameBrd[4], currGameBrd[8]].toString() === xWin ||
                        [currGameBrd[2], currGameBrd[4], currGameBrd[6]].toString() === xWin);

        const oCheck = ([currGameBrd[0], currGameBrd[1], currGameBrd[2]].toString() === oWin || 
                        [currGameBrd[3], currGameBrd[4], currGameBrd[5]].toString() === oWin ||
                        [currGameBrd[6], currGameBrd[7], currGameBrd[8]].toString() === oWin ||
                        [currGameBrd[0], currGameBrd[3], currGameBrd[6]].toString() === oWin ||
                        [currGameBrd[1], currGameBrd[4], currGameBrd[7]].toString() === oWin ||
                        [currGameBrd[2], currGameBrd[5], currGameBrd[8]].toString() === oWin ||
                        [currGameBrd[0], currGameBrd[4], currGameBrd[8]].toString() === oWin ||
                        [currGameBrd[2], currGameBrd[4], currGameBrd[6]].toString() === oWin);
        if (xCheck) {
            console.log('Winner! X')
            winnerPopup.style.display = 'flex';
            resultText.innerText = 'Winner X';
            pointsX++;
            score.innerText = pointsX + ':' + pointsO;

            for (let i = 0; i < currGameBrd.length; i++) {
                smallBoard[i].innerText = currGameBrd[i];
            }

        } else if (oCheck) {
            console.log('Winner! O')
            winnerPopup.style.display = 'flex';
            resultText.innerText = 'Winner O';
            pointsO++;
            score.innerText = pointsX + ':' + pointsO;

            for (let i = 0; i < currGameBrd.length; i++) {
                smallBoard[i].innerText = currGameBrd[i];
            }
        } else if (count >= 9 && !(xCheck) && !(oCheck)) {
            winnerPopup.style.display = 'flex';
            resultText.innerText = 'Draw!';

            for (let i = 0; i < currGameBrd.length; i++) {
                smallBoard[i].innerText = currGameBrd[i];
            }
        }
    }

    // function AIplay() {
        
    //     for(let i in arr) {
    //         console.log(i)
    //         if (gridCell[arr[i]].innerText === '') {
    //             gridCell[arr[i]].innerText = 'O';
    //             break;
    //         }
    //     }
    // }



    const playGame = () => {
        gridCell.forEach(cell => {
            cell.addEventListener('click', () => {
                console.log("count "+count)
                cell = cell;
                playTurns(cell);
                // console.log(arr)

                // play with another player
                // if (count >= 9 || disabledBtn.style.display === 'none' || cell.innerText !== '') {
                //     cell.innerText = cell.innerText;
                //     // count = NaN;                
                // } else if (count % 2) {
                //     player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
                //     player2ava.style = "box-shadow: none; box-shadow: none;";

                //     // player2Play();
                    
                //     cell.innerText = 'O';
                //     count++;
                //     console.log(gameboardUpdate())
                // } else {
                //     player2ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
                //     player1ava.style = "box-shadow: none; box-shadow: none;";
                //     // player1Play();
                //     cell.innerText = 'X';
                //     count++;
                    
                //     // AIplay()
                //     console.log(gameboardUpdate())
                // }
                // check if there is a winner
                if (cell.innerText !== '') {
                    checkWinner();
                    // let currGameBrd = gameboardUpdate();
                    // const xCheck = ([currGameBrd[0], currGameBrd[1], currGameBrd[2]].toString() === xWin || 
                    //                 [currGameBrd[3], currGameBrd[4], currGameBrd[5]].toString() === xWin ||
                    //                 [currGameBrd[6], currGameBrd[7], currGameBrd[8]].toString() === xWin ||
                    //                 [currGameBrd[0], currGameBrd[3], currGameBrd[6]].toString() === xWin ||
                    //                 [currGameBrd[1], currGameBrd[4], currGameBrd[7]].toString() === xWin ||
                    //                 [currGameBrd[2], currGameBrd[5], currGameBrd[8]].toString() === xWin ||
                    //                 [currGameBrd[0], currGameBrd[4], currGameBrd[8]].toString() === xWin ||
                    //                 [currGameBrd[2], currGameBrd[4], currGameBrd[6]].toString() === xWin);

                    // const oCheck = ([currGameBrd[0], currGameBrd[1], currGameBrd[2]].toString() === oWin || 
                    //                 [currGameBrd[3], currGameBrd[4], currGameBrd[5]].toString() === oWin ||
                    //                 [currGameBrd[6], currGameBrd[7], currGameBrd[8]].toString() === oWin ||
                    //                 [currGameBrd[0], currGameBrd[3], currGameBrd[6]].toString() === oWin ||
                    //                 [currGameBrd[1], currGameBrd[4], currGameBrd[7]].toString() === oWin ||
                    //                 [currGameBrd[2], currGameBrd[5], currGameBrd[8]].toString() === oWin ||
                    //                 [currGameBrd[0], currGameBrd[4], currGameBrd[8]].toString() === oWin ||
                    //                 [currGameBrd[2], currGameBrd[4], currGameBrd[6]].toString() === oWin);
                    // if (xCheck) {
                    //     console.log('Winner! X')
                    //     winnerPopup.style.display = 'flex';
                    //     resultText.innerText = 'Winner X';
                    //     pointsX++;
                    //     score.innerText = pointsX + ':' + pointsO;

                    //     for (let i = 0; i < currGameBrd.length; i++) {
                    //         smallBoard[i].innerText = currGameBrd[i];
                    //     }

                    // } else if (oCheck) {
                    //     console.log('Winner! O')
                    //     winnerPopup.style.display = 'flex';
                    //     resultText.innerText = 'Winner O';
                    //     pointsO++;
                    //     score.innerText = pointsX + ':' + pointsO;

                    //     for (let i = 0; i < currGameBrd.length; i++) {
                    //         smallBoard[i].innerText = currGameBrd[i];
                    //     }
                    // } else if (count >= 9 && !(xCheck) && !(oCheck)) {
                    //     winnerPopup.style.display = 'flex';
                    //     resultText.innerText = 'Draw!';

                    //     for (let i = 0; i < currGameBrd.length; i++) {
                    //         smallBoard[i].innerText = currGameBrd[i];
                    //     }
                    // }
                    // console.log([currGameBrd[0], a[1], a[2]].toString() === xWin)
                }
                // if (count >= 9 && resultText.innerText !== 'Winner O' || count >= 9 && resultText.innerText !== 'Winner X') {
                //     winnerPopup.style.display = 'flex';
                //     resultText.innerText = 'Draw!';
                // }
            });
        });
    }

    // const restartGame = () => {
    //     restartBtn.addEventListener('click', () => {
    //         count = 0;        
    //         gridCell.forEach(cell => {
    //             cell.innerText = '';
    //         })
    //     })
    // }

    function restartGame() {
        // arr = [];
        // for (let i = 0; i < 9; i++) {
        //     let position = Math.floor(Math.random() * 9);
        //     if (arr.includes(position)) {
        //         i--;
        //     } else {
        //         arr.push(position);
        //     }
        // }
        // show whose turn
        // if (!(player1ava.style === "box-shadow: none; box-shadow: none;" && 
        // player2ava.style === "box-shadow: none; box-shadow: none;")) {
        //     return 1;
        // } else {
            
        // }
        if (disabledBtn.style.display === 'flex') {
            player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
            player2ava.style = "box-shadow: none; box-shadow: none;";
        }

        count = 0;        
            gridCell.forEach(cell => {
                cell.innerText = '';
            })
    }

    // const playNewround = () => {
    //     resultBtn.addEventListener('click', () => {
    //         winnerPopup.style.display = 'none';
    //         count = 0;        
    //         gridCell.forEach(cell => {
    //             cell.innerText = '';
    //         })
    //     });
    // }

    function playNewround() {
        // arr = [];
        // for (let i = 0; i < 9; i++) {
        //     let position = Math.floor(Math.random() * 9);
        //     if (arr.includes(position)) {
        //         i--;
        //     } else {
        //         arr.push(position);
        //     }
        // }
        // show whose turn
        player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
        player2ava.style = "box-shadow: none; box-shadow: none;";

        winnerPopup.style.display = 'none';
        count = 0;        
        gridCell.forEach(cell => {
            cell.innerText = '';
        })
    }

    function startGame() {
        //insert players' names
        player1Name.style.display = 'none';
        displayName1.style.display = 'flex';
        
    
        player2Name.style.display = 'none';
        displayName2.style.display = 'flex';
        
    
        startBtn.style.display = 'none';
        disabledBtn.style.display = 'flex';

        // score
        score.style.display = 'flex';
        score.innerText = pointsX + ':' + pointsO;


        // show whose turn
        player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
    
        // for AI

        // for (let i = 0; i < 9; i++) {
        //     let position = Math.floor(Math.random() * 9);
        //     if (arr.includes(position)) {
        //         i--;
        //     } else {
        //         arr.push(position);
        //     }
        // }
        // playing turns
        console.log(player1Name.value === '')
        if (player1Name.value === '' || player2Name.value === '') {
            displayName1.innerText = 'Secret agent X';
            displayName2.innerText = 'Secret agent O';
        } else {
            displayName1.innerText = player1Name.value;
            displayName2.innerText = player2Name.value;
        }
        playGame();

        // console.log(gridCell[0].innerText)
        // play with AI
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
    resultBtn.addEventListener('click', playNewround);

    return {playGame};
})();


// restart button

// let restartBtn = document.querySelector('.restart-btn');
// game.restartGame();

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

// let winnerPopup = document.querySelector('.bg-modal');
// let resultText = document.querySelector('.result');
// let resultBtn = document.querySelector('.result-btn');

// turn-off the winner pop-up and play a new round

// resultBtn.addEventListener('click', () => {
//     winnerPopup.style.display = 'none';
// });

// game.playNewround();

// create factory functions and modules
