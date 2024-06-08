import Gameboard from "../classes/Gameboard"
import Ship from "../classes/Ship";
import { attackRandomTarget } from "../functions/attackRandomTarget";

describe("attackRandomTarget function test", () => {
    test("In an empty array should return true", () => {
        for (let i = 0; i < 100; i++) {
            let board = new Gameboard();
            expect(attackRandomTarget(board)).toBe(true)
        }
    })

    test.skip("Attacking a board full of sunk Ships", () => {
        let gameboard = new Gameboard(5);
        for (let i = 0; i < gameboard.boardSize;i++) {
            for (let j = 0; j < gameboard.boardSize;j++) {
                let ship = new Ship(1);
                ship.sunk = true;
                gameboard.placeShip(ship,i,j)
            }
        }
        expect(attackRandomTarget(gameboard)).toBe(false)
    })
})