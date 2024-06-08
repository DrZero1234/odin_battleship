import _ from 'lodash';
import printMe from './print';

import "./style.css"
import { generateGameboard } from './functions/generateGameboard';
import Player from './classes/Player';


const player = new Player("Player", false)

document.addEventListener("DOMContentLoaded", () => generateGameboard(player))