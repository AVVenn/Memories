import {activePlayer} from "./playerActive.js";
import {endGame} from "./endGame.js";
import {restart} from "./restartGame.js"

let arrayOpenedCarts = [];
let	counterClick = 0;             															                                      

export function basicGame(target, data, domNodes){				
	if (target.tagName === "MAIN") {												
		return;
	}

	let clickedCart = data.carts.find((item) => item.id === +target.id);			       

	clickedCart.checked = true;													
	target.classList.remove(`notOpen`);		
	counterClick++									

	!arrayOpenedCarts.includes(clickedCart) ? arrayOpenedCarts.push(clickedCart) : arrayOpenedCarts;	
	

	let playerTurn = document.querySelector(`.playerTurn`);
	let playerMove = [ playerTurn, data.players.find((player) => player.id === playerTurn.id)];  								



	if (arrayOpenedCarts.length > 2) { 																			
		let [first, second] = [arrayOpenedCarts[0].id, arrayOpenedCarts[1].id];

		document.getElementById(first).classList.add(`notOpen`);
		document.getElementById(second).classList.add(`notOpen`);

		data.carts.forEach((item) => item.id === first || item.id === second ? item.checked = false : undefined); 
		first = ``;
		second = ``; 
		arrayOpenedCarts = arrayOpenedCarts.slice(2);								

		playerMove[0].classList.remove(`playerTurn`);        														
		playerMove = activePlayer(data)																		
	}
	

	if (arrayOpenedCarts.length === 2 && arrayOpenedCarts[0].numberCart === arrayOpenedCarts[1].numberCart) {   		
		let [first, second] = [arrayOpenedCarts[0].id, arrayOpenedCarts[1].id];

		document.getElementById(first).classList.add(`guess`);
		document.getElementById(second).classList.add(`guess`);

		data.carts.forEach((item) => item.id === first || item.id === second ? (item.guessed = true, item.checked = false) : undefined);
		arrayOpenedCarts = [];
		first = ``;
		second = ``;

		playerMove[1].points++;		
		playerMove[0].textContent = `${playerMove[1].nick} = ${playerMove[1].points}`;			

		if (data.carts.filter((cart) => cart.guessed === false).length === 0){
			endGame(data, domNodes, counterClick);
			restart(data, counterClick);
		}
	} 
};

