import Player from "../classes/Player";

export function generateGameboard(player) {
    if (!player instanceof Player) {
        return false
    }
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

    for (let i = 0; i < player.gameboard.boardSize;i++) {
        for (let j = 0; j < player.gameboard.boardSize;j++) {
            let className;
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.dataset.row = i;
            cell.dataset.col = j;
            gameboard_grid.appendChild(cell);
        }
    }
    


}