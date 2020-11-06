
// ALL GLOBAL VARIABLES
let startBoard; //the board with sudoku at the very beggining
let updatedBoard = []; //the updated version of the board after each move
let solution; //solved sudoku string to compare to
let selectedNum; //the selected letter from the side panel 
let selectedCell; //the selected cell on the board
let disableSelection; //so that players can't make selection after the game in over
let countdown;
let timer;
let result; // if true - won; if false - lost
let random;

window.onload = function() {
    // START GAME 
    document.querySelector('.start-btn').addEventListener('click', startGame);
    // CHOOSING A NUMBER
    pickCell();
}

function startGame() {
    // SET BOARD DIFFICULTY
    random = Math.floor(Math.random()*10)+1;
    if (document.querySelector('#diff-easy').checked) {
        // startBoard = test[1][0];
        // solution = test[1][1];
        startBoard = easy[random][0];
        solution = easy[random][1];
    } else if (document.querySelector('#diff-medium').checked) {
        startBoard = medium[random][0];
        solution = medium[random][1];
    } else if (document.querySelector('#diff-hard').checked) {
        startBoard = hard[random][0];
        solution = hard[random][1];
    } else if (document.querySelector('#diff-expert').checked) {
        startBoard = expert[random][0];
        solution = expert[random][1];
    }
    // SET UP BOARD IN DOM
    updatedBoard = startBoard.split('');
    // ENABLE NUMBER SELECTION
    disableSelection = false;
    // CREATE BOARD
    generateBoard(startBoard);
    // START COUNTDOWN/TIMER
    resetTimer()
    countdownOrTimer();
    // generate everything besides the board
    generateSide()
}

function generateSide() {
     // SHOW SIDE PANEL
     document.querySelector('.side-panel').classList.remove('hidden');
     document.querySelector('.side-panel').style.display = 'flex';
     // ENABLE CLEANING THE BOARD
     cleanBoard(startBoard)
     // ENABLE HINTS
     // giveHint()
     // ENABLE SHOW MISTAKES
     showMistakes(updatedBoard, solution);
      // ENABLE SHOW SOLUTION
     showSolution(solution)
}

function generateBoard(startBoard) {
    // clear previous boards
    resetGame();
    // create cells<
    let cellCount = 0;
    for (let i = 0; i < 81; i++) {
        let cell = document.createElement('p')
        // set the 
        if (startBoard[i] != "-" && startBoard[i] != "*") {
            cell.textContent = startBoard[i];
        } else if (startBoard[i] === "*") {
            cell.textContent = "❤️"
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
                        setNumber()
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
    console.log(updatedBoard, solution)
};

// function  pickCell
function pickCell() {
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
                    setNumber();
                }
            }
        })
    }
}

function setNumber() {
    if (selectedNum && selectedCell) {
        // display the selected number in the selected cell
        selectedCell.innerText = selectedNum.innerText;
        // assign the new number to board in DOM
        updatedBoard[selectedCell.id] = selectedNum.getAttribute('value');
        winGame(updatedBoard, solution)
        // reset selected cells
        selectedNum = null;
        selectedCell = null;
    }
};

function countdownOrTimer() {
    document.querySelector('.countdown').classList.remove('hidden');
    let time = 0;
    if (document.querySelector('#time-5').checked) {
        time = 300;
        startCountdown(time);
    } else if (document.querySelector('#time-10').checked) {
        time = 600;
        startCountdown(time);
    } else if (document.querySelector('#time-15').checked) {
        time = 900;
        startCountdown(time);
    } else {
        startTimer(time)
    }
}

function startCountdown(time) {
    countdown = setInterval(function () {
        // count down
        time--;
        // convert
        let minutes = Math.floor(time / 60);
        if (minutes < 10 ) minutes = '0' + minutes;
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = '0' + seconds;
        // display
        document.querySelector('.countdown').innerHTML = 'Time remaining: ' + minutes + ':' + seconds;
        // end
        if (time == 86400) {
            loseGame()
        }
    }, 1000)
}

function startTimer(time) {
    timer = setInterval(function () {
        // count down
        time++;
        // convert
        let hours = Math.floor(time / 3600);
        if (hours < 10 ) hours = '0' + hours;
        let minutes = Math.floor((time % 3600) / 60);
        if (minutes < 10 ) minutes = '0' + minutes;
        let seconds = Math.floor(time % 60);
        if (seconds < 10) seconds = '0' + seconds;
        // display
        document.querySelector('.countdown').innerHTML = 'Time: ' + hours + ':' + minutes + ':' + seconds;
        // end
        if (time === 86400) {
        clearInterval(timer);
        document.querySelector('.countdown').innerHTML = "24 hours is quite enough, don't you think?";
        }
    }, 1000)
}

