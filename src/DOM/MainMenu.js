export function MainMenu() {
    let menu_container = document.querySelector(".menu-container")
    let menu_content = document.querySelector(".menu-content")
    let game_wrapper = document.querySelector(".game-wrapper")

    const battleShipTitle = document.createElement("h1");
    battleShipTitle.id = "site-title";
    battleShipTitle.textContent = "BattleShip"

    const cpuButton = document.createElement("button")
    cpuButton.className = "gamemode-btn";
    cpuButton.textContent = "vs CPU"

    const playerButton = document.createElement("button")
    playerButton.className = "gamemode-btn";
    playerButton.textContent = "vs Player"

    cpuButton.addEventListener("click", () => {menu_container.classList.add("inactive");game_wrapper.classList.remove("inactive")})
    playerButton.addEventListener("click", () => {menu_container.classList.add("inactive");game_wrapper.classList.remove("inactive")})

    menu_content.appendChild(battleShipTitle)
    menu_content.appendChild(cpuButton)
    menu_content.appendChild(playerButton)


    
}