// Todo check the space if the ship placement is vertical (change the slice & return value accordingly)

export function isSpaceAvilable(board,ship,row,col) {
    let slice = board[row].slice(col, col + ship.length);
    return slice.every((elem) => elem === null)
}