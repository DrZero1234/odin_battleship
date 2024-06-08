export function attackRandomTarget(gameboard) {
    let attackLanded = false;
    while (!attackLanded || gameboard.isAllShipSunk) {
        let row = Math.floor(Math.random() * gameboard.boardSize);
        let col = Math.floor(Math.random() * gameboard.boardSize);
        if (gameboard.board[row][col] === null || !gameboard.board[row][col].sunk) {
            gameboard.receiveAttack(row,col);
            attackLanded = true
            return true
        } 
        continue
    }
    return false
    
}