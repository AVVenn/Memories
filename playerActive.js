export  function activePlayer (data) { 
															
	let playerInData = data.players.find((player) => player.passedRound === false);

	if (playerInData === undefined) {
		playerInData = data.players[0];
		data.players.forEach((player) => player.passedRound = false);
	}

	playerInData.passedRound = true;

	let playerTurn = document.getElementById(`${playerInData.id}`);
	playerTurn.classList.add(`playerTurn`);   											
	playerTurn.textContent = `${playerTurn.nick} = ${playerInData.points}`;
	
	return [playerTurn, playerInData];
}