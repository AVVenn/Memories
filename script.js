import {startGame} from "./start.js";
import {basicGame} from "./checkCompareCard.js"; 	
import {createStartMenu} from "./createStartMenu.js"

createStartMenu ();

const domNodes = {
	mainContainer: document.querySelector(`.main-container`),
	footer: document.querySelector(`.footer`),
	startMenu: document.querySelector(`.startMenu`),
	startContainer: document.querySelector(`.flexContainer`)
}

const dataModel = {
	cards: [],
	players: []
}

// window.screen.width < 415 ? alert(`Для комфортной игры лучше использовать альбомную ориентацию  |___|`) : null;

domNodes.startContainer.addEventListener(`click`, ({target}) => {
	startGame(target, domNodes, dataModel);
});

domNodes.mainContainer.addEventListener(`click`, ({target}) => {
	basicGame(target, dataModel, domNodes);
});




