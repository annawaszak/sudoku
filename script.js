// Loads boards

const easy = {
    1: [ "**198476*6***57***8*7*1****96*3*81*5185*2**733*****2*821*****36***1****4*96**251*", "531984762649257381827613459962378145185429673374561298218745936753196824496832517" ],
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
let board;
let selectedNums;
let selectedCell;
let disableSelection;
let countdown;
let lives;

window.onload = function() {
    // START GAME 
    document.querySelector('#start-btn').addEventListener('click', startGame);
    // CHOOSING A NUMBER
    for (let i = 0; i < 9; i++) {
        let number = document.querySelector('#side-panel').children;
        number[i].addEventListener('click', function() {
            if (!disableSelection) {
                if (number[i].classList.contains('selected')) {
                    number[i].classList.remove('selected');
                    selectedNum = null;
                } else {
                    for (let j = 0; j < 9; j++) {
                        number[j].classList.remove('selected');
                        selectedNum = null;
                    }
                    number[i].classList.add('selected');
                    selectedNum = number[i];
                    pickNumber(board, solution);
                }
            }
        })
    }    
}

function startGame() {
    // SET BOARD DIFFICULTY
    if (document.querySelector('#diff-easy').checked) {
        board = easy[1][0];
        solution = easy[1][1];
    } else if (document.querySelector('#diff-medium').checked) {
        board = medium[1][0];
        solution = medium[1][1];
    } else if (document.querySelector('#diff-hard').checked) {
        board = hard[1][0];
        // solution = hard[1][1];
    }
    // ENABLE NUMBER SELECTION
    disableSelection = false;
    // CREATE BOARD
    generateBoard(board);
    // START TIMER
    document.querySelector('#timer').classList.remove('hidden');
    startCountdown()

    // SET LIVES
    document.querySelector('#lives').classList.remove('hidden');
    lives = 3;
    document.querySelector('#lives').textContent = `Lives remaining: ${lives}`
    // SET THEME

    // SHOW SIDE PANEL
    document.querySelector('#side-panel').classList.remove('hidden');
}

function generateBoard(board, solution) {
    // clear previous boards
    resetGame();
    // create cells<
    let cellCount = 0;
    for (let i = 0; i < 81; i++) {
        let cell = document.createElement('p')
        // set the 
        if (board[i] != "*") {
         cell.textContent = board[i];
        } else {
            cell.addEventListener('click', () => {
                if (!disableSelection) {
                    if (cell.classList.contains('selected')) {
                        cell.classList.remove('selected')
                        selectedCell = null
                    } else {
                        for (let i = 0; i < 81; i++) {
                            document.querySelectorAll('.cell')[i].classList.remove('selected');
                            selectedCell = null
                        }
                        cell.classList.add('selected');
                        selectedCell = cell;
                        pickNumber(board, solution)
                    }
                }
            })
        }
        // add an id to each cell
        cell.id = cellCount;
        cellCount++;
        // add class 'cell' to each cell
        cell.classList.add('cell')
        // add dividers by adding additional borders
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

function pickNumber(board, solution) {
    if (selectedNum && selectedCell) {
        selectedCell.innerText = selectedNum.innerText;
        selectedNum = null;
        selectedCell = null;
    }
    win(board, solution)
}

function startCountdown() {
    let time;
    if (document.querySelector('#time-5').checked) time = 60;
    else if (document.querySelector('#time-10').checked) time = 300;
    else if (document.querySelector('#time-15').checked) time = 600;
    else time = 0;

    countdown = setInterval(function () {
        // convert to the right format
        let minutes = Math.floor(time / 60);
        if (minutes < 10 ) minutes = '0' + minutes;
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = '0' + seconds;
        // 
        time--;
        // display
        document.querySelector('#timer').innerHTML = 'Time remaining: ' + minutes + ':' + seconds;
        lose()
        // if (time === 0) {
        //     clearInterval(countdown);
        //     document.querySelector('#timer').innerHTML = "Time's up!" ;
        //     lose()
        // }
    }, 1000)
    
    // timer = setInterval(function () {
    //     // convert to the right format
    //     let minutes = Math.floor(time / 60);
    //     if (minutes < 10 ) minutes = '0' + minutes;
    //     let seconds = Math.floor(time % 60);
    //     if (seconds < 10) seconds = '0' + seconds;
    //     // 
    //     time++;
    //     console.log(time)
    //     // display
    //     document.querySelector('#timer').innerHTML = 'Time: ' + minutes + ':' + seconds;
    // }, 1000)
    
}

function win(board, solution) {
    console.log(board)
    console.log(solution)
    if (board === solution) {
        alert('You won!')
    }
    // if time runs out
    // if lives run out

    // disableSelection = true
}

function lose() {
    clearInterval(countdown);
    document.querySelector('#timer').innerHTML = "Time's up!";
    lives--;
}

function resetGame() {
    // clear board
    let cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
     cells[i].remove();
    }
    // clear timer
    if (countdown) clearTimeout(countdown);
    // deselect any numbers
    for (let i = 0; i < 9; i++) {
        document.querySelector('#side-panel').children[i].classList.remove('selected');
    }
    // clear selected variables
    selectedCell = null;
    selectedNum = null;
}

function randomGenerator() {

}