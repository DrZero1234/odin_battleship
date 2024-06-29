export function updateCell(player,row,col) {
    const gameboard = player.gameboard;
    let DOM_board = player.isHuman ? document.querySelector(".player-board") : document.querySelector(".cpu-board");
    let target_cell = DOM_board.querySelector(`[data-row="${row}"][data-col="${col}"]`)

    console.log(target_cell)


}