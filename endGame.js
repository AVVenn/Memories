export function endGame(dataModel, domNodes, counterClick) {
	let endGameModal = document.querySelector('.end');

	let sortDataPlyers = dataModel.players.sort((a,b) => b.points - a.points);
	let winner = sortDataPlyers.find((player) => (player.points === sortDataPlyers[0].points) && !player.passedRound) || sortDataPlyers[0];

	if(!endGameModal) {
		endGameModal = document.createElement('div');
		endGameModal.classList.add('end');

		endGameModal.insertAdjacentHTML(`afterbegin`,  
		`
		<h2 class="h2">Игра завершена!!!</h2>
		<div class ="winnersContainer">
			<div class="number winner">Победитель - "${winner.nick}" c ${winner.points} отгаданными парами </div> 
			<div class="clickInfo">Количество кликов совершено: ${counterClick}</div>
			<div class="restartGame">Рестарт</div>
		</div>
		`);
	}	

	domNodes.mainContainer.classList.add(`guess`);
	domNodes.footer.classList.add(`guess`);

	document.querySelector(`body`).append(endGameModal);
}
