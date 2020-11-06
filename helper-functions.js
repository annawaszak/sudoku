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

// console.log(addSolvedSudokuToObject(easyWithNumbers))

// let step1 = convertIntoArray(expertWithNumbers[10][0])
// console.log(step1)
// let step2 = solve(step1)
// console.log(step2)
// let result = convertIntoString(step2)
// console.log(result)

// console.log(solveSudoku(hard[1][0]))

// replace numbers with letter/symbols in the entire object

function modify(obj) {
    for (let puzzle in obj) {
      for (let version in obj[puzzle]) {
        obj[puzzle][version] = obj[puzzle][version].replaceAll('1','❤️').replaceAll('2','I').replaceAll('3','R').replaceAll('4','O').replaceAll('5','N').replaceAll('6','H').replaceAll('7','A').replaceAll('8','C').replaceAll('9','K');
      }
    }
    return obj
}

convertIntoArray