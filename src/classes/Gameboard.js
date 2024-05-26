class Gameboard {
    constructor() {
        this.boardSize = 10;
        this.board = new Array(this.boardSize).fill(null).map((o,i) => new Array(this.boardSize).fill(null))
        this.missedAttacks = [];
        this.isAllShipSunk = false;
    }

    placeShip(ship,row,col) {
        if (row > this.board.length - 1) {
            throw new Error("The row is out of bounds")
        }
        if (col > this.board.length - 1) {
            throw new Error("The col is out of bounds")
        }
        if ((col + ship.length) > this.board.length - 1) {
            throw new Error("The ship hangs off the board")
        }

        const ship_placement = this.board[row].slice(col, (col + ship.length))
        if (!ship_placement.every((element) => element === null)) {
            throw new Error("This part of the board is occupied")
        }

        for (let i = col; i < col+ship.length;i++) {
            this.board[row][i] = 1;
        }
        console.log(this.board[row])
        return true
        
    }
}

export default Gameboard