// Loads boards
const easy = {
    1: [ '--198476-6---57---8-7-1----96-3-81-5185-2--733-----2-821-----36---1----4-96--251-', '531984762649257381827613459962378145185429673374561298218745936753196824496832517' ], 
    2: [ '6-3--4--142-913-65-1---7----3--7----7----8--2--816---787-3-5-293497--1--2-68--3-4', '683254791427913865915687243132479586764538912598162437871345629349726158256891374' ], 
    3: [ '---4---87-8-7--49-3--92--1---167--4-64-83-275-27549-3---6-5--2-218---7---53--4---', '062415387185763492374928516531672948649831275827549631496157823218396754753284169' ], 
    4: [ '-2-5-3--1-5----349-7-19--56------7--73-2--5-8--5-7413---83-9---3-2--69--197-526-3', '026543871851627349473198256219835764734261598685974132568319427342786915197452683' ], 
    5: [ '32168----64721-58-----3-1-65---7----49---176----9---5--74--8-311--34--7883-19----', '321685497647219583985734126562473819493851762718926354274568931159342678836197245' ], 
    6: [ '--9218---17--968---4--5---6451-6-37------5--99-237-5--6--5-1-------49257-948---13', '069218745175496832248753196451962378736185429982374561627531984813649257594827613' ], 
    7: [ '--6---3----19-376-473---8---6-72-93-34-5---781--38-24--8-2-14--73----1---194-75--', '026178354851943762473652819568724931342519678197386245685231497734895126219467583' ], 
    8: [ '49657---2218-6374-75-----9-5-1-26---6--3-8-5--2-4--6139----43----5--74--3--2---6-', '496571832218963745753842196531726984649318257827495613962154378185637429374289561' ], 
    9: [ '28754---6-5---2849-6--3--7---6-573--1-8---4-7-73---9616--4-------57-3-9-7--92--15', '287549136351672849469831572946157328128396457573284961692415783815763294734928615' ], 
    10: [ '13-865-49-9837--1---4-29--83-95-1-76-7-2-6---2-674---142----1----5-------8-9---24', '132865749598374612764129358349581276871296435256743981427658193915432867683917524' ]
};
const medium = { 
    1: [ '----35--2-1-7-85--25-----3137-26---5--95-1-63--1-7-----4-81-----96------8----4---', '984135672613728549257946831378269415429581763561473928745812396196357284832694157' ],
    2: [ '-96-----8---3---4----24------1----89---8-37----759------2451---1-5--69--37-98-16-', '496175238218369547753248691531627489649813752827594316962451873185736924374982165' ],
    3: [ '4---5-8-2---6-------34--196----76-8---9--------7--56-3---514----748-9-6-1--3---29', '496751832218693745753482196531276984649138257827945613962514378374829561185367429' ],
    4: [ '-8--7-1-2--4----9-2-9----64---9---27-4-6-791---7-5--8--2---------17-63-----89-2-6', '685479132734162598219538764568913427342687915197254683926345871851726349473891256' ],
    5: [ '-3------9---8----2-27--4---9--45-8--1----69--374--2-6-496-7-2-----36-----5-2---91', '531627489649813752827594316962451873185736924374982165496175238218369547753248691' ],
    6: [ '6-2489--------26----9-1--2-4-58-3-6--2----3-4--39-4--51-----4----65---18-8------3', '672489531831752649549316827415873962928165374763924185157238496396547218284691753' ],
    7: [ '15--9---22-4-5---63-6----45----31-8---------75------1---5-62---7--1--42-92---45-1', '157496832284753196396218745672531984831649257549827613415962378763185429928374561' ],
    8: [ '3-84-5-264-9-----856---83---8--7--13----4--7--5783-------1-7-6---539----1--------', '378415926429763158561928347984672513613549872257831694832157469745396281196284735' ],
    9: [ '685-79--221-5-8-6-7-4--2------3-58--85--2------3-9---6--8---42----6-7---1-------3', '685479132219538764734162598926345871851726349473891256568913427342687915197254683' ],
    10: [ '-8-5-3-7-2-7--4---6138-2-----2469-------8--9---6----------2--15429-----3--1--792-', '984513672257694831613872549832469157745281396196735284378926415429158763561347928' ] 
};
const hard = {
    1: [ '-5---------3-9--62----6-5389----134-------7---3-2--------9-5-8-5----7---1-96----4', "" ],
    2: [ '-9---43--3---8-5-1----1--4-8-1--693---63-5--7----9---5--5--92----416----------4-6', '' ],
    3: [ '-2-5----9---64-------8---3-4--9-2---73-------982---6-517-----2-------4----8-5--61', '' ],
    4: [ '--6-----1-3----8-----5-84---6--1--2---3--7----91---3-------517-15--26-------9-65-', '' ],
    5: [ '-------------9-74-7-3----96---67---4--9---25----54--1--62-1-3--18-76----------5--', '' ],
    6: [ '98----6-2--7-4-----1------956-4----------17----8-6-41---2---1---458----6-----72--', '' ],
    7: [ '49-----------4-3-675--9----9-2-----5---4---6--7---1---5--98-6---49--7----2---35--', '' ],
    8: [ '4-------89-5---3-------21---3--74-8-59---1----6--3----3--6---5-----439---5--9--7-', '' ],
    9: [ '36-9-41---------7---4--3-6-9-5-1-8-7---75---9-------3-7----8-9---354---8---------', '' ],
    10: [ '4--6--3----28--4--3--59-----7------2-2--3--151--9----4---17-9---------28-9------3', '' ],
}
const expert = {
    1: [ '-----4--2-6-2---3--8---35-9-4----1--1--7-5---5-3-------9-3-------4-61-----5---7--', '' ],
    2: [ '8653----------5-21--9----------7-13-4--1-----9----6----9-----5-5--4--26---3-6----', '' ],
    3: [ '-13---------5----45---27--3-5--6----73---5-2-9---------7--9-8-22-----19-----1----', '' ],
    4: [ '--4-5------39----5-6-34-----8-----7-7-2---83--1---2-4-2--4----------1--6---7---8-', '' ],
    5: [ '9623-------5--2-4-43-8-9--------5---3--6---1--8----42------7------12---8------7--', '' ],
    6: [ '-------27-8----5-----831-------9--1------7-9---628----4--7--18-37-4-5-------2----', '' ],
    7: [ '---65------84--91--------83-6-------35------1-197---5---7-----21------------2976-', '' ],
    8: [ '-6----3----2---7--1-7-8-4-----46---3---2----77-4--52------5--89-5-9--6-----------', '' ],
    9: [ '-4-----1-8----9---6-2-3---4---9-----7-3--5--------4561-57---83----2--7---8-------', '' ],
    10: [ '----6--27--------5--4-91-8---8-----4---43-----7--8--3-3----9--172-1------9----2--', '' ],
};

