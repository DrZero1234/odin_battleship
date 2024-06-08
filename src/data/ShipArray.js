import Ship from "../classes/Ship"

export function ShipsArray(boardSize) {
    let array;
    switch(true) {
        case (boardSize <= 5):
            array = [
                new Ship(3,"Submarine"),
                new Ship(4,"Battleship"),
                new Ship(4,"Battleship"),
            ]
            break;
        case(boardSize > 5 || boardSize < 11): 
            array = [
                new Ship(3,"Submarine"),
                new Ship(3,"Submarine"),
                new Ship(4,"Battleship"),
                new Ship(4,"Battleship"),
                new Ship(5,"Carrier"),
            ]
            break;
        case(boardSize > 10):
            array = [
                new Ship(3,"Submarine"),
                new Ship(3,"Submarine"),
                new Ship(3,"Submarine"),
                new Ship(3,"Submarine"),
                new Ship(4,"Battleship"),
                new Ship(4,"Battleship"),
                new Ship(4,"Battleship"),
                new Ship(5,"Carrier"),
                new Ship(5,"Carrier"),
            ]
            break;
    }
    return array
}
