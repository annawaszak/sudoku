
// ALL GLOBAL VARIABLES
let startBoard; //the board with sudoku at the very beggining
let updatedBoard = []; //the updated version of the board after each move
let solution; //solved sudoku string to compare to
let selectedNum; //the selected letter from the side panel 
let selectedCell; //the selected cell on the board
let disableSelection; //so that players can't make selection after the game in over
let countdown;
let result; // if true - won; if false - lost

window.onload = function() {
    // START GAME 
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
                    setNumber();
                }
            }
        })
    }
}

function startGame() {
    // SET BOARD DIFFICULTY
    let random = Math.floor(Math.random()*10)+1;
    if (document.querySelector('#diff-easy').checked) {
        startBoard = test[1][0];
        solution = test[1][1];
        // startBoard = easy[Math.floor(Math.random()*10)+1][0];
        // solution = easy[Math.floor(Math.random()*10)+1][1];
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
    generateBoard(startBoard, updatedBoard);
    // START COUNTDOWN
    document.querySelector('.countdown').classList.remove('hidden');
    startCountdown(updatedBoard, solution);
    // SHOW SIDE PANEL
    document.querySelector('.side-panel').classList.remove('hidden');
    document.querySelector('.side-panel').style.display = 'flex';
    // ENABLE HINTS
    // document.querySelector('.hint').classList.remove('hidden');
    // document.querySelector('.hint').addEventListener('click', function() {
    //     document.querySelector('.hint').classList.toggle('active')
    //     giveHint()
    // });
    // ENABLE SHOW MISTAKES
    document.querySelector('.mistakes').classList.remove('hidden');
    document.querySelector('.mistakes').addEventListener('click', function() {
        document.querySelector('.mistakes').classList.toggle('active');
        showMistakes(updatedBoard, solution);
    });
     // ENABLE SHOW SOLUTION
     document.querySelector('.solution').classList.remove('hidden');
     document.querySelector('.solution').addEventListener('click', function() {
         document.querySelector('.solution').classList.toggle('active');
         showSolution(solution);
         console.log(solution)
     });
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
};
// function pickNumber pickCell

function setNumber() {
    if (selectedNum && selectedCell) {
        // display the selected number in the selected cell
        selectedCell.innerText = selectedNum.innerText;
        // assign the new number to board in DOM
        updatedBoard[selectedCell.id] = selectedNum.getAttribute('value');
        // reset selected cells
        selectedNum = null;
        selectedCell = null;
    }
};

// function startCountdown(updatedBoard, solution) {
//     let time;
//     if (document.querySelector('#time-5').checked) time = 300;
//     else if (document.querySelector('#time-10').checked) time = 600;
//     else if (document.querySelector('#time-15').checked) time = 900;
//     else startTimer();

//     countdown = setInterval(function () {
//         // count down
//         time--;
//         // convert
//         let minutes = Math.floor(time / 60);
//         if (minutes < 10 ) minutes = '0' + minutes;
//         let seconds = Math.floor(time % 60);
//         if (seconds < 10) seconds = '0' + seconds;
//         console.log('m', minutes, 's', typeof seconds, 't', time)
//         // display
//         document.querySelector('.countdown').innerHTML = 'Time remaining: ' + minutes + ':' + seconds;
//         // end
//         endGame(updatedBoard, solution, time)
//     }, 1000)
//     return time;
// };

function countdownOrTimer() {
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

function startCountdown() {
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
    }, 1000)
    // end
    if (time === -2) {
        loseGame()
    }
}

function startTimer() {
    const timer = setInterval(function () {
        // count down
        time++;
        // display
        document.querySelector('.countdown').innerHTML = 'Time: ' + minutes + ':' + seconds;
    }, 1000)
    // end
    if (time === 86400) {
        clearInterval(timer);
        document.querySelector('.countdown').innerHTML = "24 hours is quite enough";
    }
}

// function giveHint(updatedBoard, selectedCell, solution) {
//     // if (document.querySelector('.hint').classList.containts('incorrect')) {
//         if (updatedBoard.join('')[selectedCell.id] !== solution[selectedCell.id]) {
//             console.log("updatedBoard.join('')[selectedCell.id]", updatedBoard.join('')[selectedCell.id])
//             console.log("solution[selectedCell.id]", solution[selectedCell.id])
//             selectedCell.style.color = 'red';
//         }
//     // }
// };

function showMistakes(updatedBoard, solution) {
    if (document.querySelector('.mistakes').classList.contains('active')) {
        for (let i = 0; i < solution.length; i++) {
            if (updatedBoard.join('')[i] !== solution[i]) {
                document.querySelectorAll('.cell')[i].classList.add('incorrect');
                disableSelection = true;
            } 
        }
    } else {
        for (let i = 0; i < 81; i++) {
            document.querySelectorAll('.cell')[i].classList.remove('incorrect');
            disableSelection = false;
        }
    }
};

function showSolution(solution) {
    if (document.querySelector('.solution').classList.contains('active')) {
        for (let i = 0; i < 81; i++) {
            console.log(solution)
            document.querySelectorAll('.cell')[i].textContent = solution[i];
            disableSelection = true;
            clearInterval(countdown);
            document.querySelector('.countdown').innerHTML = "You gave up :( <br> Click 'New Game' to try again";
        }
    } 
}

function popup(result) {
    const images = result ? winImages : loseImages;
    const popup = document.querySelector(".popup");
    popup.style.backgroundImage = `url(./resources/${images[Math.floor(Math.random() * images.length)]})`;
    popup.style.display = "block";
    setTimeout(() => { 
        popup.style.display = "none";
    }, 5000);
};

// function endGame(updatedBoard, solution, time) {
//     // win
//     if (updatedBoard.join('') === solution) {
//         clearInterval(countdown);
//         document.querySelector('.countdown').innerHTML = "You won!!";
//         result = true;
//         popup(result);
//         disableSelection = true;
//     }
//     // lose
//     if (time === -2 && updatedBoard.join('') !== solution) {
//         clearInterval(countdown);
//         document.querySelector('.countdown').innerHTML = "Time's up!";
//         result = false;
//         popup(result);
//         disableSelection = true;
//     }
// }

function winGame(updatedBoard, solution, time) {
    if (updatedBoard.join('') === solution) {
        clearInterval(countdown);
        document.querySelector('.countdown').innerHTML = "You won!!";
        result = true;
        popup(result);
        disableSelection = true;
    }
}

function loseGame() {
    clearInterval(countdown);
    document.querySelector('.countdown').innerHTML = "Time's up!";
    result = false;
    popup(result);
    disableSelection = true;
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
    // hide help buttons
    document.querySelector('.hint').classList.add('hidden');
    document.querySelector('.mistakes').classList.add('hidden');
}