// ALL GLOBAL VARIABLES
let board;
let solution;
let selectedNums;
let selectedCell;
let disableSelection;
let countdown;

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
        board = easy[Math.floor(Math.random()*10)+1][0];
        solution = easy[Math.floor(Math.random()*10)+1][1];
    } else if (document.querySelector('#diff-medium').checked) {
        board = medium[Math.floor(Math.random()*10)+1][0];
        solution = medium[Math.floor(Math.random()*10)+1][1];
    } else if (document.querySelector('#diff-hard').checked) {
        board = hard[Math.floor(Math.random()*10)+1][0];
        solution = hard[Math.floor(Math.random()*10)+1][1];
    }
    // ENABLE NUMBER SELECTION
    disableSelection = false;
    // CREATE BOARD
    generateBoard(board);
    // START COUNTDOWN
    document.querySelector('#countdown').classList.remove('hidden');
    startCountdown(board, solution);
    // SET THEME

    // SHOW SIDE PANEL
    document.querySelector('#side-panel').classList.remove('hidden');
    // 
}

function generateBoard(board) {
    // clear previous boards
    resetGame();
    // create cells<
    let cellCount = 0;
    for (let i = 0; i < 81; i++) {
        let cell = document.createElement('p')
        // set the 
        if (board[i] != "-") {
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
                        pickNumber()
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

function pickNumber() {
    if (selectedNum && selectedCell) {
        selectedCell.innerText = selectedNum.innerText;
        selectedNum = null;
        selectedCell = null;
    }
}

function startCountdown(board, solution) {
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
        document.querySelector('#countdown').innerHTML = 'Time remaining: ' + minutes + ':' + seconds;
        // end
        if (time === 0) {
        endGame(board, solution, time)
        }
    }, 1000)

    return time;
    
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

function endGame(board, solution, time) {
    // win
    if (board === solution) {
        alert('You won!'); //replace with something nicer
        disableSelection = true;
    }
    // lose
    if (time === 0 && board !== solution) {
        clearInterval(countdown);
        document.querySelector('#countdown').innerHTML = "Time's up!";
        alert('You lost!'); //replace with something nicer
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
        document.querySelector('#side-panel').children[i].classList.remove('selected');
    }
    // clear selected variables
    selectedCell = null;
    selectedNum = null;
    // hide side panel
    document.querySelector('#side-panel').classList.add('hidden');
}