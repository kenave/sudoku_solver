function solver(sudoku){
  /* 
  takes in a 2d array representation of a sudoku
    format is [[row], [row], [row], [row], [row], [row], [row], [row], [row]]
    empty spaces are represented by 0
  recursive function? maybe we can refactor after we get it working
  returns the solved sudoku

  basic sudoku rules:
    rows, columns, and 3x3 squares must be uniquely filled by the numbers 1-9
    there can be no overlap

  need 2 helper functions:
    one that checks for a number in a column
    one that checks for a number in a square
    might as well make one to check for a number in a row
  */

  function checkInColumn(column, target){
    /* checks for a target number in the given column of the sudoku array, returns bool
    how to traverse the columns?
    first column:
    [0][0]
    [1][0]
    [2][0]
    [3][0] etc.
    i.e. columns are represented by the second index */

    for (let i = 0; i < 9; i++){
      if (sudoku[i][column - 1] === target) return true
    }
    return false
  }

  function checkInRow(row, target){
    // checks for a target number in the specified row of the sudoku array, returns bool
    for (let i = 0; i < 9; i++){
      if (sudoku[row - 1][i] === target) return true
    }
    return false
  }

  function checkInSquare(square, target){
    /* checks for a target number in the given column of the sudoku array, returns bool
    need to access the 3x3 squares (henceforth referred to as a "square")
    first square:
     x  y
    [0][0]...[0][2]
    [1][0]...[1][2]
    [2][0]...[2][2]
    i.e. square configuration:
      1 | 2 | 3
     ---|---|---
      4 | 5 | 6
     ---|---|---
      7 | 8 | 9
    for square 1: x from 0 - 2, y from 0 - 2
    for square 2: x from 3 - 5, y from 0 - 2
    for square 3: x from 6 - 8, y from 0 - 2
    for square 4: x from 0 - 2, y from 3 - 5
    for square 5: x from 3 - 5, y from 3 - 5
    for square 6: x from 6 - 8, y from 3 - 5
    for square 7: x from 0 - 2, y from 6 - 8
    for square 8: x from 3 - 5, y from 6 - 8
    for square 9: x from 6 - 8, y from 6 - 8
    */
    const squareArray = [
      [0,0], [3,0], [6,0],
      [0,3], [3,3], [6,3],
      [0,6], [3,6], [6,6]
    ]
    const lowerBoundX = squareArray[square - 1][0]
    const upperBoundX = lowerBoundX + 3
    const lowerBoundY = squareArray[square - 1][1]
    const upperBoundY = lowerBoundY + 3

    for (let row = lowerBoundX; row < upperBoundX; row++) {
      for (let column = lowerBoundY; column < upperBoundY; column++){
        // console.log(sudoku[column][row])
        if (sudoku[column][row] === target) return true
      }
    }
    return false
  }
  
  const completed = 45  // summation of 1 to 9 may be a useful check for completed rows, columns, and squares

  // now to do the solving part
  // can start with checking for a number in the first row and column and square
  function possible(x, y, num) {
    if (sudoku[y][x] !== 0) return false
    if (checkInColumn(x, num)) return false
    if (checkInRow(y, num)) return false
    const x0 = Math.ceil((x-1) / 3)
    const y0 = Math.ceil((y-1) / 3)
    const square = x0 + (3 * (y0-1))
    if (checkInSquare(square, num)) return false
    return true
  }

  console.log(possible(2, 3, 6)) // false
  console.log(possible(5, 8, 9)) // false
  console.log(possible(5, 8, 7)) // true

}

let sudoku_easy = [
//x  1  2  3  4  5  6  7  8  9      y
    [0, 9, 1, 2, 5, 7, 6, 0, 0], // 1
    [0, 2, 6, 0, 1, 4, 0, 9, 8], // 2
    [0, 0, 7, 0, 0, 0, 0, 0, 1], // 3
    [0, 1, 0, 5, 6, 9, 4, 8, 0], // 4
    [7, 0, 5, 1, 4, 0, 9, 3, 0], // 5
    [4, 0, 0, 0, 0, 0, 0, 6, 0], // 6
    [6, 0, 0, 0, 8, 0, 0, 0, 9], // 7
    [0, 5, 0, 0, 0, 3, 2, 0, 0], // 8
    [0, 3, 0, 9, 0, 0, 8, 0, 0]  // 9
]

let sudoku_medium = [
  [0, 0, 0, 0, 0, 5, 8, 9, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 0, 0, 0, 4, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 4, 3, 9],
  [0, 0, 7, 0, 3, 0, 0, 2, 0],
  [2, 3, 0, 9, 0, 0, 0, 1, 0],
  [8, 0, 0, 0, 6, 0, 7, 0, 0],
  [1, 0, 0, 8, 0, 0, 0, 0, 0]
]

let sudoku_hard = [
  [0, 0, 0, 0, 0, 0, 6, 2, 0],
  [2, 0, 0, 5, 0, 0, 3, 0, 7],
  [0, 0, 1, 3, 0, 0, 0, 0, 0],
  [8, 3, 0, 4, 0, 0, 0, 0, 0],
  [0, 5, 0, 8, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 5, 8],
  [0, 9, 0, 0, 7, 0, 2, 3, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 6],
  [0, 4, 0, 0, 0, 8, 0, 0, 0]
]

let sudoku_expert = [
  [4, 0, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 2, 0, 5, 0, 6, 0, 4],
  [0, 9, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 0, 8, 0, 0],
  [0, 4, 0, 0, 0, 8, 0, 0, 9],
  [0, 0, 0, 4, 6, 0, 0, 3, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 6],
  [0, 2, 0, 0, 0, 4, 3, 0, 0],
  [1, 0, 7, 0, 0, 0, 0, 5, 0]
]

solver(sudoku_easy)
