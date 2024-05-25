class Gameboard {
    constructor() {
        this.boardSize = 10;
        this.board = new Array(this.boardSize).fill(null).map((o,i) => new Array(this.boardSize).fill(null))
    }
}

export default Gameboard