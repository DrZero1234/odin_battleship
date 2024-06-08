import { ShipsArray } from "../data/ShipArray";
import Gameboard from "./Gameboard";

class Player {
    constructor(name,isHuman = false) {
        this.name = name;
        this.isHuman = isHuman
        this.gameboard = new Gameboard();
        this.shipsArray = ShipsArray(this.gameboard.boardSize);
    }
}

export default Player