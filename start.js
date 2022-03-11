import {addPlayers} from "./createPlayer.js";
import {addCardsAndModel} from "./createCart.js";
import {activePlayer} from "./playerActive.js";

export function startGame (target, domNodes, dataModel) {
	const supposedNum = {
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5
	};

	let numberPlayers = supposedNum[[...target.classList][1]];
	console.log([...target.classList]);
	
	if(numberPlayers){
		domNodes.startMenu.classList.add(`guess`);
		domNodes.mainContainer.classList.remove(`guess`);
	
		addPlayers(domNodes, dataModel, numberPlayers);

		domNodes.footer.classList.remove(`guess`);
	
		addCardsAndModel(domNodes, dataModel);
		activePlayer(dataModel);
	} 
}
