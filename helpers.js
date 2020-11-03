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

// string to array of arrays
const convertIntoArray = (str) => {
    let changed = str.split('-').join('0');
    let array = [];
    for(let i = 0; i < 9; i++) {
        let arrayOfStrings = changed.slice(i*9, (i*9)+9).split('');
        let arrayOfNumbers = arrayOfStrings.map(string => Number(string));
        array.push(arrayOfNumbers);
    }
    return array;
}
// sudoku solver
function solve(sudoko) {
    let numbers = [1,2,3,4,5,6,7,8,9];
    let copied = sudoko.map(row => [...row]);
    const checkRow = (r, n) => numbers.every(i => copied[r][i-1] !== n);
    const checkColumn = (c, n) => numbers.every(i => copied[i-1][c] !== n);
    const isFinished = s => s.every(row => row.every(n => n !== 0));
    const checkBox = (r,c,n) => {
        const rb = Math.floor(r/3) * 3;
        const cb = Math.floor(c/3) * 3;
        return [0,1,2].every(ri => [0,1,2].every(ci => copied[rb + ri][cb + ci] !== n));
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (copied[i][j] === 0) {
                const options = numbers.filter(n => checkRow(i, n) && checkColumn(j, n) && checkBox(i,j,n));
                if (options.length === 1) {
                    copied[i][j] = options[0];
                    i = 0;
                    j = 0;
                } else if (options.length === 0) {
                    return undefined;
                }
            }
        }
    }
    if (isFinished(copied)) {
        return copied;
    } else {
        // brute force
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (copied[i][j] === 0) {
                    const options = numbers.filter(n => checkRow(i, n) && checkColumn(j, n) && checkBox(i,j,n));
                    for (const option of options) {
                        copied[i][j] = option;
                        const solved = solve(copied);
                        if (solved) {
                            return solved;
                        }
                    }
                    copied[i][j] = 0;
                }
            }
        }
    }
       
    // No solution
    return undefined;
}

// array of arrays to string
function convertIntoString(arr) {
    return arr.map(array => array.toString()).toString().split(',').join('');
}

// combine all functions together
function solveSudoku(string) {
    return convertIntoString(solve(convertIntoArray(string)));
}

// return entire object with solved sudokus
function addSolvedSudokuToObject(obj) {
    for (let i = 0; i < Object.values(obj).length; i++) {
        Object.values(obj)[i][1] = solveSudoku(Object.values(obj)[i][0]);
    }
    return obj;
}

console.log(addSolvedSudokuToObject(hard));