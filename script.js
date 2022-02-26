import {startGame} from "./start.js";
import {basicGame} from "./checkCompare.js"; 	
import {createStartMenu} from "./createStartMenu.js"

createStartMenu ();

let domNodes = {
	mainContainer: document.querySelector(`.main-container`),
	footer: document.querySelector(`.footer`),
	startMenu: document.querySelector(`.startMenu`),
	startContainer: document.querySelector(`.flexContainer`)
}

const data = {
	carts: [],
	players: []
}

// window.screen.width < 415 ? alert(`Для комфортной игры лучше использовать альбомную ориентацию  |___|`) : null;

domNodes.startContainer.addEventListener(`click`, ({target}) => {
	startGame(target, domNodes, data);
});

domNodes.mainContainer.addEventListener(`click`, ({target}) => {
	basicGame(target, data, domNodes);
});




