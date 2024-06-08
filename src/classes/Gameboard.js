import Ship from "./Ship";

class Gameboard {

    
    constructor(boardSize = 10) {
        this.boardSize = boardSize;
        this.board = new Array(this.boardSize).fill(null).map((o,i) => new Array(this.boardSize).fill(null))
        this.missedAttacks = [];
        this.isAllShipSunk = false;
    }

    placeShip(ship,row,col) {
        // Range checking
        if (row > this.boardSize - 1) {
            throw new Error("The row is out of bounds")
        }
        if (col > this.boardSize - 1) {
            throw new Error("The col is out of bounds")
        }
        if ((col + ship.length) > this.boardSize) {
            throw new Error("The ship hangs off the board")
        }
        // TODO for now this only checks the horizontal placement, do it for the vertical placement aswell
        const ship_placement = this.board[row].slice(col, (col + ship.length))
        if (!ship_placement.every((element) => element === null)) {
            throw new Error("This part of the board is occupied")
        }

        for (let i = col; i < col+ship.length;i++) {
            this.board[row][i] = ship;
        }
        return true
    }

    receiveAttack(row,col) {
        // Range checking
        if (row > this.boardSize - 1) {
            console.error("The row is out of bounds")
            return false
        }
        if (col > this.boardSize - 1) {
            console.error("The col is out of bounds")
            return false
        }

        // This place was attacked 
        const targetCell = this.board[row][col]
        if (targetCell === 0) {
            console.error("This place was already attacked");
            return false
        }
        // When we hit a ship
        else if (targetCell instanceof Ship) {
            let targetShip = this.board[row][col];
            targetShip.hit();
            this.checkIfAllSunk();
        }
        // IF the hit is an empty space 
        else {
            this.missedAttacks.push([row,col])
        }
        this.board[row][col] = 0
        return true
    }

    checkIfAllSunk() {
        let shipCells = [];
        let rowShips
        for(let row of this.board) {
            rowShips = row.filter((elem) => elem instanceof Ship)
            shipCells = shipCells.concat(rowShips)
        }
        
        this.isAllShipSunk = shipCells.every((shipCell) => shipCell.sunk === true)
        return this.isAllShipSunk
    }
}

export default Gameboard