function cleanBoard(startBoard) {
    document.querySelector('.clean-board').classList.remove('hidden');
    document.querySelector('.clean-board').addEventListener('click', function() {
        document.querySelector('.clean-board').classList.add('active');
        if (document.querySelector('.clean-board').classList.contains('active')) {
            generateBoard(startBoard);
            generateSide();
        }
        document.querySelector('.clean-board').classList.remove('active');
    });
};

// function giveHint(updatedBoard, selectedCell, solution) {
//     document.querySelector('.hint').classList.remove('hidden');
//     document.querySelector('.hint').addEventListener('click', function() {
//         document.querySelector('.hint').classList.toggle('active')
//         if (document.querySelector('.hint').classList.containts('incorrect')) {
//             if (updatedBoard.join('')[selectedCell.id] !== solution[selectedCell.id]) {
//             console.log("updatedBoard.join('')[selectedCell.id]", updatedBoard.join('')[selectedCell.id])
//             console.log("solution[selectedCell.id]", solution[selectedCell.id])
//             selectedCell.style.color = 'red';
//             }
//         }
//     });  
// };

function showMistakes(updatedBoard, solution) {
    document.querySelector('.mistakes').classList.remove('hidden');
    document.querySelector('.mistakes').addEventListener('click', function() {
        document.querySelector('.mistakes').classList.toggle('active');
        if (document.querySelector('.mistakes').classList.contains('active')) {
            for (let i = 0; i < 81; i++) {
                if (updatedBoard.join('')[i] !== solution[i] && updatedBoard.join('')[i] !== '-') {
                    console.log('board', i, updatedBoard.join('')[i], 'solution', solution[i])
                    document.querySelectorAll('.cell')[i].classList.add('incorrect');
                    disableSelection = true;
                } 
            }
        } else {
            for (let i = 0; i < 81; i++) {
                document.querySelectorAll('.cell')[i].classList.remove('incorrect');
                disableSelection = false;
            }
        };
    });
};

function showSolution(solution) {
    document.querySelector('.solution').classList.remove('hidden');
     document.querySelector('.solution').addEventListener('click', function() {
        for (let i = 0; i < 81; i++) {
            document.querySelectorAll('.cell')[i].classList.remove('incorrect');
            document.querySelectorAll('.cell')[i].classList.remove('selected');
        }
        document.querySelector('.solution').classList.add('active');
         if (document.querySelector('.solution').classList.contains('active')) {
            for (let i = 0; i < 81; i++) {
                if (solution[i] === "*") {
                    document.querySelectorAll('.cell')[i].textContent = "❤️"
                } else {
                    document.querySelectorAll('.cell')[i].textContent = solution[i]
                }
                disableSelection = true;
                resetTimer();
                document.querySelector('.countdown').innerHTML = "You gave up :( <br> Click 'New Game' to try again";
            }
        };
     });
};

// for (let i = 0; i < 81; i++) {
//     document.querySelectorAll('.cell')[i].textContent = solution[i];
//     disableSelection = true;
//     clearInterval(countdown);
//     document.querySelector('.countdown').innerHTML = "You gave up :( <br> Click 'New Game' to try again";
// }

// function popup(result) {
//     const images = result ? winImages : loseImages;
//     const popup = document.querySelector(".popup");
//     popup.style.backgroundImage = `url(./resources/${images[Math.floor(Math.random() * images.length)]})`;
//     popup.style.display = "block";
//     setTimeout(() => { 
//         popup.style.display = "none";
//     }, 10000000);
// };

function winGame(updatedBoard, solution) {
    if (updatedBoard.join('') === solution) {
        clearInterval(countdown);
        document.querySelector('.countdown').innerHTML = "You won!!";
        result = true;
        popup(result);
        disableSelection = true;
    }
};

function loseGame() {
    console.log('test')
    clearInterval(countdown);
    document.querySelector('.countdown').innerHTML = "Time's up!";
    result = false;
    popup(result);
    disableSelection = true;
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

function resetGame() {
    // clear board
    let cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
     cells[i].remove();
    }
    // deselect any numbers
    for (let i = 0; i < 9; i++) {
        document.querySelector('.side-panel').children[i].classList.remove('selected');
    }
    // clear selected variables
    selectedCell = null;
    selectedNum = null;
    // hide side panel
    document.querySelector('.side-panel').classList.add('hidden');
<<<<<<< HEAD
    // deactivate and  hide help buttons
=======
    // hide help buttons
>>>>>>> 3bd40ef6b1dadc917ef8e61c3de05c4ac56dabd9
    document.querySelector('.hint').classList.remove('active');
    document.querySelector('.hint').classList.add('hidden');
    document.querySelector('.mistakes').classList.remove('active');
    document.querySelector('.mistakes').classList.add('hidden');
    document.querySelector('.solution').classList.remove('active');
    document.querySelector('.solution').classList.add('hidden');
    document.querySelector('.clean-board').classList.remove('active');
    document.querySelector('.clean-board').classList.add('hidden');
};

function resetTimer() {
    if (countdown) clearTimeout(countdown);
    if (timer) clearTimeout(timer);
}