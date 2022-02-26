import {addPlayers} from "./createPlayer.js";
import {addCartsAndModel} from "./createCart.js";
import {activePlayer} from "./playerActive.js";

export function startGame (target, domNodes, data) {
	let supposedNum = {
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5
	};

	let numberPlayers = supposedNum[[...target.classList][1]];

	if(typeof numberPlayers === 'number'){
		domNodes.startMenu.classList.add(`guess`);
		domNodes.mainContainer.classList.remove(`guess`);
	
		addPlayers(domNodes, data, numberPlayers);

		domNodes.footer.classList.remove(`guess`);
	
		addCartsAndModel(domNodes, data);
		activePlayer(data);
	} 
}
