import _ from 'lodash';
import { MainMenu } from './DOM/MainMenu';

import "./style.css"
import { generateGameboard } from './functions/generateGameboard';
import Player from './classes/Player';
import { randomizeShipPlacement } from './functions/randomizeShipPlacement';


const isGameStarted = false

const player = new Player("Player", true,20)
const cpu = new Player("CPU", false,20)

const isPlayerTurn = true

randomizeShipPlacement(player);
randomizeShipPlacement(cpu)

function checkGameOver () {
    return player.gameboard.isAllShipSunk() || player.gameboard.isAllShipSunk()
}

function gameLogic() {
    let game_container = document.querySelector(".game-container");
    let menu_container = document.querySelector(".menu-container");

    generateGameboard(player);
    generateGameboard(cpu)

    if (!isGameStarted) {
        MainMenu()
    }
    
}

document.addEventListener("DOMContentLoaded", gameLogic)