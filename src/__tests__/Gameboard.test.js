import Gameboard from "../classes/Gameboard";
import Ship from "../classes/Ship";

describe("Testing Gameboard", () => {
    it("Board array creation", () => {
        const gameboard = new Gameboard();
        const board = gameboard.board
        expect(board.length).toBe(10)
        expect(board[0].length).toBe(10)
    })

    it("Succesfully placing a ship to the gameboard", () => {
        const gameboard = new Gameboard()
        const ship = new Ship(3);

        expect(gameboard.placeShip(ship, 3,5)).toBe(true)



    })

    it("Placing a Ship to a non existent row index", () => {
        const gameboard = new Gameboard()
        const ship = new Ship(3);

        // The max row (for now) is 9
        expect(() => gameboard.placeShip(ship,10,5)).toThrow(/row/)
    })

    
    it("Placing a Ship to a non existent column index", () => {
        const gameboard = new Gameboard()
        const ship = new Ship(3);

        // The max column (for now) is 9
        expect(() => gameboard.placeShip(ship,3,12)).toThrow(/col/)
    })

    it("The ship hangs out of the board, should fail", () => {
        const gameboard = new Gameboard()
        const ship = new Ship(3);

        // Ship goes out the board
        expect(() => gameboard.placeShip(ship,3,8)).toThrow("The ship hangs off the board")
    })
})