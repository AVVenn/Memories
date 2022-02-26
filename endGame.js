export function endGame(data, domNodes, counterClick) {
	let end = document.querySelector('.end');

	let sortDataPlyers = data.players.sort((a,b) => b.points - a.points);
	let winner = sortDataPlyers.find((player) => (player.points === sortDataPlyers[0].points) && player.passedRound === false) || sortDataPlyers[0];

	function createEnd () {
		end = document.createElement('div');
		end.classList.add('end');

		end.insertAdjacentHTML(`afterbegin`,  
		`
		<h2 class="h2">Игра завершена!!!</h2>
		<div class ="winnersContainer">
			<div class="number winner">Победитель - "${winner.nick}" c ${winner.points} отгаданными парами </div> 
			<div class="clickInfo">Количество кликов совершено: ${counterClick}</div>
			<div class="restartGame">Рестарт</div>
		</div>
		`);
	}


	if(end === null) {
		createEnd (); 
	}

	// end === null ? createEnd () : end.classList.remove(`guess`);
	// end.classList.remove(`guess`);		

	domNodes.mainContainer.classList.add(`guess`);
	domNodes.footer.classList.add(`guess`);

	document.querySelector(`body`).append(end);
}
