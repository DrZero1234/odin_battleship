import Player from "../classes/Player"
import { randomizeShipPlacement } from "../functions/randomizeShipPlacement";

describe("Testing randomizeShipPlacement", () => {
    it("Testing the function", () => {
        for (let i = 0; i < 100; i++) {
            let player = new Player("Bob", true);
            expect(randomizeShipPlacement(player)).toBe(true)
        }

    })
})