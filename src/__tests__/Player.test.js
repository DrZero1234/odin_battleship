import Player from "../classes/Player";

describe("Testing the player class", () => {
    test("Placeholder test", () => {
        const player = new Player("Player 1", true);
        expect(player.name).toBe("Player 1")
        expect(player.gameboard.board.length).toBe(10)
    })
})