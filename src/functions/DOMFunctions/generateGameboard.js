import { repeat } from "lodash";
import Player from "../../classes/Player";
import { attackCell } from "./attackCell";
import { updateCell } from "./updateCell";

export function generateGameboard(player) {
    if (!player instanceof Player) {
        return false
    }
    const gameboardElems = document.querySelectorAll(".gameboard-grid");
    console.log(gameboardElems)
    console.log(player.boardSize)
    gameboardElems.forEach((gameboardElem) => {gameboardElem.setAttribute("style","grid-template-columns : repeat(" + player.boardSize + ", 1fr" )})
    let gameboard_grid;
    let board_title;
    const board = player.gameboard.board;
    switch(player.isHuman) {
        case true:
            gameboard_grid = document.querySelector(".player-board")
            board_title = document.getElementById("player-title")
            board_title.textContent = "Player´s board"
            break;
        case false: 
            gameboard_grid = document.querySelector(".cpu-board")
            board_title = document.getElementById("cpu-title")
            board_title.textContent = "CPU´s board"
            break;
    }
    console.log(gameboard_grid);

    for (let row = 0; row < player.gameboard.boardSize;row++) {
        for (let col = 0; col < player.gameboard.boardSize;col++) {
            let className;
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.dataset.row = row;
            cell.dataset.col = col;
            if (board[row][col] !== null && player.isHuman) {
                cell.style.backgroundColor = "blue"
                console.log(`Ship cell ${row} ${col}`)
            }
            cell.addEventListener("click", () => {attackCell(player),updateCell(player,row,col)})
            gameboard_grid.appendChild(cell);
        }
    }
}