
// ALL GLOBAL VARIABLES
let startBoard; //the board with sudoku at the very beggining
let updatedBoard = []; //the updated version of the board after each move
let solution; //solved sudoku string to compare to
let selectedNums; //the selected letter from the side panel 
let selectedCell; //the selected cell on the board
let disableSelection; //so that players can't make selection after the game in over
let countdown;
let result; // if true - won; if false - lost

window.onload = function() {
    // START GAME 
    console.log(document.querySelector('.diff-easy'))
    document.querySelector('.start-btn').addEventListener('click', startGame);
    // CHOOSING A NUMBER
    for (let i = 0; i < 9; i++) {
        let number = document.querySelector('.side-panel').children;
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
                    pickNumber(solution);
                }
            }
        })
    }
}

function startGame() {
    // SET BOARD DIFFICULTY
    if (document.querySelector('#diff-easy').checked) {
        startBoard = test[1][0];
        solution = test[1][1];
        // startBoard = easy[Math.floor(Math.random()*10)+1][0];
        // solution = easy[Math.floor(Math.random()*10)+1][1];
    } else if (document.querySelector('#diff-medium').checked) {
        startBoard = medium[Math.floor(Math.random()*10)+1][0];
        solution = medium[Math.floor(Math.random()*10)+1][1];
    } else if (document.querySelector('#diff-hard').checked) {
        startBoard = hard[Math.floor(Math.random()*10)+1][0];
        solution = hard[Math.floor(Math.random()*10)+1][1];
    } else if (document.querySelector('#diff-expert').checked) {
        startBoard = expert[Math.floor(Math.random()*10)+1][0];
        solution = expert[Math.floor(Math.random()*10)+1][1];
    }
    // SET UP BOARD IN DOM
    updatedBoard = startBoard.split('');
    // ENABLE NUMBER SELECTION
    disableSelection = false;
    // CREATE BOARD
    generateBoard(startBoard, updatedBoard);
    // START COUNTDOWN
    document.querySelector('.countdown').classList.remove('hidden');
    startCountdown(updatedBoard, solution);
    // SHOW SIDE PANEL
    document.querySelector('.side-panel').classList.remove('hidden');
    document.querySelector('.side-panel').style.display = 'flex';
    // ENABLE HINTS
    document.querySelector('.hint').classList.remove('hidden');
    document.querySelector('.hint').addEventListener('click', function() {
        document.querySelector('.hint').classList.toggle('incorrect')
        giveHint()
    })
}

function generateBoard(startBoard) {
    // clear previous boards
    resetGame();
    // create cells<
    let cellCount = 0;
    for (let i = 0; i < 81; i++) {
        let cell = document.createElement('p')
        // set the 
        if (startBoard[i] != "-") {
         cell.textContent = startBoard[i];
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
                        pickNumber(solution)
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
        document.querySelector('.board').appendChild(cell)
        }
}
// function setNumber(solution) {
// }

function pickNumber(solution) {
    if (selectedNum && selectedCell) {
        // display the selected number in the selected cell
        selectedCell.innerText = selectedNum.innerText;
        // assign the new number to board in DOM
        updatedBoard[selectedCell.id] = selectedNum.getAttribute('value');
        // reset selected cells
        selectedNum = null;
        selectedCell = null;
    }
}

function startCountdown(updatedBoard, solution) {
    let time;
    if (document.querySelector('#time-5').checked) time = 300;
    else if (document.querySelector('#time-10').checked) time = 600;
    else if (document.querySelector('#time-15').checked) time = 900;
    else time = 0;

    countdown = setInterval(function () {
        // convert
        let minutes = Math.floor(time / 60);
        if (minutes < 10 ) minutes = '0' + minutes;
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = '0' + seconds;
        // count down
        time--;
        // display
        document.querySelector('.countdown').innerHTML = 'Time remaining: ' + minutes + ':' + seconds;
        // end
        endGame(updatedBoard, solution, time)
    }, 1000)
    return time;
};

function giveHint(selectedCell, solution) {
    // if (document.querySelector('.hint').classList.containts('incorrect')) {
        if (updatedBoard.join('')[selectedCell.id] !== solution[selectedCell.id]) {
            selectedCell.style.color = 'red';
        }
    // }
};

function popup(result) {
    const images = result ? winImages : loseImages;
    const popup = document.querySelector(".popup");
    popup.style.backgroundImage = `url(./resources/${images[Math.floor(Math.random() * images.length)]})`;
    popup.style.display = "block";
    setTimeout(() => { 
        popup.style.display = "none";
    }, 5000);
};

function endGame(updatedBoard, solution, time) {
    
    // win
    if (updatedBoard.join('') === solution) {
        clearInterval(countdown);
        document.querySelector('.countdown').innerHTML = "You won!!";
        result = true;
        popup(result);
        disableSelection = true;
    }
    // lose
    if (time === -2 && updatedBoard.join('') !== solution) {
        clearInterval(countdown);
        document.querySelector('.countdown').innerHTML = "Time's up!";
        result = false;
        popup(result);
        disableSelection = true;
    }
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
        document.querySelector('.side-panel').children[i].classList.remove('selected');
    }
    // clear selected variables
    selectedCell = null;
    selectedNum = null;
    // hide side panel
    document.querySelector('.side-panel').classList.add('hidden');
}