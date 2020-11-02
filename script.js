// Loads boards

const easy = {
    1: [ "**198476*6***57***8*7*1****96*3*81*5185*2**733*****2*821*****36***1****4*96**251*", "" ],
    2: [ "", "" ]
};
const medium = {
    1: [ "****35**2*1*7*85**25*****3137*26***5**95*1*63**1*7*****4*81*****96******8****4***", "" ],
    2: [ "", "" ]
};
const hard = {
    1: [ "*5*********3*9**62****6*5389****134*******7***3*2********9*5*8*5****7***1*96****4", "" ],
    2: [ "", "" ]
}

// ALL GLOBAL VARIABLES
let selectedNums;
let selectedCell;
let disableSelection;
let board;

window.onload = function() {
    // START GAME 
    document.querySelector('#start-btn').addEventListener('click', startGame);
    // CHOOSING A NUMBER
    
    // CHOOSING A CELL

}

function startGame() {
    // SET BOARD DIFFICULTY
    if (document.querySelector('#diff-easy').checked) {
        board = easy[1][0];
    } else if (document.querySelector('#diff-medium').checked) {
        board = medium[1][0];
    } else if (document.querySelector('#diff-hard').checked) {
        board = hard[1][0];
    }

    // ENABLE NUMBER SELECTION
    disableSelection = false;
    // CREATE BOARD
    generateBoard(board);
    // START TIMER

    // SET THEME

    // SHOW SIDE PANEL
    document.querySelector('#side-panel').classList.remove('hidden');
}

function generateBoard(board) {
    // clear previous boards
    resetGame();
    // create cells<
    let cellCount = 0;
    for (let i = 0; i < 81; i++) {
        let cell = document.createElement('p')
        // for the prefilled numbers, set them up accordingly
        if (board[i] != "*") {
         cell.textContent = board[i];
        } else {
         cell.addEventListener('click', () => {

            })
        }
     cell.id = cellCount;
     cellCount++;
     cell.classList.add('cell')
        // 
        if ((cell.id > 17 && cell.id < 27) || (cell.id > 44 && cell.id < 54)) {
         cell.classList.add('bottomBorder')
        }
        if (cell.id % 9 === 2 || cell.id % 9 === 5) {
         cell.classList.add('rightBorder')
        }
        // add cells to board
        document.querySelector('#board').appendChild(cell)
    }
}

function play() {

}

function calculateLives() {

}

function startTimer() {

}

function resetGame() {

}

function randomGenerator() {

}