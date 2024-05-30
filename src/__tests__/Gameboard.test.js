import Gameboard from "../classes/Gameboard";
import Ship from "../classes/Ship";

describe("Testing Gameboard", () => {
    it("Board array creation", () => {
        const gameboard = new Gameboard();
        const board = gameboard.board
        expect(board.length).toBe(10)
        expect(board[0].length).toBe(10)
    })


    describe("Testing the Ship placement function", () => {
        it("Succesfully placing a ship to the gameboard", () => {
        const gameboard = new Gameboard()
        const ship = new Ship(3);

        expect(gameboard.placeShip(ship, 3,5)).toBe(true)
        expect(gameboard.board[3]).toEqual([null,null,null,null,null,ship,ship,ship,null,null])
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

    describe("Testing the receiveAttack function", () => {
        it("Trying to attack a row outside of the board", () => {
            const gameboard = new Gameboard()

            // The max row (for now) is 9
            expect( gameboard.receiveAttack(10,5)).toBe(false)
        })

        
        it("Trying to attack a column outside of the board", () => {
            const gameboard = new Gameboard()

            // The max column (for now) is 9
            expect(gameboard.receiveAttack(3,12)).toBe(false)
        })
        it("Attacking multiple empty slots", () => {
            const gameboard = new Gameboard()

            expect(gameboard.receiveAttack(3,5)).toBe(true)
            expect(gameboard.board[3]).toEqual([null,null,null,null,null,0,null,null,null,null])
            gameboard.receiveAttack(1,2)
            gameboard.receiveAttack(7,1)
            gameboard.receiveAttack(5,4)
            gameboard.receiveAttack(3,9)
            gameboard.receiveAttack(3,9)
            gameboard.receiveAttack(5,4)
            gameboard.receiveAttack(5,4)
            expect(gameboard.missedAttacks).toEqual([[3,5],[1,2],[7,1],[5,4],[3,9]])
        })

        it("Attacking an already attacked slot", () => {
            const gameboard = new Gameboard()
            expect(gameboard.receiveAttack(3,5)).toBe(true)
            expect(gameboard.receiveAttack(3,5)).toBe(false)

        })
        it("Attacking a slot where a ship is", () => {
            const gameboard = new Gameboard()
            const ship = new Ship(3);
            const ship2 = new Ship(4)
            gameboard.placeShip(ship,3,5)
            gameboard.placeShip(ship2,1,1)

            // The max column (for now) is 9
            expect(gameboard.receiveAttack(3,5)).toBe(true)
            expect(gameboard.board[3]).toEqual([null,null,null,null,null,0,ship,ship,null,null]);
            expect(ship.hitCounter).toBe(1)
            expect(ship2.hitCounter).toBe(0)
        })

        it("Destroying all of the ships, testing the allShipSunk detection", () => {
            const gameboard = new Gameboard();
            const ship = new Ship(2);
            const ship2 = new Ship(2);
            gameboard.placeShip(ship,1,2);
            gameboard.placeShip(ship2,3,5);

            gameboard.receiveAttack(1,2);
            gameboard.receiveAttack(1,3);

            gameboard.receiveAttack(3,5);
            gameboard.receiveAttack(3,6);

            expect(gameboard.isAllShipSunk).toBe(true)


        })

        it("Letting ships afloat the allSunk detection should be false", () => {
            const gameboard = new Gameboard();
            const ship = new Ship(4);
            const ship2 = new Ship(4);


            gameboard.placeShip(ship,1,2);
            gameboard.placeShip(ship2,3,5);

            gameboard.receiveAttack(1,2);
            gameboard.receiveAttack(1,3);

            gameboard.receiveAttack(3,5);
            gameboard.receiveAttack(3,6);

            expect(gameboard.isAllShipSunk).toBe(false)


        })
    })

    
})