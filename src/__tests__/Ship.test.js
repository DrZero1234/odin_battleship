import Ship from "../classes/Ship"
describe("Testing Ship class", () => {
    it("Placeholder test", () => {
        expect(true).toBe(true)
    })

    it("Testing the hit function", () => {
        const ship = new Ship(3);
        ship.hit()
        expect(ship.hitCounter).toBe(1)
        expect(ship.sunk).toBeFalsy()

        ship.hit()
        expect(ship.hitCounter).toBe(2)
        expect(ship.sunk).toBeFalsy()
    })
    it("Testing the hit function", () => {
        const ship = new Ship(3);
        for (let i = 0; i < 5; i++) {
            ship.hit()
        }

        expect(ship.hitCounter).toBe(3);
        expect(ship.isSunk).toBeTruthy()
    })
})