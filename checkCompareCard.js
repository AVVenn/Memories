import {activePlayer} from "./playerActive.js";
import {endGame} from "./endGame.js";
import {restart} from "./restartGame.js"

let arrayOpenedCards = [];
let	counterClick = 0;             															                                      

export function basicGame(target, dataModel, domNodes){				
	if (target.tagName === "MAIN") {												
		return;
	}

	let clickedCart = dataModel.cards.find((item) => item.id === +target.id);			       

	clickedCart.checked = true;													
	target.classList.remove(`notOpen`);		
	counterClick++									

	if(!arrayOpenedCards.includes(clickedCart)){
		arrayOpenedCards.push(clickedCart);
	}


	let playerTurn = document.querySelector(`.playerTurn`);
	let playerTurnInModel = dataModel.players.find((player) => player.id === playerTurn.id);
	let playerMove = [ playerTurn, playerTurnInModel ];  								
	

	if (arrayOpenedCards.length > 2) { 								
		let [firstOpenedCardId, secondOpenedCardId] = [arrayOpenedCards[0].id, arrayOpenedCards[1].id];										
		document.getElementById(firstOpenedCardId).classList.add(`notOpen`);
		document.getElementById(secondOpenedCardId).classList.add(`notOpen`);

		dataModel.cards.forEach((item) => 
			item.checked = item.id === firstOpenedCardId || item.id === secondOpenedCardId
		); 

		firstOpenedCardId = ``;
		secondOpenedCardId = ``; 
		arrayOpenedCards = arrayOpenedCards.slice(2);								

		playerMove[0].classList.remove(`playerTurn`);        														
		playerMove = activePlayer(dataModel)																		
	} else if (arrayOpenedCards.length === 2 && arrayOpenedCards[0].numberCart === arrayOpenedCards[1].numberCart) {   
		let [firstOpenedCardId, secondOpenedCardId] = [arrayOpenedCards[0].id, arrayOpenedCards[1].id];		
		document.getElementById(firstOpenedCardId).classList.add(`guess`);
		document.getElementById(secondOpenedCardId).classList.add(`guess`);

		// data.cards.forEach((item) => item.id === firstOpenedCard || item.id === secondOpenedCard ? (item.guessed = true, item.checked = false));
		
		dataModel.cards.forEach(
			(item) =>  {
				const anyMatches = item.id === firstOpenedCardId || item.id === secondOpenedCardId;
				if(anyMatches) {
					item.guessed = anyMatches;
					item.checked = !anyMatches;
				}
			} 
		); 
		
		arrayOpenedCards = [];
		firstOpenedCardId = ``;
		secondOpenedCardId = ``;

		playerMove[1].points++;		
		playerMove[0].textContent = `${playerMove[1].nick} = ${playerMove[1].points}`;		

		if (!dataModel.cards.find((cart) => !cart.guessed)){
			endGame(dataModel, domNodes, counterClick);
			restart(dataModel, counterClick);
		} 
	} 
};
