class Ship {
    constructor(length) {
        this.length = length;
        this.hitCounter = 0;
        this.sunk = false
    }

    hit() {
        if (this.length > this.hitCounter) {
            this.hitCounter++;
        }
        this.isSunk();
    }

    isSunk() {
        if (this.hitCounter >= this.length) {
            this.sunk = true
        }
    }
}

export default Ship