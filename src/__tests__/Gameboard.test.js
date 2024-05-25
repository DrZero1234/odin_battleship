import Gameboard from "../classes/Gameboard";

describe("Testing Gameboard", () => {
    it("Board array creation", () => {
        const gameboard = new Gameboard();
        const board = gameboard.board
        expect(board.length).toBe(10)
        expect(board[0].length).toBe(10)
    })
})