const game = (() => {
    // select the grid cells
    let gridCell = document.querySelectorAll('div[class^="grid"]');
    // select players' names and avatars
    let player1Name = document.querySelector('#player1-name');
    let displayName1 = document.querySelector('.display-name1');
    let player1ava = document.querySelector("label[for='player1-name']");

    let player2Name = document.querySelector('#player2-name');
    let displayName2 = document.querySelector('.display-name2');
    let player2ava = document.querySelector("label[for='player2-name']");
    // select the score panel 
    let score = document.querySelector('.score');
    // select start, disbled start, restart buttons
    let startBtn = document.querySelector('.start-btn');
    let disabledBtn = document.querySelector('.start-disabled-btn');
    let restartBtn = document.querySelector('.restart-btn');
    // select elements from the pop-up window
    let winnerPopup = document.querySelector('.bg-modal');
    let resultText = document.querySelector('.result');
    let resultBtn = document.querySelector('.result-btn');
    let smallBoard = document.querySelectorAll('div[class^="small-grid"]');
    
    // count that lets us to play turns
    let count = 0;
    // score
    let pointsX = 0;
    let pointsO = 0;
    // win patterns
    const xWin = 'X,X,X';
    const oWin = 'O,O,O';

    // get current gameboard state
    function gameboardUpdate() {
        let gameBoard = [];
        gridCell.forEach(cell => {
            gameBoard.push(cell.innerText);
        })
        return gameBoard;
    }

    function playTurns(cell) {
        if (count >= 9 || disabledBtn.style.display === 'none' || cell.innerText !== '') {
            cell.innerText = cell.innerText;
        } else if (count % 2) {
            player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
            player2ava.style = "box-shadow: none; box-shadow: none;";
            cell.innerText = 'O';
            count++;
        } else {
            player2ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
            player1ava.style = "box-shadow: none; box-shadow: none;";
            cell.innerText = 'X';
            count++;
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
            winnerPopup.style.display = 'flex';
            resultText.innerText = 'Winner X';
            pointsX++;
            score.innerText = pointsX + ':' + pointsO;
            // create and update a gameboard copy in a pop-up window
            for (let i = 0; i < currGameBrd.length; i++) {
                smallBoard[i].innerText = currGameBrd[i];
            }
        } else if (oCheck) {
            winnerPopup.style.display = 'flex';
            resultText.innerText = 'Winner O';
            pointsO++;
            score.innerText = pointsX + ':' + pointsO;
            // create and update a gameboard copy in a pop-up window
            for (let i = 0; i < currGameBrd.length; i++) {
                smallBoard[i].innerText = currGameBrd[i];
            }
        } else if (count >= 9 && !(xCheck) && !(oCheck)) {
            winnerPopup.style.display = 'flex';
            resultText.innerText = 'Draw!';
            // create and update a gameboard copy in a pop-up window
            for (let i = 0; i < currGameBrd.length; i++) {
                smallBoard[i].innerText = currGameBrd[i];
            }
        }
    }
    
    const playGame = () => {
        gridCell.forEach(cell => {
            cell.addEventListener('click', () => {
                cell = cell;
                playTurns(cell);
                // check if there is a winner
                if (cell.innerText !== '') {
                    checkWinner();
                }
            });
        });
    }
    
    function restartGame() {
        // don't affect players' avatars if the start button wasn't pressed
        if (disabledBtn.style.display === 'flex') {
            player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
            player2ava.style = "box-shadow: none; box-shadow: none;";
        }
        // reset the count to 0
        count = 0;        
            gridCell.forEach(cell => {
                cell.innerText = '';
            })
    }
    
    function playNewround() {
        // show whose turn
        player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
        player2ava.style = "box-shadow: none; box-shadow: none;";
        // hide pop=up window
        winnerPopup.style.display = 'none';
        // reset the counter
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
        // turn off the start button
        startBtn.style.display = 'none';
        disabledBtn.style.display = 'flex';
        // display score
        score.style.display = 'flex';
        score.innerText = pointsX + ':' + pointsO;
        // show whose turn
        player1ava.style = "box-shadow: 0 0 10px black; box-shadow: 0 0 10px black;";
        // show default names if the input is empty
        if (player1Name.value === '' || player2Name.value === '') {
            displayName1.innerText = 'Secret agent X';
            displayName2.innerText = 'Secret agent O';
        } else {
            displayName1.innerText = player1Name.value;
            displayName2.innerText = player2Name.value;
        }
        playGame();
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
    resultBtn.addEventListener('click', playNewround);

    return {playGame};
})();