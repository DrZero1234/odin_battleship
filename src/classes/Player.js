import Gameboard from "./Gameboard";

class Player {
    constructor(name,isHuman = false) {
        this.name = name;
        this.isHuman = isHuman
        this.gameboard = new Gameboard();
    }
}

export default Player