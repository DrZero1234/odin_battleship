import Player from "../classes/Player";
import Ship from "../classes/Ship";
import Gameboard from "../classes/Gameboard";
import { ShipsArray } from "../data/ShipArray";
import { isSpaceAvilable } from "./isSpaceAvailable";

// Not working with 5 piece board

export function randomizeShipPlacement (player) {
    
    const board = player.gameboard;
    const ships = player.shipsArray
    let row_cord;
    let col_cord;
    let currentShip;
    let ship_placement;
    let expectedLength = ships.reduce((acc,currentValue) => acc + currentValue.length,0)
    let shipDocksCounter = 0

    for (let i = 0; i < ships.length; i++) {
        currentShip = ships[i];

        let placeFound = false;
        while (!placeFound) {
            row_cord = Math.floor(Math.random() * board.boardSize);
            col_cord = Math.floor(Math.random() * board.boardSize)
            if (col_cord >= currentShip.length) {
                col_cord -= currentShip.length 
            }
            if (isSpaceAvilable(board.board,currentShip,row_cord,col_cord)) {
                board.placeShip(currentShip,row_cord,col_cord)
                placeFound = true
            }
            else {
                continue
            }
        }
    }

    for (let row of board.board) {
        shipDocksCounter += row.filter((elem) => elem instanceof Ship).length;
    }


    if (shipDocksCounter != expectedLength) {
        return false
    }
    return true

    
}