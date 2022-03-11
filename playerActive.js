export  function activePlayer (dataModel) { 
															
	let playerInData = dataModel.players.find((player) => player.passedRound === false);

	if (playerInData === undefined) {
		playerInData = dataModel.players[0];
		dataModel.players.forEach((player) => player.passedRound = false);
	}

	playerInData.passedRound = true;

	let playerTurn = document.getElementById(`${playerInData.id}`);
	playerTurn.classList.add(`playerTurn`);   											
	playerTurn.textContent = `${playerTurn.nick} = ${playerInData.points}`;
	
	return [playerTurn, playerInData];
}
