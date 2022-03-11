export function restart(dataModel, counterClick) {
	const startMenu = document.querySelector(`.startMenu`);
	const endGameModal = document.querySelector(`.end`);
	const restartButton = document.querySelector(`.restartGame`);					

	restartButton.addEventListener(`click`, () => {
		counterClick = 0;
		dataModel.cards.length = 0;
		dataModel.players.length = 0;
 
		document.querySelectorAll(`.basicCart`).forEach((card) => card.remove());
		document.querySelectorAll(`.basicPlayer`).forEach((player) => player.remove());

		endGameModal.remove();
		startMenu.classList.remove(`guess`);
	})
}
