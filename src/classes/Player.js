import { ShipsArray } from "../data/ShipArray";
import Gameboard from "./Gameboard";

class Player {
    constructor(name,isHuman = false,boardSize = 10) {
        this.name = name;
        this.isHuman = isHuman
        this.boardSize = boardSize;
        this.gameboard = new Gameboard(boardSize);
        this.shipsArray = ShipsArray(boardSize);
    }
}

export default Player