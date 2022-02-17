export function restart(data, counterClick) {
	const startMenu = document.querySelector(`.startMenu`);
	const end = document.querySelector(`.end`);
	const restartButton = document.querySelector(`.restartGame`);					

	restartButton.addEventListener(`click`, () => {
		counterClick = 0;
		data.carts.length = 0;
		data.players.length = 0;

		document.querySelectorAll(`.basicCart`).forEach((cart) => cart.remove());
		document.querySelectorAll(`.basicPlayer`).forEach((player) => player.remove());

		end.classList.add(`guess`);
		startMenu.classList.remove(`guess`);
	})
}